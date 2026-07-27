/**
 * Subtitle Panel Component
 * Glassmorphism text overlay for memory prompts and scene subtitles.
 */

export class SubtitlePanelComponent {
  constructor(panelElement) {
    this.panel = panelElement;
    this.eyebrow = this.panel.querySelector(".subtitle-eyebrow");
    this.body = this.panel.querySelector(".subtitle-body");
    this.actionBtn = this.panel.querySelector(".subtitle-action");
  }

  show(text, eyebrow = "", buttonLabel = "", onAction = null) {
    if (!this.panel) return;
    
    if (this.eyebrow) {
      this.eyebrow.textContent = eyebrow;
      this.eyebrow.style.display = eyebrow ? "block" : "none";
    }

    if (this.body) {
      this.body.textContent = text;
    }

    if (this.actionBtn) {
      if (buttonLabel) {
        this.actionBtn.textContent = buttonLabel;
        this.actionBtn.style.display = "inline-block";
        this.actionBtn.onclick = (e) => {
          e.preventDefault();
          if (onAction) onAction();
        };
      } else {
        this.actionBtn.style.display = "none";
      }
    }

    this.panel.classList.add("subtitle-visible");
    this.panel.removeAttribute("hidden");
  }

  hide() {
    if (!this.panel) return;
    this.panel.classList.remove("subtitle-visible");
    setTimeout(() => {
      this.panel.setAttribute("hidden", "true");
    }, 300);
  }
}
