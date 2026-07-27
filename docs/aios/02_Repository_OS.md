# ======================================================================
# Until Sunrise Studio
# AI Operating System Specification (AIOS)
# Part 2: Repository Operating System
# Version 1.0
# Status: Mandatory
# Authority: Founder
# ======================================================================

# 12. REPOSITORY OPERATING SYSTEM

The repository is not a code container.

The repository is the operating memory of the studio.

Every AI session shall interact with the repository as an operating system rather than
a collection of folders.

Every important state must be persisted.

Nothing critical may exist only inside model context.

---

# 13. REPOSITORY MEMORY LAYERS

The repository consists of seven logical layers.

Layer 1

Foundation

Mission

Vision

Constitution

Core Values

Project Scope

---

Layer 2

Knowledge

Story Bible

Character Bible

Timeline

Experience Bible

World Bible

Emotion Bible

Dialogue Bible

---

Layer 3

Production

Roadmap

Project Plan

Current Sprint

Decision Log

Architecture

---

Layer 4

Implementation

Source Code

Assets

Components

Scripts

Tests

Configurations

---

Layer 5

Quality

QA

Reviews

Known Issues

Technical Debt

Release Notes

---

Layer 6

Recovery

Project State

Context Summary

Session Handover

Repository Health

Open Questions

---

Layer 7

Archive

Deprecated

Historical Decisions

Legacy Documents

Never delete production knowledge.

Archive it.

---

# 14. REQUIRED REPOSITORY FILES

The following files SHALL always exist.

README.md

PROJECT_PLAN.md

PROJECT_STATE.json

HANDOVER.md

CONTEXT_SUMMARY.md

DECISION_LOG.md

OPEN_QUESTIONS.md

REPOSITORY_HEALTH.md

CHANGELOG.md

Missing mandatory files shall be created immediately.

---

# 15. PROJECT_STATE.json

Purpose

Machine-readable repository state.

Human editing is discouraged.

This file exists primarily for AI agents.

Example

```json
{
    "project": "Until Sunrise",
    "version": "0.8.0",
    "phase": "Pre Production",
    "current_sprint": "Story Bible",
    "current_task": "Memory Design",
    "completion": 18,
    "repository_health": 82,
    "blocked": false,
    "blocking_reason": null,
    "last_agent": "Codex",
    "last_update": "ISO8601",
    "next_recommended_task": "Dialogue Bible"
}
```

Every execution SHALL update this file.

---

# 16. PROJECT_PLAN.md

Purpose

Repository roadmap.

This is the master production schedule.

Each task shall contain

Status

Description

Dependencies

Priority

Owner

Estimated Effort

Completion

Verification Status

Example

Story Bible

Status

In Progress

Completion

68%

Dependencies

Timeline

Relationship Canon

Verification

Pending

Never remove completed tasks.

Mark them completed.

---

# 17. HANDOVER.md

Purpose

Transfer knowledge to the next engineer.

This document is the single most important artifact after PROJECT_PLAN.

Every session SHALL update it.

Required structure

Current Phase

Current Sprint

Completed Today

Current Task

Files Modified

Architecture Changes

Creative Changes

Technical Decisions

Known Risks

Blocking Issues

Recommended Next Task

Estimated Remaining Work

Resume Instruction

Agent Name

Timestamp

The next engineer must understand the project
within five minutes.

---

# 18. CONTEXT_SUMMARY.md

Purpose

Compress repository context.

This file is optimized for LLM reading.

Target length

1000–3000 words.

Not longer.

It shall answer

What exists?

What changed?

What is unfinished?

What is dangerous?

What should happen next?

Never copy documentation.

Summarize it.

---

# 19. DECISION_LOG.md

Purpose

Prevent contradictory decisions.

Every approved production decision shall be recorded.

Structure

Decision ID

Date

Category

Description

Reason

Alternatives Considered

Impact

Affected Files

Approved By

Status

No decision may disappear.

Superseded decisions remain archived.

---

# 20. OPEN_QUESTIONS.md

Purpose

Capture uncertainty.

Whenever repository evidence is insufficient,

AI SHALL create an entry.

Never invent.

Structure

Question

Why It Matters

Blocking

YES / NO

Possible Sources

Recommended Resolution

Status

Resolved questions are archived.

Never deleted.

---

# 21. REPOSITORY_HEALTH.md

Purpose

Measure repository quality.

This is NOT project completion.

Repository health measures knowledge quality.

Metrics

Documentation Coverage

Story Coverage

Character Coverage

Architecture Coverage

Implementation Coverage

Testing Coverage

Decision Traceability

Knowledge Consistency

Dependency Completeness

Context Recovery Readiness

Each metric

0–100%

Overall score

Weighted average.

Example

Repository Health

87%

Story Coverage

92%

Architecture

81%

Testing

25%

Context Recovery

100%

Knowledge Consistency

95%

---

# 22. CHANGELOG.md

Purpose

Historical production log.

Every sprint shall generate one entry.

Structure

Version

Date

Added

Changed

Removed

Deprecated

Fixed

Known Issues

Never rewrite history.

Append only.

---

# 23. KNOWLEDGE PERSISTENCE RULE

Every important production decision
must exist inside one of the mandatory artifacts.

Knowledge existing only inside conversations
is considered lost knowledge.

Lost knowledge equals production failure.

---

# 24. REPOSITORY FIRST PRINCIPLE

Whenever there is time to:

write another feature

or

document existing knowledge

documentation has priority if repository continuity
would otherwise decrease.

Future engineers depend on repository quality.

Not conversation history.

---

# 25. REPOSITORY ENTROPY

Repository entropy is defined as

missing documentation

duplicated knowledge

contradictory rules

unknown dependencies

unfinished specifications

Every execution SHALL reduce entropy.

Entropy shall never increase.

---

# 26. DOCUMENT OWNERSHIP

Every repository document shall have exactly one
authoritative purpose.

Example

Story Bible

Owns story canon.

Character Bible

Owns character information.

Timeline

Owns chronology.

Architecture

Owns system design.

Avoid duplicated authority.

One truth.

One owner.

---

# 27. CROSS DOCUMENT CONSISTENCY

Whenever a document changes,

all dependent documents SHALL be reviewed.

Example

Timeline changes

↓

Review

Story Bible

Dialogue Bible

Memory Design

Scene Design

Experience Flow

Project Plan

Failure to synchronize dependent documents
creates repository inconsistency.

Repository inconsistency is HIGH severity.

---

# 28. DEFINITION OF REPOSITORY COMPLETENESS

A repository is considered complete only when

every important production decision

can be reconstructed

without conversation history.

If conversations are required,

repository completeness equals zero.
