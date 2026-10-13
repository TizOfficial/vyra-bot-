document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Menü öffnen" : "Menü schließen");
  nav?.classList.toggle("open", !isOpen);
});