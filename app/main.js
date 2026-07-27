/**
 * Main Application Entry Point & Scene 001 Bootstrap
 * SCN-001 — The Opening Memory Space
 */

import { SCENE_001_DATA } from "./data/scene-001-data.js";
import { AudioManager } from "./systems/audio-manager.js";
import { SceneStateMachine, STATES } from "./systems/scene-state.js";
import { InteractionManager } from "./systems/interaction-manager.js";
import { ViewportComponent } from "./components/viewport.js";
import { SubtitlePanelComponent } from "./components/subtitle-panel.js";

(function () {
  "use strict";

  // Login DOM Elements
  const form = document.querySelector("#login-form");
  const nameInput = document.querySelector("#player-name");
  const loginScene = document.querySelector('[data-screen="login"]');
  const scene001Container = document.querySelector('[data-screen="scene-001"]');

  // Scene 001 DOM Elements
  const roomViewportElem = document.querySelector("#room-viewport");
  const subtitlePanelElem = document.querySelector("#subtitle-panel");
  const audioToggleBtn = document.querySelector("#audio-toggle-btn");
  const audioLabel = audioToggleBtn ? audioToggleBtn.querySelector(".audio-label") : null;
  const backToLoginBtn = document.querySelector("#back-to-login-btn");

  // Systems & Components
  const audioManager = new AudioManager();
  const stateMachine = new SceneStateMachine();
  const interactionManager = new InteractionManager(audioManager, stateMachine);
  const viewport = new ViewportComponent(roomViewportElem);
  const subtitlePanel = new SubtitlePanelComponent(subtitlePanelElem);

  let playerName = "";

  // 1. Setup State Machine Listeners
  stateMachine.onChange((newState, prevState, payload) => {
    switch (newState) {
      case STATES.ENTRY:
        viewport.setCameraZoom(1.0);
        subtitlePanel.hide();
        setTimeout(() => {
          stateMachine.transitionTo(STATES.OBSERVING);
        }, 1500);
        break;

      case STATES.OBSERVING:
        viewport.setCameraZoom(1.0);
        subtitlePanel.show(
          `Chào ${playerName || "bạn"}. Hãy chậm rãi quan sát xung quanh gian phòng.`,
          "2026 — Khung cảnh mở đầu"
        );
        break;

      case STATES.FOCUSING:
        viewport.setCameraZoom(1.14);
        audioManager.playChordSwell();
        break;

      case STATES.MEMORY_REVEAL:
        subtitlePanel.show(
          SCENE_001_DATA.memoryPrompts.revealText,
          SCENE_001_DATA.memoryPrompts.subText,
          "Xem chi tiết ký ức →",
          () => {
            stateMachine.transitionTo(STATES.COMPLETE);
          }
        );
        break;

      case STATES.COMPLETE:
        viewport.setCameraZoom(1.0);
        subtitlePanel.show(
          SCENE_001_DATA.memoryPrompts.completionText,
          "Hoàn thành Scene 001",
          "Bắt đầu lại Scene 001",
          () => {
            stateMachine.transitionTo(STATES.ENTRY);
          }
        );
        break;
    }
  });

  // 2. Setup Interaction Callbacks
  interactionManager.setup(
    roomViewportElem,
    // Hover Callback
    (anchorId, element) => {
      viewport.highlightAnchor(anchorId);
      if (!anchorId && stateMachine.getState() === STATES.OBSERVING) {
        subtitlePanel.show(
          `Chào ${playerName || "bạn"}. Hãy chậm rãi quan sát xung quanh gian phòng.`,
          "2026 — Khung cảnh mở đầu"
        );
        return;
      }

      const anchorData = SCENE_001_DATA.anchors.find(a => a.id === anchorId);
      if (anchorData && stateMachine.getState() === STATES.OBSERVING) {
        subtitlePanel.show(anchorData.detail, anchorData.label);
      }
    },
    // Select Callback
    (anchorId, element) => {
      if (anchorId === "ANCHOR_LAMP") {
        viewport.toggleLamp();
        return;
      }

      if (anchorId === "ANCHOR_MAIN_OBJ") {
        stateMachine.transitionTo(STATES.FOCUSING, { anchorId });
        setTimeout(() => {
          stateMachine.transitionTo(STATES.MEMORY_REVEAL, { anchorId });
        }, 1200);
        return;
      }

      const anchorData = SCENE_001_DATA.anchors.find(a => a.id === anchorId);
      if (anchorData) {
        subtitlePanel.show(anchorData.detail, anchorData.label, "Đóng", () => {
          subtitlePanel.show(
            `Chào ${playerName || "bạn"}. Hãy chậm rãi quan sát xung quanh gian phòng.`,
            "2026 — Khung cảnh mở đầu"
          );
        });
      }
    }
  );

  // 3. Audio Toggle Listener
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      const isMuted = audioManager.toggleMute();
      if (audioLabel) {
        audioLabel.textContent = isMuted ? "Âm thanh: Tắt" : "Âm thanh: Bật";
      }
    });
  }

  // 4. Back to Login Listener
  if (backToLoginBtn) {
    backToLoginBtn.addEventListener("click", () => {
      scene001Container.hidden = true;
      loginScene.hidden = false;
      nameInput.focus();
    });
  }

  // 5. Login Form Submission & Scene 001 Launch
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    playerName = nameInput.value.trim();
    
    // Initialize Web Audio API context on user interaction gesture
    audioManager.init();

    // Transition screens
    loginScene.hidden = true;
    scene001Container.hidden = false;
    scene001Container.focus({ preventScroll: true });

    // Bootstrap Scene 001 State Machine
    stateMachine.transitionTo(STATES.ENTRY);
  });
})();
