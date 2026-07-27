# Debt Register

## DOC-0001

| Field | Value |
| --- | --- |
| Category | Documentation debt |
| Description | Required knowledge documents, technical architecture, QA strategy, and asset pipeline documentation do not exist. |
| Origin | Repository bootstrap state. |
| Affected files | `docs/`, `PROJECT_PLAN.md` |
| Risk | High likelihood / High impact |
| Severity | High |
| Estimated effort | Multi-sprint |
| Owner | Unassigned |
| Status | Open |
| Resolution plan | Complete source intake, establish authority, then create approved documents in dependency order. |

## KNO-0001

| Field | Value |
| --- | --- |
| Category | Knowledge debt |
| Description | Detailed source claims in the two founder-provided Word documents are inventoried but not approved as repository canon. |
| Origin | External source material supplied on 2026-07-27. |
| Affected files | Future Story, Character, Timeline, World, and Experience documents. |
| Risk | High likelihood / Critical impact |
| Severity | Critical |
| Estimated effort | One focused documentation task plus founder review. |
| Owner | Unassigned |
| Status | Open |
| Resolution plan | Resolve OQ-0001 and OQ-0004, capture founder decisions in the repository, then create the approved knowledge documents. |

## EXP-0001

| Field | Value |
| --- | --- |
| Category | Experience debt |
| Description | The browser prototype ends in an explicit placeholder rather than a specified memory experience. |
| Origin | Intentional early prototype scope. |
| Affected files | `app/index.html`, `app/main.js`, `app/styles.css` |
| Risk | Medium likelihood / Medium impact |
| Severity | Medium |
| Estimated effort | Depends on approved scene specification. |
| Owner | Unassigned |
| Status | Open |
| Resolution plan | Preserve as an intentional placeholder until TASK-0004 approves a scene. |

## TST-0001

| Field | Value |
| --- | --- |
| Category | Testing debt |
| Description | The prototype has no browser-level acceptance checks, accessibility review, or regression tests. |
| Origin | Initial no-build prototype. |
| Affected files | `app/` |
| Risk | Medium likelihood / Medium impact |
| Severity | Medium |
| Estimated effort | Small after acceptance criteria exist. |
| Owner | Unassigned |
| Status | Open |
| Resolution plan | Add a lightweight manual acceptance checklist before expanding implementation; automate only after stack selection. |

## AST-0001

| Field | Value |
| --- | --- |
| Category | Asset and legal debt |
| Description | Final ownership, licensing, and usage rights for character references, art, music, and sound are undefined. |
| Origin | Prototype uses CSS placeholders while source materials reference named plush characters. |
| Affected files | `assets/`, future production assets, public deployment. |
| Risk | Medium likelihood / High impact |
| Severity | High |
| Estimated effort | Founder decision and asset policy. |
| Owner | Founder |
| Status | Open |
| Resolution plan | Resolve OQ-0003 before final asset production or public release. |
