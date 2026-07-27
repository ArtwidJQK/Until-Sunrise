# ======================================================================
# Until Sunrise Studio
# AI Operating System Specification (AIOS)
# Appendices
# Version 1.0
# Status: Mandatory
# Authority: Founder
# ======================================================================

# APPENDIX A: GLOSSARY OF TERMS

- **AIOS**: AI Operating System governing all autonomous AI collaborators.
- **Repository Entropy**: Missing documentation, duplicated knowledge, contradictory rules, unknown dependencies, or unfinished specifications.
- **Single Source of Truth**: The principle that only repository artifacts (not chat context) serve as permanent studio knowledge.
- **Checkpoint**: A synchronized repository snapshot containing `PROJECT_STATE.json`, `HANDOVER.md`, `PROJECT_PLAN.md`, `CHANGELOG.md`, `REPOSITORY_HEALTH.md`, and `CONTEXT_SUMMARY.md`.
- **Handover**: The formal transfer of state and instruction between execution sessions or AI agents.

---

# APPENDIX B: MANDATORY REPOSITORY FILE SCHEMAS

The following nine files constitute the core operating state of the repository:

1. `README.md`: Entry point, high-level overview, and quick-start instructions.
2. `PROJECT_PLAN.md`: Master production schedule and task roadmap.
3. `PROJECT_STATE.json`: Machine-readable repository state for AI agent consumption.
4. `HANDOVER.md`: Concise transfer document for state continuity between sessions.
5. `CONTEXT_SUMMARY.md`: LLM-optimized summary of repository status (1,000–3,000 words).
6. `DECISION_LOG.md`: Immutable record of all approved architectural and creative decisions.
7. `OPEN_QUESTIONS.md`: Formally tracked uncertainty and blocking questions.
8. `REPOSITORY_HEALTH.md`: Multi-dimensional metrics assessing knowledge and code quality.
9. `CHANGELOG.md`: Historical log of additions, changes, fixes, and deprecations per sprint.

---

# APPENDIX C: DECISION AUTHORITY MATRIX

| Decision Class | Authority Level | Execution Mode | Examples |
|---|---|---|---|
| **Class A: Autonomous** | Execution Agent | Immediate execution | Formatting, refactoring, fixing links, documentation polish |
| **Class B: Review Required** | Review / Architect | Implementation allowed; merge requires review | Architecture refactoring, folder restructuring, workflow changes |
| **Class C: Founder Approval** | Founder | Prohibited until approved | Story/character/timeline rewrite, canon changes, core gameplay changes |
| **Class D: Forbidden** | None | Strictly prohibited | Deleting repository history, inventing story canon, hiding uncertainty |

---

# APPENDIX D: DOCUMENT STATUS VOCABULARY

Every document in the repository shall declare exactly one of the following statuses:

- `Draft`: Incomplete or exploratory work; assumptions may exist.
- `Review`: Work complete enough for review gate evaluation.
- `Approved`: Accepted by designated authority; ready to guide production.
- `Locked`: Authoritative canon or governance rule; changes require explicit approval.
- `Deprecated`: Obsolete or replaced document; retained for historical reference only.
- `Mandatory`: Operational policy or system specification that must be enforced.

---

# APPENDIX E: FILE & DIRECTORY NAMING CONVENTIONS

- **Directories**: Use lowercase or numbered descriptive names (`docs/aios/`, `docs/00_Foundation/`, `docs/01_Studio/`).
- **Files**: Use clear, descriptive, functional names with standard casing and underscores (`01_Constitution.md`, `02_Repository_OS.md`). Avoid ambiguous abbreviations like `p1.md`, `p2.md`.
