/**
 * Storage Manager System
 * LocalStorage state persistence for player progression, unlocked memories, and settings.
 */

const STORAGE_KEY = "until_sunrise_save_state_v1";

const DEFAULT_STATE = {
  playerName: "",
  currentSceneId: "SCN-001",
  unlockedMemories: ["MEM-006"],
  volumeMuted: false,
  completedScenes: [],
  lastPlayed: null
};

export class StorageManager {
  constructor() {
    this.state = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE, lastPlayed: Date.now() };
      return { ...DEFAULT_STATE, ...JSON.parse(raw) };
    } catch (e) {
      console.warn("Could not load save state from LocalStorage:", e);
      return { ...DEFAULT_STATE, lastPlayed: Date.now() };
    }
  }

  save(partialState = {}) {
    this.state = {
      ...this.state,
      ...partialState,
      lastPlayed: Date.now()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not save state to LocalStorage:", e);
    }
    return this.state;
  }

  unlockMemory(memoryId) {
    if (!this.state.unlockedMemories.includes(memoryId)) {
      this.state.unlockedMemories.push(memoryId);
      this.save();
    }
    return this.state.unlockedMemories;
  }

  markSceneComplete(sceneId) {
    if (!this.state.completedScenes.includes(sceneId)) {
      this.state.completedScenes.push(sceneId);
      this.save();
    }
    return this.state.completedScenes;
  }

  getState() {
    return this.state;
  }

  reset() {
    this.state = { ...DEFAULT_STATE, lastPlayed: Date.now() };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    return this.state;
  }
}
