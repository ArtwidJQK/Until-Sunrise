# Scene 002 Specification — The Reopened Contact

Scene ID: `SCN-002`  
Scene Name: The Reopened Contact  
Version: 1.0  
Status: Production Ready  
Authority: `SRC-001`, `SRC-002`, Founder Decisions `FD-0001` through `FD-0005`, approved Knowledge Layer (`docs/02_Knowledge/`)  
Document Owner: Technical Director / Creative Director  
Last Updated: 2026-07-27  

---

## 1. Scene Overview & Purpose

### 1.1 Narrative Purpose
`SCN-002` is the first explicit 2026 memory scene after the opening room. It covers only the approved reconnection sequence:

1. Dung sees Ngoc Anh's profile.
2. Dung expresses interest first.
3. Ngoc Anh accepts/adds him.
4. Contact resumes and leads toward renewed daily communication.

This ordering is mandatory under `TIM-006` and `MEM-006`.

### 1.2 Player Objective
Observe the fragile restart of contact through interface traces, quiet subtitle beats, and environmental cues without fabricating message logs or direct dialogue.

### 1.3 Emotional Objective
Move from stillness into tentative warmth. The player should feel that reconnection begins with something small, careful, and easily missed rather than a dramatic confession.

---

## 2. Canon Scope & Constraints

- **Primary Canon Inputs:** `TIM-006`, `TIM-007`, `MEM-006`, `MEM-007`.
- **Supporting Emotional Inputs:** `Story_Bible.md` (Ordinary Sacredness, Standing on the Same Side), `Theme_Bible.md`, `Emotion_Bible.md`, `Relationship_Bible.md`.
- **Forbidden:** Invented message text, exact timestamps, a dramatic trigger event, extra participants, post-2026 material, or a rewritten event order.
- **Permitted Presentation Detail (FD-0005):** Non-canonical UI and atmosphere details such as screen glow, notification pulse, subtle typing rhythm, and abstract motion design that do not alter canon.

---

## 3. Scene Boundaries & Scope

- **Entry Point:** Scene begins immediately after the player leaves `SCN-001`. The visual frame tightens from room memory into a phone-lit interface space.
- **Physical Scope:** Abstracted private-device space rather than a literal chat recreation. The player sees traces of contact, not a reconstructed message app.
- **Exit Trigger:** Player completes the final beat connecting reopened contact to renewed daily routines.

---

## 4. Scene State Machine & Transitions

```text
[ STATE_ENTRY ] -> [ STATE_OBSERVING ] -> [ STATE_SIGNAL ] -> [ STATE_REOPENED ] -> [ STATE_COMPLETE ]
```

### State Definitions

1. `STATE_ENTRY`
   - Fade from `SCN-001` into a darker screen-lit palette.
   - Ambient room tone narrows into a close electronic hum with distant rain preserved.

2. `STATE_OBSERVING`
   - Player sees three memory traces: first signal, reopened contact, ordinary routines.
   - Hover or focus reveals source-backed interpretive labels only.

3. `STATE_SIGNAL`
   - Activated when the player inspects the first trace.
   - Subtitle beat confirms that Dung initiated the renewed attention in 2026.

4. `STATE_REOPENED`
   - Activated when the player inspects the second trace.
   - Subtitle beat confirms Ngoc Anh responded and reopened contact.

5. `STATE_COMPLETE`
   - Final beat bridges from reconnection into the possibility of ordinary daily routines (`MEM-007`) without skipping forward into unspecified scenes.

---

## 5. Interaction & Environmental Storytelling Flow

### 5.1 Environmental Traces

| Trace ID | UI / Object Cue | Interaction Response | Canon Anchor |
| --- | --- | --- | --- |
| `TRACE_SIGNAL` | Soft heart / signal pulse | Reveals that Dung noticed Ngoc Anh first and expressed interest first. | `TIM-006`, `MEM-006` |
| `TRACE_REOPEN` | Contact card / return glow | Reveals that Ngoc Anh accepted/added him and contact resumed. | `TIM-006`, `MEM-006` |
| `TRACE_ROUTINE` | Call-wave / quiet rhythm | Reveals the bridge toward late-night calls, games, check-ins, and shared presence. | `TIM-007`, `TIM-008`, `MEM-007` |

### 5.2 Subtitle Beats

| Beat | Subtitle Purpose | Required Source |
| --- | --- | --- |
| 1 | Establish that 2026 reopens because Dung sees Ngoc Anh first. | `TIM-006`, `MEM-006` |
| 2 | Confirm Dung initiates the signal. | `TIM-006`, `MEM-006` |
| 3 | Confirm Ngoc Anh responds and contact reopens. | `TIM-006`, `MEM-006` |
| 4 | Bridge toward ordinary routines without inventing exact logs or dates. | `TIM-007`, `TIM-008`, `MEM-007` |

---

## 6. Audio, Camera, and Subtitle Direction

### 6.1 Camera
- Maintain the repository rule: **never cinematic in the sense of spectacle**.
- Use slow drift and micro-zoom only.
- Camera should feel like leaning closer to a phone screen, not a dramatic cutscene.

### 6.2 Audio
- Preserve distant rain / room continuity from `SCN-001`.
- Add a low electronic hum and a soft notification-like shimmer.
- No embedded licensed song and no exaggerated SFX burst.

### 6.3 Subtitle System
- Centered lower safe-area placement with enough padding above the letterbox.
- Each beat requires explicit source references in data.
- Timing is auto-advance capable but player-overridable.

---

## 7. Required Production Assets

### 7.1 Visual Assets
- Reuse `assets/bedroom-opening.png` as a background memory layer.
- Add abstract UI overlays in code/CSS for screen glow, signal pulse, trace chips, and source labels.
- Do not import final chat screenshots or private real-message imagery.

### 7.2 Audio Assets
- Continue synthesized ambience already present in the product shell.
- Optional future replacement with original or licensed ambient audio only after `OQ-0003` is resolved.

---

## 8. Product Runtime Implementation Mapping

`SCN-002` belongs to the root React runtime and must not replace the vanilla `app/` vertical slice.

```text
src/
├── App.tsx                # Scene player, subtitle timing, scene persistence
├── data/
│   └── scenes.ts          # Source-backed scene registry and beat references
└── types/
    └── story.ts           # Scene and subtitle beat contracts
```

---

## 9. Verification Criteria

- `SCN-002` preserves the exact `TIM-006` ordering.
- No invented dialogue, timestamps, or message transcript appear.
- Every beat in runtime data exposes source references.
- Progress save/load still works through `/api/progress`.
- Product build remains green.
