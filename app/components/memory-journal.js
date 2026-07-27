/**
 * Memory Journal Component
 * Interactive UI modal/drawer for viewing unlocked memory nodes.
 */

import { MEMORY_DATABASE } from "../data/memory-database.js";

export class MemoryJournalComponent {
  constructor(modalElement, storageManager) {
    this.modal = modalElement;
    this.storage = storageManager;
    this.listContainer = this.modal.querySelector(".journal-list");
    this.detailContainer = this.modal.querySelector(".journal-detail");
    this.closeBtn = this.modal.querySelector(".journal-close-btn");
    this.progressLabel = this.modal.querySelector(".journal-progress");

    this._bindEvents();
  }

  _bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.hide());
    }

    // Backdrop click close
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.hide();
      }
    });

    // ESC key close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.modal.hasAttribute("hidden")) {
        this.hide();
      }
    });
  }

  show() {
    this.render();
    this.modal.removeAttribute("hidden");
    this.modal.classList.add("journal-open");
  }

  hide() {
    this.modal.classList.remove("journal-open");
    setTimeout(() => {
      this.modal.setAttribute("hidden", "true");
    }, 300);
  }

  render() {
    if (!this.listContainer) return;
    
    const unlockedIds = this.storage.getState().unlockedMemories || [];
    if (this.progressLabel) {
      this.progressLabel.textContent = `Ký ức: ${unlockedIds.length}/${MEMORY_DATABASE.length}`;
    }

    this.listContainer.innerHTML = "";

    MEMORY_DATABASE.forEach(mem => {
      const isUnlocked = unlockedIds.includes(mem.id);
      const item = document.createElement("div");
      item.className = `journal-item ${isUnlocked ? "unlocked" : "locked"}`;
      item.setAttribute("tabindex", isUnlocked ? "0" : "-1");
      
      item.innerHTML = `
        <span class="journal-item-icon">${isUnlocked ? mem.icon : "🔒"}</span>
        <div class="journal-item-info">
          <div class="journal-item-header">
            <span class="journal-item-title">${isUnlocked ? mem.title : "Ký ức chưa mở khóa"}</span>
            <span class="journal-item-period">${mem.period}</span>
          </div>
          <p class="journal-item-desc">${isUnlocked ? mem.shortDesc : "Tiếp tục trải nghiệm để mở khóa ký ức này."}</p>
        </div>
      `;

      if (isUnlocked) {
        item.addEventListener("click", () => this._showDetail(mem));
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this._showDetail(mem);
          }
        });
      }

      this.listContainer.appendChild(item);
    });

    // Select first unlocked by default in detail panel
    const firstUnlocked = MEMORY_DATABASE.find(m => unlockedIds.includes(m.id));
    if (firstUnlocked) {
      this._showDetail(firstUnlocked);
    }
  }

  _showDetail(memory) {
    if (!this.detailContainer) return;

    this.detailContainer.innerHTML = `
      <div class="journal-detail-header">
        <span class="detail-icon">${memory.icon}</span>
        <div>
          <span class="detail-period">Mốc thời gian: ${memory.period}</span>
          <h3 class="detail-title">${memory.title}</h3>
        </div>
      </div>
      <div class="detail-body">
        <p>${memory.fullText}</p>
      </div>
      <div class="detail-footer">
        <span>Nguồn canon: SRC-001 / SRC-002</span>
      </div>
    `;
  }
}
