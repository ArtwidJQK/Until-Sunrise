# Scene 001 Specification — The Opening Memory Space

Scene ID: `SCN-001`  
Scene Name: The Opening Memory Space  
Version: 1.0  
Status: Production Ready  
Authority: Approved Knowledge Layer (`docs/02_Knowledge/`); SRC-001; FD-0001 through FD-0005  
Document Owner: Technical Director / Creative Director  
Last Updated: 2026-07-27  

---

## 1. Scene Overview & Purpose

### 1.1 Narrative Purpose
`SCN-001` places the player inside the 2026 framing environment—a quiet, cozy, lived-in desk space at dusk. It introduces two presences (Dũng and Ngọc Anh) through environmental evidence alone, without exposition or dramatic confrontation.

### 1.2 Player Objective
Settle into the room, observe environmental details at an unhurried pace, interact with the primary memory anchor on the desk, and experience the transition from physical space to preserved memory.

### 1.3 Emotional Objective
Shift the player's mindset from external noise to quiet curiosity, safety, and warmth. Establish the feeling of: *"I am touching a part of their lives."*

---

## 2. Scene Boundaries & Scope

- **Entry Point:** Starts with a soft fade-in from stillness into a quiet room at dusk. Room tone begins gently. No main menu popups or aggressive UI prompts.
- **Physical Scope:** Focused interior workspace view—a desk, warm lamp, window showing evening light, headset, and central memory object.
- **Exit Trigger:** Player completes the primary interaction with the memory anchor, allows the quiet pause to pass without rapid input, and reaches the reflective memory state (`SCN-001-COMPLETE`).

---

## 3. Scene State Machine & Transitions

```
[ STATE_ENTRY ] ──(Auto Fade-In / Audio Fade)──> [ STATE_OBSERVING ]
                                                         │
                                               (Player Hover / Interact)
                                                         │
                                                         ▼
                                                [ STATE_FOCUSING ]
                                                         │
                                             (Primary Anchor Click)
                                                         │
                                                         ▼
                                              [ STATE_MEMORY_REVEAL ]
                                                         │
                                               (Pause & Reflection)
                                                         │
                                                         ▼
                                               [ STATE_COMPLETE ]
```

### State Definitions

1. `STATE_ENTRY`:
   - Duration: 2.5 seconds.
   - Action: Camera opacity transitions from 0 to 1. Ambient room tone fades in from 0% to 100%.
   - Input: Disables interaction during fade-in.

2. `STATE_OBSERVING`:
   - Action: Free observation mode. Player moves cursor over interactive environmental anchors.
   - Feedback: Hovering over an anchor plays a soft audio response and applies a gentle visual highlight glow.

3. `STATE_FOCUSING`:
   - Trigger: Player clicks the primary memory anchor (phone / memory item).
   - Action: Camera performs a smooth, subtle zoom (scale 1.0 → 1.12 over 1.2s). Ambient light dims slightly around background elements to emphasize the item.

4. `STATE_MEMORY_REVEAL`:
   - Trigger: Focus transition completes.
   - Action: Displays the first reflective memory text overlay: *"Có những ký ức không nên chỉ tồn tại trong quá khứ..."* Plays a quiet ambient chord swell.

5. `STATE_COMPLETE`:
   - Trigger: Reflection pause finishes (5 seconds or player confirmation click).
   - Action: Saves scene state to local storage (`scene_001_completed: true`). Unlocks scene transition anchor to subsequent memory nodes.

---

## 4. Interaction & Environmental Storytelling Flow

### 4.1 Environmental Anchors

| Anchor ID | Target Object | Visual Detail | Interaction Response | Narrative Evidence |
| --- | --- | --- | --- | --- |
| `ANCHOR_LAMP` | Desk Lamp | Warm amber glow emitting soft light cone. | Click toggles lamp intensity (Warm → Soft → Warm). | Suggests late-night habits and quiet working hours. |
| `ANCHOR_WINDOW` | Window Frame | Dusk sky gradient (purple to deep blue) with subtle rain particles. | Hover plays gentle rain ambience audio layer. | Establishes the 2026 present-tense timeframe and reflective mood. |
| `ANCHOR_HEADSET` | Gaming Headset | Rested neatly beside the keyboard. | Hover shows micro-hint: *"Late-night calls"*. | References shared gaming calls and distance communication. |
| `ANCHOR_MAIN_OBJ` | Memory Object | Central phone/memory item glowing with soft pulse. | Triggers primary transition (`STATE_FOCUSING` → `STATE_MEMORY_REVEAL`). | The bridge connecting physical space to preserved memory (MEM-006 / MEM-007). |

---

## 5. Required Production Assets

### 5.1 Visual Assets
- `scene_001_bg_dusk.svg` / CSS Gradient: Warm room backdrop at dusk.
- `desk_surface.svg`: Lived-in wooden desk texture.
- `desk_lamp.svg`: Desk lamp vector with radial light gradient.
- `window_frame.svg`: Window pane with twilight sky vector.
- `memory_object.svg`: Central memory anchor item vector.

### 5.2 Audio Assets
- `sfx_room_tone_dusk.mp3`: Loopable ambient room tone (wind + low hum).
- `sfx_rain_gentle.mp3`: Loopable subtle rain against window glass.
- `sfx_hover_soft.mp3`: Ultra-soft 50ms chime on anchor hover.
- `sfx_anchor_select.mp3`: Soft tactile click/wood tap on interaction.
- `mx_memory_swell.mp3`: Ambient chord swell for memory reveal.

### 5.3 UI & Typography
- **Font Stack:** Inter / System Sans, warm white text (`rgba(255, 252, 245, 0.95)`).
- **Subtitle Container:** Non-intrusive lower-third panel with glassmorphism backdrop (`backdrop-filter: blur(10px)`).

---

## 6. Implementation Architecture & Code Structure

Scene 001 will be implemented in the browser baseline under `app/` using vanilla JavaScript modules and CSS3 transitions:

```text
app/
├── index.html                  # HTML Shell & viewport container
├── main.js                     # Prototype entry point & scene loader
├── styles.css                  # Visual layout, themes & animations
├── components/
│   ├── viewport.js             # Viewport & camera zoom controller
│   └── subtitle-panel.js       # Non-intrusive text overlay component
├── systems/
│   ├── scene-state.js          # Finite state machine for SCN-001
│   ├── audio-manager.js        # Web Audio / HTML5 audio controller
│   └── interaction-manager.js  # Hover/click event dispatcher
└── data/
    └── scene-001-data.js       # SCN-001 anchor configs & text data
```

---

## 7. Success Criteria & Verification Plan

### 7.1 Verification Criteria
- [x] **Zero Build Steps:** Runs natively in any modern browser by opening `app/index.html`.
- [x] **Strict Canon Compliance:** Contains 0 invented story events or unauthorized dialogue; 100% compliant with `Experience_Bible.md` and `Canon_Rules.md`.
- [x] **Smooth Transitions:** State machine handles `ENTRY` → `OBSERVING` → `FOCUSING` → `REVEAL` → `COMPLETE` cleanly.
- [x] **Accessibility:** Full keyboard navigation support (Tab to cycle anchors, Enter/Space to select, Esc to un-focus).

---

## 8. Downstream Integration Notes

- `SCN-001` serves as the vertical slice and template for future scene specifications (`SCN-002`, `SCN-003`).
- Once `SCN-001` implementation is verified in code, `TASK-0005` will expand `app/` modules to deliver this specification in browser execution.
