# Scenes Layer

Status: Active  
Authority: Approved Knowledge Layer (`docs/02_Knowledge/`); `docs/aios/`  
Owner: Technical Director / Creative Director  
Last Updated: 2026-07-27  

This folder contains production-ready scene specifications for *Until Sunrise*. Every scene specification defined here MUST derive strictly from approved Knowledge Documents and canonical sources (`SRC-001` and `SRC-002`).

---

## Scene Specifications

| Scene ID | Title / Name | Status | Specification | Primary Focus |
| --- | --- | --- | --- | --- |
| **SCN-001** | The Opening Memory Space | Production Ready | [`Scene_001_Specification.md`](Scene_001_Specification.md) | 2026 framing environment, memory observer role, room anchors, first transition |
| **SCN-002** | The Reopened Contact | Production Ready | [`Scene_002_Specification.md`](Scene_002_Specification.md) | 2026 reconnection ordering, reopened contact, bridge into ordinary daily routines |

---

## Scene Production Rules

1. Every scene specification MUST define a finite state machine (`STATE_ENTRY` → `STATE_OBSERVING` → `STATE_FOCUSING` → `STATE_MEMORY_REVEAL` → `STATE_COMPLETE`).
2. Interaction MUST follow `Experience_Bible.md`: non-gameplay, unhurried, tactile, and non-confrontational.
3. Audio, UI, visual assets, and code file mappings MUST be explicitly declared before implementation begins.
