import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./atmosphere.css";

// Atmosphere3D is rendered inside EntryScreen (App.tsx) via lazy + Suspense.
// Do NOT mount it here — that would create a second WebGL context on the entry screen,
// and leave an orphaned canvas attached during the experience screen.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
