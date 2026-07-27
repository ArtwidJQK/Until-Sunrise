# Until Sunrise

Interactive Cinematic Memory Experience — Web prototype and production documentation repository.

> **For AI Agents & Collaborators:** Please start with [`START_HERE.md`](./START_HERE.md) for the mandatory boot sequence and operating rules.

---

## Navigation & Quick Links

- 🚀 **AI Bootloader:** [`START_HERE.md`](./START_HERE.md)
- ⚙️ **AI Operating System:** [`docs/aios/AIOS.md`](./docs/aios/AIOS.md)
- 📊 **Production Status:** [`docs/01_Studio/Production_Status.md`](./docs/01_Studio/Production_Status.md)
- 📚 **Knowledge Layer:** [`docs/02_Knowledge/README.md`](./docs/02_Knowledge/README.md)
- 🎬 **Scene Specifications:** [`docs/03_Scenes/README.md`](./docs/03_Scenes/README.md)
- 🎮 **Vertical Slice:** [`app/index.html`](./app/index.html) (vanilla browser prototype)
- ✨ **Product App:** React/Vite application at repository root (see Run Locally).

---

## Repository Structure

```text
Until-Sunrise/
├── START_HERE.md                       # AI Agent Bootloader (Read first)
├── README.md                           # Repository overview & navigation
├── app/                                # Web prototype implementation
│   ├── index.html                      # Main entry HTML
│   ├── main.js                         # Prototype logic
│   └── styles.css                      # Visual styling
├── assets/                             # Placeholder & production assets
├── content/                            # Narrative & scene data placeholders
├── systems/                            # Reusable runtime systems
└── docs/                               # Production documentation & AIOS
    ├── aios/                           # AI Operating System Specification
    │   ├── AIOS.md                     # Combined master specification
    │   └── ...                         # Modules 01-10 & Appendices
    ├── 00_Foundation/                  # Confirmed project foundation
    ├── 01_Studio/                      # Production status & source intake
    ├── 02_Knowledge/                   # Approved Knowledge Layer bibles
    └── 03_Scenes/                      # Production scene specifications
```

---

## Run Locally

```powershell
npm.cmd run server
npm.cmd run dev
```

Open `http://localhost:5173`. On the first visit, create the private password for Ngọc Anh. The local server stores a password hash and the current story scene in SQLite. Set `JWT_SECRET` before deployment; `.env.example` lists supported variables.

## Current Scope

- Scene 001 vertical slice in [`app/`](./app/).
- Private React/Vite product shell with account bootstrap, login, server-side progress, cinematic chapter flow, animated transitions, particles, letterboxing, subtitles, and opt-in Web Audio ambience.
- Scene 001 Specification (`SCN-001` — The Opening Memory Space) in [`docs/03_Scenes/Scene_001_Specification.md`](./docs/03_Scenes/Scene_001_Specification.md).
- Final character art, recorded audio, deployment, and post-2026 story remain `Pending`.

---

## Source of Truth

All canonical production documentation lives under [`docs/`](./docs/). Underspecified material remains explicitly marked as `Pending`.
