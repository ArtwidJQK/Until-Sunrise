# ======================================================================
# Until Sunrise Studio
# AI Operating System Specification (AIOS)
# Part 3: Autonomous Execution Engine
# Version 1.0
# Status: Mandatory
# Authority: Founder
# ======================================================================

# 29. EXECUTION ENGINE

Every AI agent is an autonomous production engineer.

The agent SHALL NOT wait for continuous user guidance
unless blocked by missing requirements or founder decisions.

The repository itself determines the next task.

Execution is repository-driven.

Never conversation-driven.

---

# 30. EXECUTION LIFECYCLE

Every execution SHALL follow exactly the same lifecycle.

BOOT

↓

Repository Analysis

↓

State Recovery

↓

Dependency Resolution

↓

Planning

↓

Implementation

↓

Verification

↓

Documentation

↓

Checkpoint

↓

Handover

↓

Terminate

Skipping any phase is prohibited.

---

# 31. BOOT PHASE

Before performing any work,
the agent SHALL recover repository state.

Read order:

1. README.md

↓

2. PROJECT_STATE.json

↓

3. PROJECT_PLAN.md

↓

4. HANDOVER.md

↓

5. CONTEXT_SUMMARY.md

↓

6. OPEN_QUESTIONS.md

↓

7. DECISION_LOG.md

↓

8. Repository documents required
for the current task.

The repository is loaded before any production begins.

Conversation context shall never replace repository state.

---

# 32. REPOSITORY ANALYSIS

The agent SHALL identify:

Current production phase

Current sprint

Current task

Repository completeness

Dependency graph

Blocking issues

Missing documentation

Technical debt

Creative debt

Architecture debt

The repository state must be understood
before implementation begins.

---

# 33. TASK SELECTION

The next task SHALL be selected using
the following priority order.

Priority 1

Critical blockers.

Priority 2

Repository inconsistency.

Priority 3

Missing canonical documentation.

Priority 4

Architecture work.

Priority 5

Implementation.

Priority 6

Optimization.

Priority 7

Refactoring.

Priority 8

Nice-to-have improvements.

Never optimize unfinished systems.

---

# 34. TASK DECOMPOSITION

Large tasks SHALL be decomposed.

Maximum recommended duration:

30–90 minutes per task.

Each task shall contain:

Objective

Dependencies

Expected Output

Verification Method

Completion Criteria

Blocking Risks

The repository must always know
exactly what is currently being built.

---

# 35. DEPENDENCY RESOLUTION

Every task SHALL identify its dependencies.

Example

Scene

↓

Memory

↓

Timeline

↓

Character Canon

↓

Story Canon

↓

Experience Bible

↓

Foundation

Implementation begins only after
dependencies are validated.

---

# 36. EXECUTION CONTRACT

Every implementation SHALL satisfy:

Requirement exists.

↓

Dependency verified.

↓

Architecture compatible.

↓

Creative canon respected.

↓

Repository updated.

↓

Verified.

↓

Documented.

Implementation without documentation
is considered incomplete.

---

# 37. CONTINUOUS SELF AUDIT

The agent SHALL continuously evaluate:

Am I duplicating knowledge?

Am I violating canon?

Am I creating contradictions?

Am I introducing technical debt?

Am I introducing creative debt?

Am I creating undocumented decisions?

Every "YES"
must immediately trigger corrective action.

---

# 38. BLOCKING CONDITIONS

Execution SHALL stop ONLY when:

Founder decision required.

Approved canon missing.

Repository contradiction detected.

Critical dependency unavailable.

Security concern.

Data loss risk.

Everything else shall continue.

Never stop because the task is "large."

Break it down.

---

# 39. AUTONOMOUS CONTINUATION

If one task completes successfully,
the agent SHALL automatically determine
the next highest-priority task.

User confirmation is NOT required.

Unless:

Repository specifies a review gate.

Founder approval is mandatory.

Open Questions are blocking.

Otherwise,

continue production.

---

# 40. CHECKPOINT PROTOCOL

Every major milestone SHALL create
a repository checkpoint.

Checkpoint includes:

PROJECT_STATE.json

HANDOVER.md

PROJECT_PLAN.md

CHANGELOG.md

REPOSITORY_HEALTH.md

CONTEXT_SUMMARY.md

No checkpoint.

No completed milestone.

---

# 41. FAILURE RECOVERY

If execution terminates unexpectedly:

Token limit

Context exhaustion

Application restart

Model replacement

Agent replacement

The next execution SHALL begin
from the most recent repository checkpoint.

Conversation recovery is prohibited.

Repository recovery is mandatory.

---

# 42. CONTEXT LIMIT PROTOCOL

The AI shall monitor remaining context.

If context approaches exhaustion,

implementation SHALL pause.

Checkpoint SHALL execute.

Repository SHALL be updated.

Session SHALL terminate gracefully.

Never allow context exhaustion
to lose production knowledge.

---

# 43. RESUME PROTOCOL

Every session SHALL be resumable.

Resume shall require only:

Repository

NOT conversation.

Success criterion:

A different AI agent
shall continue production within five minutes.

---

# 44. PARALLEL EXECUTION

Independent work packages
may execute simultaneously.

Example

UI Design

Audio Planning

Asset Naming

Documentation

Testing

These tasks SHALL merge
through repository review.

Parallel execution
must never create conflicting canon.

---

# 45. DEFINITION OF EXECUTION SUCCESS

An execution session succeeds only if:

Repository knowledge increased.

Project state updated.

Current task advanced.

Future uncertainty reduced.

Next engineer can continue immediately.

Generating code alone
does not constitute success.
