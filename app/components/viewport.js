/**
 * Viewport Component
 * Handles room rendering, camera zoom/focus, and lamp/light animation.
 */

export class ViewportComponent {
  constructor(roomContainer) {
    this.container = roomContainer;
    this.lampActive = true;
  }

  setCameraZoom(zoomLevel, focusTarget = null) {
    if (!this.container) return;
    
    if (zoomLevel > 1.0) {
      this.container.classList.add("viewport-focused");
    } else {
      this.container.classList.remove("viewport-focused");
    }
  }

  toggleLamp() {
    this.lampActive = !this.lampActive;
    if (!this.container) return;

    if (this.lampActive) {
      this.container.classList.remove("lamp-off");
    } else {
      this.container.classList.add("lamp-off");
    }
    return this.lampActive;
  }

  highlightAnchor(anchorId) {
    const anchors = this.container.querySelectorAll("[data-anchor]");
    anchors.forEach(elem => {
      if (elem.getAttribute("data-anchor") === anchorId) {
        elem.classList.add("anchor-active");
      } else {
        elem.classList.remove("anchor-active");
      }
    });
  }
}
