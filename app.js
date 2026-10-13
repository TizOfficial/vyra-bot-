document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  nav?.classList.toggle("open", !isOpen);
});

const translateButton = document.querySelector(".translate-toggle");
const translateWidget = document.querySelector(".translation-widget");
translateButton?.addEventListener("click", () => {
  const isOpen = translateButton.getAttribute("aria-expanded") === "true";
  translateButton.setAttribute("aria-expanded", String(!isOpen));
  translateWidget.hidden = isOpen;
});

if (translateWidget) {
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: "en",
      autoDisplay: false,
    }, "google_translate_element");
  };
  const translateScript = document.createElement("script");
  translateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  translateScript.async = true;
  translateScript.onerror = () => {
    translateWidget.textContent = "Translation is temporarily unavailable.";
  };
  document.head.append(translateScript);
}
