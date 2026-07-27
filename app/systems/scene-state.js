/**
 * Scene State Machine System
 * Manages states for SCN-001: ENTRY -> OBSERVING -> FOCUSING -> MEMORY_REVEAL -> COMPLETE
 */

export const STATES = {
  ENTRY: "STATE_ENTRY",
  OBSERVING: "STATE_OBSERVING",
  FOCUSING: "STATE_FOCUSING",
  MEMORY_REVEAL: "STATE_MEMORY_REVEAL",
  COMPLETE: "STATE_COMPLETE"
};

export class SceneStateMachine {
  constructor() {
    this.currentState = STATES.ENTRY;
    this.listeners = [];
  }

  onChange(callback) {
    if (typeof callback === "function") {
      this.listeners.push(callback);
    }
  }

  transitionTo(nextState, payload = {}) {
    if (this.currentState === nextState) return;
    
    const prevState = this.currentState;
    this.currentState = nextState;

    this.listeners.forEach(cb => cb(this.currentState, prevState, payload));
  }

  getState() {
    return this.currentState;
  }
}
