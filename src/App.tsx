import {
  FormEvent,
  lazy,
  startTransition,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  LogOut,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";
import bedroom from "../assets/bedroom-opening.png";
import { api, Session } from "./api";
import { scenes } from "./data/scenes";

const Atmosphere3D = lazy(() =>
  import("./components/Atmosphere3D").then((m) => ({ default: m.Atmosphere3D }))
);

// Legacy scene IDs from before the SCN-XXX naming scheme
const LEGACY_SCENE_MAP: Record<string, string> = {
  opening: "SCN-001",
  "first-language": "SCN-001",
  "second-chance": "SCN-001",
  "ordinary-days": "SCN-002",
  conflict: "SCN-002",
  listening: "SCN-002",
  sunrise: "SCN-002",
};

function useAmbient(enabled: boolean) {
  const context = useRef<AudioContext | null>(null);
  useEffect(() => {
    if (!enabled) {
      context.current?.close();
      context.current = null;
      return;
    }
    const audio = new AudioContext();
    const gain = audio.createGain();
    const oscillator = audio.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 196;
    gain.gain.value = 0.012;
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start();
    context.current = audio;
    return () => {
      oscillator.stop();
      audio.close();
      context.current = null;
    };
  }, [enabled]);
}

// ------------------------------------------------------------------------------
// Entry Screen (login / account creation)
// ------------------------------------------------------------------------------
interface EntryScreenProps {
  hasAccount: boolean | null;
  password: string;
  error: string;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
}

function EntryScreen({
  hasAccount,
  password,
  error,
  onPasswordChange,
  onSubmit,
}: EntryScreenProps) {
  return (
    <main
      className="entry"
      style={{
        backgroundImage: `linear-gradient(rgba(18,14,29,.32), rgba(18,14,29,.76)), url(${bedroom})`,
      }}
    >
      <div className="entry-vignette" />
      <Suspense fallback={null}>
        <Atmosphere3D />
      </Suspense>
      <section className="entry-card">
        <p className="eyebrow">
          <Sparkles size={14} /> ký ức riêng tư
        </p>
        <h1>
          Until
          <br />
          Sunrise
        </h1>
        <p className="entry-copy">
          Một nơi để những điều bình thường được nhớ lại thật dịu dàng.
        </p>
        <form onSubmit={onSubmit}>
          <label htmlFor="password">
            {hasAccount ? "Mật khẩu riêng tư" : "Tạo mật khẩu cho Ngọc Anh"}
          </label>
          <input
            id="password"
            type="password"
            minLength={8}
            autoFocus
            value={password}
            onChange={(event) => onPasswordChange(event.target.value)}
            placeholder={hasAccount ? "Nhập mật khẩu" : "Ít nhất 8 ký tự"}
          />
          <button className="primary" disabled={hasAccount === null}>
            {hasAccount ? "Bước vào" : "Tạo không gian riêng"}
            <ArrowRight size={17} />
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="privacy">
          Chỉ dành cho một người. Tiến độ của bạn luôn được lưu lại.
        </p>
      </section>
    </main>
  );
}

// ------------------------------------------------------------------------------
// Experience Screen (main cinematic player)
// ------------------------------------------------------------------------------
export default function App() {
  const [session, setSession] = useState<Session | null>(() => {
    const raw = localStorage.getItem("until-sunrise-session");
    return raw ? JSON.parse(raw) : null;
  });
  const [hasAccount, setHasAccount] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [beatIndex, setBeatIndex] = useState(0);
  const [traceIndex, setTraceIndex] = useState(0);
  const [sound, setSound] = useState(false);
  const [saved, setSaved] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useAmbient(sound);

  const scene = scenes[sceneIndex];
  const beat = scene.beats[beatIndex];
  const activeTrace = scene.traces[traceIndex];
  const chapters = useMemo(() => scenes.map((item) => item.chapter), []);

  // Load server auth status on mount
  useEffect(() => {
    api
      .status()
      .then((state) => setHasAccount(state.hasAccount))
      .catch(() => setError("Khong the ket noi voi khong gian rieng tu."));
  }, []);

  // Restore scene progress from server
  // Depend only on token string, not the object reference, to avoid spurious refetches.
  const sessionToken = session?.token ?? null;
  useEffect(() => {
    if (!sessionToken) return;
    api
      .progress(sessionToken)
      .then(({ sceneId }) => {
        const resolvedSceneId = LEGACY_SCENE_MAP[sceneId] || sceneId;
        const index = scenes.findIndex((item) => item.id === resolvedSceneId);
        if (index >= 0) setSceneIndex(index);
      })
      .catch(() => setSession(null));
  }, [sessionToken]);

  // Persist scene progress to server (debounced)
  useEffect(() => {
    if (!sessionToken) return;
    setSaved(false);
    const timeout = window.setTimeout(
      () =>
        api
          .save(sessionToken, scene.id)
          .then(() => setSaved(true))
          .catch(() => setSaved(false)),
      450
    );
    return () => clearTimeout(timeout);
  }, [scene.id, sessionToken]);

  // Reset beat and trace when scene changes; clamp traceIndex defensively.
  useEffect(() => {
    setBeatIndex(0);
    setTraceIndex((prev) => (prev < scene.traces.length ? 0 : 0));
  }, [scene.id, scene.traces.length]);

  // Auto-advance beats
  useEffect(() => {
    if (!autoplay || beatIndex >= scene.beats.length - 1) return;
    const timeout = window.setTimeout(
      () =>
        setBeatIndex((current) =>
          Math.min(current + 1, scene.beats.length - 1)
        ),
      beat.durationMs
    );
    return () => clearTimeout(timeout);
  }, [autoplay, beat.durationMs, beatIndex, scene.beats.length]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      const next = hasAccount
        ? await api.login(password)
        : await api.bootstrap(password);
      localStorage.setItem("until-sunrise-session", JSON.stringify(next));
      setSession(next);
      setPassword("");
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Khong the mo khoa trai nghiem."
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("until-sunrise-session");
    setSession(null);
  };

  const jumpScene = (index: number) =>
    startTransition(() => setSceneIndex(index));

  const jumpBeat = (index: number) =>
    setBeatIndex(Math.max(0, Math.min(index, scene.beats.length - 1)));

  const selectTrace = (index: number) => {
    setTraceIndex(index);
    jumpBeat(scene.traces[index].beatIndex);
  };

  // ── Keyboard navigation (experience screen only) ─────────────────────────
  useEffect(() => {
    if (!session) return;
    const handleKey = (event: KeyboardEvent) => {
      // Ignore when focus is inside a form element
      if (["INPUT", "TEXTAREA", "BUTTON"].includes((event.target as HTMLElement)?.tagName)) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (beatIndex < scene.beats.length - 1) {
          jumpBeat(beatIndex + 1);
        } else if (sceneIndex < scenes.length - 1) {
          jumpScene(sceneIndex + 1);
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (beatIndex > 0) {
          jumpBeat(beatIndex - 1);
        } else if (sceneIndex > 0) {
          jumpScene(sceneIndex - 1);
        }
      } else if (event.key === " ") {
        event.preventDefault();
        setAutoplay((v) => !v);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [session, beatIndex, sceneIndex, scene.beats.length]);

  // Entry (not logged in)
  if (!session) {
    return (
      <EntryScreen
        hasAccount={hasAccount}
        password={password}
        error={error}
        onPasswordChange={setPassword}
        onSubmit={submit}
      />
    );
  }

  // Experience
  return (
    <main
      className="experience"
      style={{ backgroundImage: `${scene.overlay}, url(${bedroom})` }}
    >
      <div className="grain" />
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <i
            key={i}
            style={{
              left: `${(i * 23) % 100}%`,
              animationDelay: `${-i * 0.55}s`,
            }}
          />
        ))}
      </div>

      {/* ── Scene Specific Visual Overlays ──────────────────────────────────── */}
      {scene.id === "SCN-002" && (
        <>
          <div className="scene-glow glow-002" aria-hidden="true" />
          <div className="scene-pulse" aria-hidden="true" />
        </>
      )}
      {scene.id === "SCN-003" && (
        <>
          <div className="scene-glow glow-003" aria-hidden="true" />
        </>
      )}
      {scene.id === "SCN-004" && (
        <>
          <div className="scene-glow glow-004" aria-hidden="true" />
        </>
      )}
      {scene.id === "SCN-005" && (
        <>
          <div className="scene-glow glow-005" aria-hidden="true" />
        </>
      )}

      <header className="topbar">
        <div className="wordmark">
          <Heart size={14} fill="currentColor" /> until sunrise
        </div>
        <div className="top-actions">
          <span>{saved ? "Đã lưu" : "Đang lưu..."}</span>
          <button
            aria-label="Bật hoặc tắt âm thanh nền"
            onClick={() => setSound(!sound)}
          >
            {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button
            aria-label="Bật hoặc tắt tự động chuyển subtitle"
            onClick={() => setAutoplay((value) => !value)}
          >
            {autoplay ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button aria-label="Đăng xuất" onClick={logout}>
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <div className="letterbox top" />
      <div className="letterbox bottom" />

      <nav className="chapter-nav" aria-label="Chuong">
        <span>{sceneIndex + 1}</span>
        <div>
          {chapters.map((chapter, index) => (
            <button
              key={chapter}
              className={chapter === scene.chapter ? "active" : ""}
              onClick={() => jumpScene(index)}
            >
              {chapter.replace(/^\d+ · /, "")}
            </button>
          ))}
        </div>
      </nav>

      <section className="story-stage">
        <AnimatePresence mode="wait">
          <motion.article
            key={scene.id}
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="scene-label">{scene.chapter}</p>
            <h2>{scene.title}</h2>
            <p className="scene-summary">{scene.summary}</p>
            <div className="meta-row">
              <span>{scene.environment}</span>
              <span>{scene.ambience}</span>
            </div>
            <div className="subtitle-rule" />
            <div className="trace-grid">
              {scene.traces.map((trace, index) => (
                <button
                  key={trace.id}
                  className={`trace-chip${index === traceIndex ? " active" : ""}`}
                  onClick={() => selectTrace(index)}
                >
                  {trace.label}
                </button>
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
      </section>

      <aside className="trace-panel">
        <p className="trace-kicker">{activeTrace.label}</p>
        <p className="trace-detail">{activeTrace.detail}</p>
        <p className="trace-source">{activeTrace.sources.join(" - ")}</p>
      </aside>

      <section className="subtitle-safe">
        <AnimatePresence mode="wait">
          <motion.div
            key={beat.id}
            className="subtitle-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="subtitle-topline">
              <span>{scene.code}</span>
              <span>{`beat ${beatIndex + 1}/${scene.beats.length}`}</span>
            </div>
            <p className="subtitle">{beat.text}</p>
            <div className="subtitle-meta">
              <span>{beat.sources.join(" - ")}</span>
              <span>{autoplay ? "auto" : "hold"}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <footer className="controls">
        <button
          className="control"
          disabled={beatIndex === 0 && sceneIndex === 0}
          aria-label="Beat hoặc cảnh trước"
          onClick={() => {
            if (beatIndex > 0) {
              jumpBeat(beatIndex - 1);
              return;
            }
            jumpScene(sceneIndex - 1);
          }}
        >
          <ArrowLeft size={19} /> Trước
        </button>
        <div className="progress" role="progressbar" aria-label="Tiến độ trải nghiệm">
          <span
            style={{
              width: `${
                ((scenes.slice(0, sceneIndex).reduce((acc, s) => acc + s.beats.length, 0) + beatIndex + 1) /
                  (scenes.reduce((acc, s) => acc + s.beats.length, 0))) *
                100
              }%`,
            }}
          />
        </div>
        <button
          className="control"
          disabled={
            beatIndex === scene.beats.length - 1 &&
            sceneIndex === scenes.length - 1
          }
          aria-label="Beat hoặc cảnh tiếp theo"
          onClick={() => {
            if (beatIndex < scene.beats.length - 1) {
              jumpBeat(beatIndex + 1);
              return;
            }
            jumpScene(sceneIndex + 1);
          }}
        >
          Tiếp <ArrowRight size={19} />
        </button>
      </footer>
    </main>
  );
}
