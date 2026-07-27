# Changelog

This log is append-only. New production entries must be added above older entries.

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
