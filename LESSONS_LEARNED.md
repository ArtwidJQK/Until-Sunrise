# Lessons Learned

## LES-0001: Create AIOS continuity artifacts before production expansion

| Field | Value |
| --- | --- |
| Context | Repository bootstrap review on 2026-07-27. |
| Problem | The repository included a mandatory operating system but lacked its required state, recovery, and traceability files. |
| Decision | Prioritize TASK-0001 over creative or code expansion. |
| Result | The next agent can now recover project state, risks, open questions, and the recommended task from repository artifacts. |
| Lesson | A documented operating system is ineffective until its required artifacts exist and are synchronized. |
| Recommendation | Run the required-file audit at every new project bootstrap and before major implementation work. |
| Related files | `docs/aios/02_Repository_OS.md`, root operational artifacts. |
| Related decisions | DEC-0001 |
| Timestamp | 2026-07-27T00:00:00+07:00 |

## LES-0002: Separate source evidence from approved canon at intake

| Field | Value |
| --- | --- |
| Context | Founder-provided Word documents were reviewed during TASK-0002. |
| Problem | A single source file contained reference direction, experience proposals, personal-history claims, and implementation suggestions. |
| Decision | Create a non-canonical source intake and map each category to a future authoritative owner. |
| Result | The repository retains useful evidence without treating unapproved material as production fact. |
| Lesson | Mixed source material needs an explicit authority boundary before it can safely drive story, experience, or implementation work. |
| Recommendation | Inventory every external creative source before using it in a canon-owning document. |
| Related files | `docs/01_Studio/Source_Intake_2026-07-27.md`, `OPEN_QUESTIONS.md` |
| Related decisions | DEC-0002 |
| Timestamp | 2026-07-27T00:00:00+07:00 |
