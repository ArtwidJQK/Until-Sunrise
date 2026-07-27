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
          <Sparkles size={14} /> ky uc rieng tu
        </p>
        <h1>
          Until
          <br />
          Sunrise
        </h1>
        <p className="entry-copy">
          Mot noi de nhung dieu binh thuong duoc nho lai that diu dang.
        </p>
        <form onSubmit={onSubmit}>
          <label htmlFor="password">
            {hasAccount ? "Mat khau rieng tu" : "Tao mat khau cho Ngoc Anh"}
          </label>
          <input
            id="password"
            type="password"
            minLength={8}
            autoFocus
            value={password}
            onChange={(event) => onPasswordChange(event.target.value)}
            placeholder={hasAccount ? "Nhap mat khau" : "It nhat 8 ky tu"}
          />
          <button className="primary" disabled={hasAccount === null}>
            {hasAccount ? "Buoc vao" : "Tao khong gian rieng"}
            <ArrowRight size={17} />
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="privacy">
          Chi danh cho mot nguoi. Tien do cua ban luon duoc luu lai.
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
  useEffect(() => {
    if (!session) return;
    api
      .progress(session.token)
      .then(({ sceneId }) => {
        const resolvedSceneId = LEGACY_SCENE_MAP[sceneId] || sceneId;
        const index = scenes.findIndex((item) => item.id === resolvedSceneId);
        if (index >= 0) setSceneIndex(index);
      })
      .catch(() => setSession(null));
  }, [session]);

  // Persist scene progress to server (debounced)
  useEffect(() => {
    if (!session) return;
    setSaved(false);
    const timeout = window.setTimeout(
      () =>
        api
          .save(session.token, scene.id)
          .then(() => setSaved(true))
          .catch(() => setSaved(false)),
      450
    );
    return () => clearTimeout(timeout);
  }, [scene.id, session]);

  // Reset beat and trace when scene changes
  useEffect(() => {
    setBeatIndex(0);
    setTraceIndex(0);
  }, [scene.id]);

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

      <header className="topbar">
        <div className="wordmark">
          <Heart size={14} fill="currentColor" /> until sunrise
        </div>
        <div className="top-actions">
          <span>{saved ? "Da luu" : "Dang luu..."}</span>
          <button
            aria-label="Bat hoac tat am thanh"
            onClick={() => setSound(!sound)}
          >
            {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button
            aria-label="Bat hoac tat tu dong chay subtitle"
            onClick={() => setAutoplay((value) => !value)}
          >
            {autoplay ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button aria-label="Dang xuat" onClick={logout}>
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
          onClick={() => {
            if (beatIndex > 0) {
              jumpBeat(beatIndex - 1);
              return;
            }
            jumpScene(sceneIndex - 1);
          }}
        >
          <ArrowLeft size={19} /> Truoc
        </button>
        <div className="progress">
          <span
            style={{
              width: `${
                (((sceneIndex * 4) + beatIndex + 1) /
                  ((scenes.length * 4) - 1)) *
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
          onClick={() => {
            if (beatIndex < scene.beats.length - 1) {
              jumpBeat(beatIndex + 1);
              return;
            }
            jumpScene(sceneIndex + 1);
          }}
        >
          Tiep <ArrowRight size={19} />
        </button>
      </footer>
    </main>
  );
}
