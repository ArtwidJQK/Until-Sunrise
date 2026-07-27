(function () {
  "use strict";

  var form = document.querySelector("#login-form");
  var nameInput = document.querySelector("#player-name");
  var loginScene = document.querySelector('[data-screen="login"]');
  var placeholderScene = document.querySelector('[data-screen="placeholder"]');
  var welcomeTitle = document.querySelector("#welcome-title");
  var backButton = document.querySelector("#back-button");

  function showPlaceholder(name) {
    var safeName = name.trim();
    welcomeTitle.textContent = safeName ? "Chào mừng, " + safeName + "." : "Chào mừng bạn.";
    loginScene.hidden = true;
    placeholderScene.hidden = false;
    placeholderScene.focus({ preventScroll: true });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    showPlaceholder(nameInput.value);
  });

  backButton.addEventListener("click", function () {
    placeholderScene.hidden = true;
    loginScene.hidden = false;
    nameInput.focus();
  });
})();
