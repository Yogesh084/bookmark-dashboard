alert("welcome to Book Mark Manager Project")
document.getElementById("darkModeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});
document.getElementById("addBookmarkForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const title = document.getElementById("titleInput").value.trim();
  const url = document.getElementById("urlInput").value.trim();

  const newCard = document.createElement("div");
  newCard.classList.add("bookmark");
  newCard.innerHTML = `
    <img src="default-icon.png" alt="Icon">
    <a href="${url}" target="_blank">${title}</a>
  `;

  document.body.appendChild(newCard); // or append to a container

  // Optional: Save to localStorage array
});
let lastDeletedCard = null;
// Delegate click handling for any current or future .remove-btn
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const card = e.target.closest(".bookmark");
    if (card) {
      card.remove();
      // Optional: Also update localStorage or server if you're syncing data
    }
  }
});
document.getElementById("settingsToggle").addEventListener("click", () => {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

document.getElementById("clearBookmarks").addEventListener("click", () => {
  if (confirm("Are you sure? This will remove all bookmarks.")) {
    localStorage.clear(); // adjust based on how you're storing
    location.reload();
  }
});
document.getElementById("settingsToggle").addEventListener("click", () => {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

// Load and apply saved settings on page load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  const layout = localStorage.getItem("layout");

  if (theme) document.body.dataset.theme = theme;
  if (layout) document.getElementById("bookmarkContainer").dataset.layout = layout;

  document.getElementById("themeToggle").value = theme || "auto";
  document.getElementById("layoutToggle").value = layout || "grid";
});

// Save setting changes
document.getElementById("themeToggle").addEventListener("change", e => {
  localStorage.setItem("theme", e.target.value);
  document.body.dataset.theme = e.target.value;
});

document.getElementById("layoutToggle").addEventListener("change", e => {
  localStorage.setItem("layout", e.target.value);
  document.getElementById("bookmarkContainer").dataset.layout = e.target.value;
});

document.getElementById("clearBookmarks").addEventListener("click", () => {
  if (confirm("Clear all bookmarks? This can't be undone.")) {
    localStorage.clear();
    location.reload();
  }
});
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("settingsToggle").addEventListener("click", () => {
    const panel = document.getElementById("settingsPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });
});
