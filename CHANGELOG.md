# Changelog

This log is append-only. New production entries must be added above older entries.

## [0.6.0] - 2026-07-27

### Added

- React/TypeScript/Vite product application with cinematic chapter player.
- Private single-account bootstrap and login backed by Express, bcrypt, JWT, and SQLite progress storage.
- Generated original bedroom key visual at `assets/bedroom-opening.png`.
- Product runtime architecture and local-development documentation.

### Verified

- Production Vite build passes.
- Progress server health endpoint passes.
- Vite dev server returns HTTP 200.

## [0.5.0] - 2026-07-27

### Added

- Complete Vertical Slice systems in `app/`:
  - `app/systems/storage-manager.js`: LocalStorage state persistence for player name, unlocked memories, volume preferences, and scene progress.
  - `app/data/memory-database.js`: Full catalog of MEM-001 through MEM-008 memory nodes.
  - `app/components/memory-journal.js`: Interactive Memory Journal drawer/modal for reviewing unlocked memory fragments with status tracking (`📖 Nhật ký [X/8]`).
  - Typewriter animation engine in `app/components/subtitle-panel.js` with skip-to-end on click.
- Automatic session resuming and state restoration on launch.

### Changed

- Updated `PROJECT_STATE.json` version to 0.5.0, completion to 90%, health to 98%.
- Updated `Production_Status.md` and `HANDOVER.md`.

## [0.4.0] - 2026-07-27

### Added

- Playable browser prototype implementation of Scene 001 (`SCN-001` — The Opening Memory Space) in `app/`.
- Modular ES JavaScript architecture:
  - `app/data/scene-001-data.js`: Anchor configs & memory prompts.
  - `app/systems/scene-state.js`: State machine (`ENTRY` → `OBSERVING` → `FOCUSING` → `MEMORY_REVEAL` → `COMPLETE`).
  - `app/systems/audio-manager.js`: Dependency-free Web Audio API synthesizer (room tone, rain ambience, hover sound, select tap, chord swell).
  - `app/systems/interaction-manager.js`: Keyboard & mouse anchor event dispatcher.
  - `app/components/viewport.js`: Room viewport, camera zoom & lamp light toggle.
  - `app/components/subtitle-panel.js`: Subtitle & glassmorphism memory overlay panel.
  - `app/main.js`: Main bootstrap connecting login flow to Scene 001 execution.

### Changed

- Updated `PROJECT_PLAN.md` TASK-0005 to `Complete`.
- Updated `PROJECT_STATE.json` version to 0.4.0, completion to 80%, health to 98%.
- Updated `Production_Status.md` and `HANDOVER.md`.

## [0.3.0] - 2026-07-27

### Added

- Production-ready Scene 001 Specification (`SCN-001` — The Opening Memory Space) in `docs/03_Scenes/Scene_001_Specification.md`.
- Scenes Layer index in `docs/03_Scenes/README.md`.
- Declarations for finite state machine (`STATE_ENTRY` → `STATE_OBSERVING` → `STATE_FOCUSING` → `STATE_MEMORY_REVEAL` → `STATE_COMPLETE`), environmental anchors, asset manifests, and vanilla JS/CSS implementation architecture.

### Changed

- Updated `PROJECT_PLAN.md`: `TASK-0003` complete, `TASK-0004` complete, `TASK-0005` in progress.
- Updated `PROJECT_STATE.json` version to 0.3.0, completion to 60%, health to 95%.
- Updated `Production_Status.md`, `REPOSITORY_HEALTH.md`, `CONTEXT_SUMMARY.md`, and `HANDOVER.md`.

## [0.2.0] - 2026-07-27

### Added

- Recorded Founder Decision Package (FD-0001 to FD-0005) in `DECISION_LOG.md` (DEC-0003).
- Resolved OQ-0001 (Source Authority) and OQ-0004 (2026 Narrative Endpoint).
- Constructed complete Knowledge Document layer in `docs/02_Knowledge/`: `Canonical_Source_Registry.md`, `Canon_Rules.md`, `Timeline.md`, `Relationship_Bible.md`, `Story_Bible.md`, `Character_Bible.md`, `World_Bible.md`, `Experience_Bible.md`, `Emotion_Bible.md`, `Memory_Bank.md`, `Theme_Bible.md`, `Dialogue_Bible.md`.

### Changed

- Updated `PROJECT_STATE.json` completion to 45%, health to 92%, and blocked status to `false`.
- Updated `PROJECT_PLAN.md` TASK-0003 status to `In Progress` / unblocked.
- Updated `Production_Status.md`, `REPOSITORY_HEALTH.md`, `POLICY_COMPLIANCE.md`, and `CONTEXT_SUMMARY.md`.

### Fixed

- Resolved the blocking canon dependency, allowing production to proceed downstream to scene specification.

## [0.1.1] - 2026-07-27

### Added

- Source intake and canon-authority map for the two founder-provided documents.
- Founder decisions OQ-0001 and OQ-0004 for source authority and the 2026 narrative scope.

### Changed

- Project state now records a founder-level creative-canon blocker rather than allowing speculative knowledge-document work.

### Known Issues

- Story, Character, Timeline, World, Experience, scene, and narrative implementation remain blocked pending recorded founder decisions.

## [0.1.0] - 2026-07-27

### Added

- Mandatory AIOS operational state and recovery artifacts.
- Project plan, handover, context summary, open-question register, health report, and decision traceability.
- Debt, assumption, lesson, anti-pattern, and policy-compliance registers.
- Production-status links to the operational artifacts.

### Changed

- Production tracking now identifies repository continuity as the completed priority and source intake as the next task.

### Fixed

- Removed the AIOS continuity violation caused by missing mandatory repository state files.

### Known Issues

- Canon-dependent production remains blocked until external source material is mapped and approved.
- The opening prototype has no browser-level or automated regression verification.
