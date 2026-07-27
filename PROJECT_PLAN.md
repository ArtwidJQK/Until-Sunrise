# Until Sunrise Project Plan

Status: Active
Owner: Founder
Last updated: 2026-07-27

## Current Sprint: Playable Vertical Slice & Scene Implementation

### TASK-0001: Initialize mandatory AIOS state artifacts

| Field | Value |
| --- | --- |
| Status | Complete |
| Priority | P1 - Critical blocker |
| Owner | Codex |
| Description | Create the mandatory state, recovery, traceability, health, and history artifacts required by AIOS. |
| Dependencies | `START_HERE.md`, `docs/aios/AIOS.md`, `docs/aios/02_Repository_OS.md` |
| Expected output | A valid recovery checkpoint that lets another agent resume without conversation history. |
| Verification | File-presence check, JSON validation, internal-link review, and documentation synchronization. |
| Completion | 100% |
| Verification status | Passed: mandatory files present, `PROJECT_STATE.json` parses, prototype syntax check passes. |
| Blocking risks | None |

### TASK-0002: Source intake and canon-authority map

| Field | Value |
| --- | --- |
| Status | Complete |
| Priority | P2 - Repository inconsistency prevention |
| Owner | Codex |
| Description | Register the two founder-provided Word documents as source evidence, extract their claims into a non-canonical intake, and identify required founder approvals. |
| Dependencies | `OPEN_QUESTIONS.md`, `ASSUMPTION_REGISTER.md`, the two founder-provided documents, AIOS governance rules |
| Expected output | Source inventory, authority map, conflict/risk register, and a proposed documentation sequence. |
| Verification | Every source claim is labelled as source evidence, draft, approved, or unresolved. |
| Completion | 100% |
| Verification status | Passed: source inventory, authority map, approval boundary, and required decisions recorded in `docs/01_Studio/Source_Intake_2026-07-27.md`. |
| Blocking risks | None (Founder decisions FD-0001 to FD-0005 received). |

### TASK-0003: Construct complete Knowledge Document layer

| Field | Value |
| --- | --- |
| Status | Complete |
| Priority | P3 - Canonical Knowledge Layer |
| Owner | Antigravity |
| Description | Build the complete Knowledge Document layer in `docs/02_Knowledge/` strictly derived from canonical sources `SRC-001` and `SRC-002` under Founder Decision Package FD-0001 through FD-0005. |
| Dependencies | FD-0001 through FD-0005, `SRC-001`, `SRC-002` |
| Expected output | Complete, verified, cross-referenced Knowledge Documents in `docs/02_Knowledge/`. |
| Verification | 100% source-derived, zero invented canon, strict compliance with FD-0001 through FD-0005. |
| Completion | 100% |
| Verification status | Passed: 12 Knowledge Documents created/updated and fully cross-referenced. |
| Blocking risks | None |

### TASK-0004: Define first playable scene specification (Scene 001)

| Field | Value |
| --- | --- |
| Status | Complete |
| Priority | P4 - Architecture and experience |
| Owner | Antigravity |
| Description | Specify the first playable scene (Scene 001 — The Opening Memory Space) with narrative purpose, interaction flow, state machine, required assets, audio, UI, and verification plan. |
| Dependencies | TASK-0003, `docs/02_Knowledge/` |
| Expected output | Production-ready scene specification in `docs/03_Scenes/Scene_001_Specification.md`. |
| Verification | State machine, environmental anchors, asset lists, code file structure, and zero invented canon verified. |
| Completion | 100% |
| Verification status | Passed: `docs/03_Scenes/Scene_001_Specification.md` and `docs/03_Scenes/README.md` created. |
| Blocking risks | None |

### TASK-0005: Extend browser prototype with Scene 001 modules

| Field | Value |
| --- | --- |
| Status | In Progress |
| Priority | P5 - Implementation |
| Owner | Antigravity |
| Description | Implement Scene 001 specification in `app/` using vanilla JS modules, CSS gradients, Web Audio, and keyboard/mouse interaction handling. |
| Dependencies | TASK-0004, `docs/03_Scenes/Scene_001_Specification.md` |
| Expected output | Verified browser scene implementation running natively without build steps. |
| Verification | Syntax check, state transition validation, accessibility navigation, and unhurried experience verification. |
| Completion | 20% |
| Verification status | In progress; specification complete, module layout declared. |
| Blocking risks | None |
