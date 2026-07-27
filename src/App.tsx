import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, LogOut, Sparkles, Volume2, VolumeX } from "lucide-react";
import bedroom from "../assets/bedroom-opening.png";
import { api, Session } from "./api";
import { story } from "./data/story";

function useAmbient(enabled: boolean) {
  const context = useRef<AudioContext | null>(null);
  useEffect(() => {
    if (!enabled) { context.current?.close(); context.current = null; return; }
    const audio = new AudioContext(); const gain = audio.createGain(); const oscillator = audio.createOscillator();
    oscillator.type = "sine"; oscillator.frequency.value = 196; gain.gain.value = 0.012;
    oscillator.connect(gain).connect(audio.destination); oscillator.start(); context.current = audio;
    return () => { oscillator.stop(); audio.close(); context.current = null; };
  }, [enabled]);
}

export default function App() {
  const [session, setSession] = useState<Session | null>(() => { const raw = localStorage.getItem("until-sunrise-session"); return raw ? JSON.parse(raw) : null; });
  const [hasAccount, setHasAccount] = useState<boolean | null>(null);
  const [password, setPassword] = useState(""); const [error, setError] = useState("");
  const [sceneIndex, setSceneIndex] = useState(0); const [sound, setSound] = useState(false); const [saved, setSaved] = useState(false);
  useAmbient(sound);
  const scene = story[sceneIndex];
  const chapters = useMemo(() => Array.from(new Set(story.map((item) => item.chapter))), []);
  useEffect(() => { api.status().then((state) => setHasAccount(state.hasAccount)).catch(() => setError("Không thể kết nối với không gian riêng tư.")); }, []);
  useEffect(() => { if (!session) return; api.progress(session.token).then(({ sceneId }) => { const index = story.findIndex((item) => item.id === sceneId); if (index >= 0) setSceneIndex(index); }).catch(() => setSession(null)); }, [session]);
  useEffect(() => { if (!session) return; setSaved(false); const timeout = window.setTimeout(() => api.save(session.token, scene.id).then(() => setSaved(true)).catch(() => setSaved(false)), 450); return () => clearTimeout(timeout); }, [scene.id, session]);
  const submit = async (event: FormEvent) => { event.preventDefault(); setError(""); try { const next = hasAccount ? await api.login(password) : await api.bootstrap(password); localStorage.setItem("until-sunrise-session", JSON.stringify(next)); setSession(next); setPassword(""); } catch (reason) { setError(reason instanceof Error ? reason.message : "Không thể mở khóa trải nghiệm."); } };
  const logout = () => { localStorage.removeItem("until-sunrise-session"); setSession(null); };
  if (!session) return <main className="entry" style={{ backgroundImage: `linear-gradient(rgba(18,14,29,.32), rgba(18,14,29,.76)), url(${bedroom})` }}><div className="entry-vignette" /><section className="entry-card"><p className="eyebrow"><Sparkles size={14} /> private memory</p><h1>Until<br />Sunrise</h1><p className="entry-copy">Một nơi để những điều bình thường được nhớ lại thật dịu dàng.</p><form onSubmit={submit}><label htmlFor="password">{hasAccount ? "Mật khẩu riêng tư" : "Tạo mật khẩu cho Ngọc Anh"}</label><input id="password" type="password" minLength={8} autoFocus value={password} onChange={(event) => setPassword(event.target.value)} placeholder={hasAccount ? "Nhập mật khẩu" : "Ít nhất 8 ký tự"} /><button className="primary" disabled={hasAccount === null}>{hasAccount ? "Bước vào" : "Tạo không gian riêng"}<ArrowRight size={17} /></button>{error && <p className="error">{error}</p>}</form><p className="privacy">Chỉ dành cho một người. Tiến độ của bạn luôn được lưu lại.</p></section></main>;
  return <main className="experience" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,9,20,.64), rgba(12,9,20,.12) 65%, rgba(12,9,20,.48)), url(${bedroom})` }}><div className="grain" /><div className="particles" aria-hidden="true">{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ left: `${(i * 23) % 100}%`, animationDelay: `${-i * .55}s` }} />)}</div><header className="topbar"><div className="wordmark"><Heart size={14} fill="currentColor" /> until sunrise</div><div className="top-actions"><span>{saved ? "đã lưu" : "đang lưu..."}</span><button aria-label="Bật hoặc tắt âm thanh" onClick={() => setSound(!sound)}>{sound ? <Volume2 size={18} /> : <VolumeX size={18} />}</button><button aria-label="Đăng xuất" onClick={logout}><LogOut size={18} /></button></div></header><div className="letterbox top" /><div className="letterbox bottom" /><nav className="chapter-nav" aria-label="Chương"><span>{chapters.findIndex((chapter) => chapter === scene.chapter) + 1}</span><div>{chapters.map((chapter) => <button key={chapter} className={chapter === scene.chapter ? "active" : ""} onClick={() => setSceneIndex(story.findIndex((item) => item.chapter === chapter))}>{chapter.replace(/^\d+ · /, "")}</button>)}</div></nav><section className="story-stage"><AnimatePresence mode="wait"><motion.article key={scene.id} initial={{ opacity: 0, y: 28, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(6px)" }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}><p className="scene-label">{scene.chapter}</p><h2>{scene.title}</h2><div className="subtitle-rule" /><p className="subtitle">{scene.subtitle}</p></motion.article></AnimatePresence></section><footer className="controls"><button className="control" disabled={sceneIndex === 0} onClick={() => setSceneIndex((index) => index - 1)}><ArrowLeft size={19} /> Trước</button><div className="progress"><span style={{ width: `${((sceneIndex + 1) / story.length) * 100}%` }} /></div><button className="control" disabled={sceneIndex === story.length - 1} onClick={() => setSceneIndex((index) => index + 1)}>Tiếp <ArrowRight size={19} /></button></footer></main>;
}
