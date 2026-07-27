# Until Sunrise Project Plan

Status: Active
Owner: Founder
Last updated: 2026-07-27

## Current Sprint: Knowledge Document Layer Construction

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
| Status | In Progress |
| Priority | P3 - Canonical Knowledge Layer |
| Owner | AI Agent (Autonomous) |
| Description | Build the complete Knowledge Document layer in `docs/02_Knowledge/` strictly derived from canonical sources `SRC-001` and `SRC-002` under Founder Decision Package FD-0001 through FD-0005: Canonical Source Registry, Canon Rules, Timeline, Relationship Bible, Story Bible, Character Bible, World Bible, Experience Bible, Emotion Bible, Memory Bank, Theme Bible, Dialogue Bible. |
| Dependencies | FD-0001 through FD-0005, `SRC-001`, `SRC-002` |
| Expected output | Complete, verified, cross-referenced Knowledge Documents in `docs/02_Knowledge/`. |
| Verification | 100% source-derived, zero invented canon, strict compliance with FD-0001 through FD-0005. |
| Completion | 80% |
| Verification status | In progress; core knowledge bibles generated and verified against source evidence. |
| Blocking risks | None |

### TASK-0004: Define first playable scene specification

| Field | Value |
| --- | --- |
| Status | Pending |
| Priority | P4 - Architecture and experience |
| Owner | Unassigned |
| Description | Specify the first playable scene only after its memory, timeline, character, and experience dependencies are approved. |
| Dependencies | TASK-0003, asset strategy, interaction specification |
| Expected output | Scene specification with acceptance criteria and asset requirements. |
| Verification | Scene references approved source documents and has no unsupported narrative claims. |
| Completion | 0% |
| Verification status | Not started |
| Blocking risks | Downstream of Knowledge Document layer completion. |

### TASK-0005: Extend the browser prototype

| Field | Value |
| --- | --- |
| Status | Pending |
| Priority | P5 - Implementation |
| Owner | Unassigned |
| Description | Implement only the approved first-scene specification while preserving the current static browser baseline where viable. |
| Dependencies | TASK-0004, technical architecture decision, final asset and audio availability |
| Expected output | Verified scene implementation and documentation updates. |
| Verification | Functional, accessibility, visual, and experience checks defined by TASK-0004. |
| Completion | 0% |
| Verification status | Not started |
| Blocking risks | Scene specification does not yet exist. |
