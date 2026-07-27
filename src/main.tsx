import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./atmosphere.css";

const Atmosphere3D = lazy(() => import("./components/Atmosphere3D").then((module) => ({ default: module.Atmosphere3D })));

createRoot(document.getElementById("root")!).render(<StrictMode><Suspense fallback={null}><Atmosphere3D /></Suspense><App /></StrictMode>);
