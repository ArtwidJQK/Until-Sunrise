/**
 * Subtitle Panel Component
 * Glassmorphism text overlay with typewriter animation and skip-to-end support.
 */

export class SubtitlePanelComponent {
  constructor(panelElement) {
    this.panel = panelElement;
    this.eyebrow = this.panel.querySelector(".subtitle-eyebrow");
    this.body = this.panel.querySelector(".subtitle-body");
    this.actionBtn = this.panel.querySelector(".subtitle-action");
    
    this.typeTimer = null;
    this.fullText = "";
    this.isTyping = false;
  }

  show(text, eyebrow = "", buttonLabel = "", onAction = null) {
    if (!this.panel) return;
    
    this.fullText = text;
    if (this.eyebrow) {
      this.eyebrow.textContent = eyebrow;
      this.eyebrow.style.display = eyebrow ? "block" : "none";
    }

    if (this.actionBtn) {
      if (buttonLabel) {
        this.actionBtn.textContent = buttonLabel;
        this.actionBtn.style.display = "inline-block";
        this.actionBtn.onclick = (e) => {
          e.preventDefault();
          if (this.isTyping) {
            this._finishTyping();
          } else if (onAction) {
            onAction();
          }
        };
      } else {
        this.actionBtn.style.display = "none";
      }
    }

    this.panel.classList.add("subtitle-visible");
    this.panel.removeAttribute("hidden");

    // Typewriter effect
    this._startTypewriter(text);
  }

  _startTypewriter(text) {
    if (this.typeTimer) clearInterval(this.typeTimer);
    if (!this.body) return;

    this.body.textContent = "";
    this.isTyping = true;
    let index = 0;

    this.typeTimer = setInterval(() => {
      if (index < text.length) {
        this.body.textContent += text.charAt(index);
        index++;
      } else {
        this._finishTyping();
      }
    }, 28);
  }

  _finishTyping() {
    if (this.typeTimer) clearInterval(this.typeTimer);
    if (this.body) this.body.textContent = this.fullText;
    this.isTyping = false;
  }

  hide() {
    if (!this.panel) return;
    if (this.typeTimer) clearInterval(this.typeTimer);
    this.panel.classList.remove("subtitle-visible");
    setTimeout(() => {
      this.panel.setAttribute("hidden", "true");
    }, 300);
  }
}
