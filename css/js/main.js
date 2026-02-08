// Tiny helper: highlight active nav link by matching pathname
(() => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("href") === path) a.style.background = "rgba(255,255,255,.06)";
  });
})();
