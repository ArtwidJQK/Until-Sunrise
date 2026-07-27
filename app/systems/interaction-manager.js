/**
 * Interaction Manager System
 * Event dispatcher for hover, focus, click, and keyboard navigation.
 */

export class InteractionManager {
  constructor(audioManager, stateMachine) {
    this.audioManager = audioManager;
    this.stateMachine = stateMachine;
    this.activeAnchor = null;
    this.anchorElements = [];
    this.onHoverCallback = null;
    this.onSelectCallback = null;
  }

  setup(container, onHover, onSelect) {
    this.onHoverCallback = onHover;
    this.onSelectCallback = onSelect;
    this.anchorElements = Array.from(container.querySelectorAll("[data-anchor]"));

    this.anchorElements.forEach(elem => {
      // Hover events
      elem.addEventListener("mouseenter", () => this._handleHover(elem));
      elem.addEventListener("focus", () => this._handleHover(elem));

      // Click events
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        this._handleSelect(elem);
      });

      // Keyboard accessibility (Enter or Space)
      elem.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this._handleSelect(elem);
        }
      });
    });

    // Global keyboard listener for Escape (un-focus)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.clearActiveAnchor();
      }
    });
  }

  _handleHover(element) {
    const currentState = this.stateMachine.getState();
    if (currentState !== "STATE_OBSERVING" && currentState !== "STATE_FOCUSING") return;

    const anchorId = element.getAttribute("data-anchor");
    this.audioManager.playHoverSound();

    if (this.onHoverCallback) {
      this.onHoverCallback(anchorId, element);
    }
  }

  _handleSelect(element) {
    const anchorId = element.getAttribute("data-anchor");
    this.activeAnchor = anchorId;
    this.audioManager.playSelectSound();

    if (this.onSelectCallback) {
      this.onSelectCallback(anchorId, element);
    }
  }

  clearActiveAnchor() {
    this.activeAnchor = null;
    if (this.onHoverCallback) {
      this.onHoverCallback(null, null);
    }
  }
}
