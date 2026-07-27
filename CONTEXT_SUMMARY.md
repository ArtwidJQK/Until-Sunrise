# Context Summary

Status: Active recovery document
Last updated: 2026-07-27

## What Exists

Until Sunrise is a repository-driven interactive cinematic memory experience. Its governing specification is AIOS v1.0 in `docs/aios/`. `START_HERE.md` is the repository bootloader and requires agents to read the repository overview, AIOS, and production status before work. The AIOS makes repository knowledge authoritative over conversation and code. It prohibits invented canon, undocumented implementation, hidden uncertainty, and silent architectural decisions.

The implementation is intentionally small. `app/index.html`, `app/styles.css`, and `app/main.js` form a no-build browser prototype. It presents a calm opening screen with a player-name field and moves to an explicitly non-narrative placeholder screen. The prototype uses CSS placeholder companion designs; it has no scene system, narrative data, audio, save state, inventory, combat, dialogue system, puzzle system, or final assets. It should not be represented as a playable story scene.

The documentation currently includes an AIOS, a short foundation summary, and production status. This session created the mandatory operating artifacts at repository root: `PROJECT_STATE.json`, `PROJECT_PLAN.md`, `HANDOVER.md`, `CONTEXT_SUMMARY.md`, `DECISION_LOG.md`, `OPEN_QUESTIONS.md`, `REPOSITORY_HEALTH.md`, and `CHANGELOG.md`. Supporting operational registers are `DEBT_REGISTER.md`, `ASSUMPTION_REGISTER.md`, `LESSONS_LEARNED.md`, `ANTI_PATTERNS.md`, and `POLICY_COMPLIANCE.md`.

## What Changed

The repository previously had AIOS documentation that required mandatory state and recovery files, but those files did not exist. The absence meant another agent could not reliably recover the current phase, task, blockers, decisions, known gaps, or health without chat history. TASK-0001 establishes that operational baseline. No creative document, runtime architecture, or source story claim was modified.

Two founder-provided Word documents were reviewed outside the repository. They contain project framing, visual and interaction direction, relationship and character material, and a second document with detailed relationship dynamics. They are now inventoried in `docs/01_Studio/Source_Intake_2026-07-27.md`. The intake explicitly classifies them as source evidence, not approved repository canon. Their details must not be copied into an approved Bible, implemented as scenes, or used to rewrite current repository documents until the founder records approval and scope.

## What Is Unfinished

The largest gap is the knowledge layer. There is no approved Story Bible, Character Bible, Timeline, World Bible, Experience Bible, Emotion Bible, Dialogue Bible, or scene specification. These are dependencies for narrative implementation. There is also no documented asset strategy, licensing decision, audio plan, delivery target, test strategy, technical architecture, or deployment plan.

The first opening prototype is deliberately incomplete. It is only a visual and interaction baseline. Its named plush references are placeholders and should not become final assets without a rights and licensing decision. The current code has been syntax checked but needs manual browser validation and later regression coverage.

## What Is Dangerous

The Word documents contain emotionally sensitive material about real people and a relationship. AIOS classifies story, character, timeline, experience, and creative-direction changes as founder-approval work. Treat the documents as evidence, not permission to create or alter canon. Preserve neutral, non-judgmental language and avoid adding motives, scenes, dialogue, dates, or outcomes not explicitly authorized in repository artifacts.

The repository has low knowledge and creative coverage. Coding beyond the opening placeholder would create unsupported narrative and experience commitments. It is also possible that named character and product references in early prototype material raise legal or licensing concerns for a public release. Keep final assets as pending and avoid sourcing or embedding third-party character art without written authorization.

## What Should Happen Next

TASK-0002 is complete. The current work is blocked by OQ-0001 and OQ-0004: the founder must identify which source claims are approved canon and confirm the intended 2026 relationship timeline/end-point. Once those decisions are recorded, create knowledge documents in dependency order. The expected order is relationship/timeline evidence first, then Story and Character documents, then World and Experience documents, then a first scene specification. Only after that specification is accepted should the browser prototype expand beyond its opening placeholder.

## Recovery Instructions

Start at `START_HERE.md`. Follow the mandatory AIOS sequence: `README.md`, `PROJECT_STATE.json`, `PROJECT_PLAN.md`, `HANDOVER.md`, `CONTEXT_SUMMARY.md`, `OPEN_QUESTIONS.md`, and `DECISION_LOG.md`. Read `docs/01_Studio/Source_Intake_2026-07-27.md`, confirm repository health and the debt register, then obtain and record founder decisions for OQ-0001 and OQ-0004. Do not use conversation context as authority and do not treat the Word documents as already-approved canon.
