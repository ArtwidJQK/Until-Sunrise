# Until Sunrise Project Plan

Status: Active
Owner: Founder
Last updated: 2026-07-27

## Current Sprint: Repository Continuity Bootstrap

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
| Verification status | Passed: mandatory files present, `PROJECT_STATE.json` parses, prototype syntax check passes, and diff whitespace check passes. |
| Blocking risks | None |

### TASK-0002: Source intake and canon-authority map

| Field | Value |
| --- | --- |
| Status | Complete |
| Priority | P2 - Repository inconsistency prevention |
| Owner | Unassigned |
| Description | Register the two founder-provided Word documents as source evidence, extract their claims into a non-canonical intake, and identify which claims require approval before they can enter a Story, Character, Timeline, or Experience Bible. |
| Dependencies | `OPEN_QUESTIONS.md`, `ASSUMPTION_REGISTER.md`, the two founder-provided documents, AIOS governance rules |
| Expected output | Source inventory, authority map, conflict/risk register, and a proposed documentation sequence. |
| Verification | Every source claim is labelled as source evidence, draft, approved, or unresolved; no claim is silently promoted to canon. |
| Completion | 100% |
| Verification status | Passed: source inventory, authority map, approval boundary, and required decisions recorded in `docs/01_Studio/Source_Intake_2026-07-27.md`. |
| Blocking risks | Founder must designate which source material is approved canon before downstream creative implementation. |

### TASK-0003: Establish knowledge-document production sequence

| Field | Value |
| --- | --- |
| Status | Blocked |
| Priority | P3 - Missing canonical documentation |
| Owner | Unassigned |
| Description | Create only the approved knowledge documents and their dependency order: Story, Character, Timeline, World, and Experience. |
| Dependencies | TASK-0002 and founder approval for canon scope |
| Expected output | Approved documentation plan and authoring templates or documents as authorized. |
| Verification | Authority, ownership, and cross-document dependencies are recorded. |
| Completion | 0% |
| Verification status | Blocked by OQ-0001 and OQ-0004. |
| Blocking risks | Canon authority and 2026 relationship-timeline scope are not yet repository-recorded. |

### TASK-0004: Define first playable scene

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
| Blocking risks | Missing approved canon and asset decisions. |

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
