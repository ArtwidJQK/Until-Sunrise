# START HERE — AI Agent Repository Bootloader

Welcome to **Until Sunrise**. This file is the primary entry point and bootloader for all AI agents (Codex, Gemini, Claude, GPT, etc.) collaborating on this repository.

---

## 1. Project Identity & Architecture

- **Project:** Until Sunrise — An Interactive Cinematic Memory Experience.
- **Nature:** Repository-driven production. Chat conversations are temporary; repository artifacts are permanent.
- **AI Operating System (AIOS):** Lives in [`docs/aios/`](./docs/aios/). The master specification is [`docs/aios/AIOS.md`](./docs/aios/AIOS.md).

---

## 2. Mandatory Boot Sequence

Every AI agent joining a session SHALL follow this sequence before taking any production action:

1. Read [`README.md`](./README.md) for repository overview and structure.
2. Read [`docs/aios/AIOS.md`](./docs/aios/AIOS.md) (or specific modules in [`docs/aios/`](./docs/aios/)) for operational rules.
3. Read [`docs/01_Studio/Production_Status.md`](./docs/01_Studio/Production_Status.md) for current production state and pending work.
4. Determine current project state.
5. Identify highest-priority unfinished task.
6. Review dependencies before implementation.
7. Implement ONLY the current task (no scope creep).
8. Update affected documentation.
9. Update production status.
10. Prepare handover.
11. End session cleanly with clear git commits.

---

## 3. Core Rules & Philosophy

- **Repository First:** The repository is the single source of truth. Knowledge existing only in conversation is lost knowledge.
- **Truth Over Assumption:** Never invent story canon, timeline events, dialogue, or character motivations. Document uncertainty instead of hallucinating.
- **Knowledge Over Code:** Creative knowledge and production specifications have higher priority than code implementation.
- **Incremental Production:** Leave the repository cleaner, more understandable, and more complete than when you arrived.

---

## 4. What NEVER To Do

- DO NOT invent story canon or rewrite approved story materials.
- DO NOT modify approved creative documents without authorization.
- DO NOT redesign or bypass the AIOS.
- DO NOT add unnecessary framework complexity or unrequested architecture.
- DO NOT create fake placeholder features.
- DO NOT remove or overwrite repository history.

---

## 5. Context Limit Protocol

If your context window approaches exhaustion during a session:

1. Stop implementation immediately.
2. Save and document all progress in the repository.
3. Update production status and create/update handover notes.
4. Commit completed work with clear commit messages.
5. Terminate session gracefully so the next agent can resume in < 5 minutes.

---

## 6. Key File Index

| Category | File | Description |
|---|---|---|
| **Bootloader** | [`START_HERE.md`](./START_HERE.md) | Agent boot sequence & rules (this file) |
| **Overview** | [`README.md`](./README.md) | Repository summary & navigation |
| **AIOS Master** | [`docs/aios/AIOS.md`](./docs/aios/AIOS.md) | Master AI Operating System specification |
| **Status** | [`docs/01_Studio/Production_Status.md`](./docs/01_Studio/Production_Status.md) | Current state & task roadmap |
| **Foundation** | [`docs/00_Foundation/README.md`](./docs/00_Foundation/README.md) | Confirmed project foundation |
| **Prototype** | [`app/index.html`](./app/index.html) | Web prototype entry point |
