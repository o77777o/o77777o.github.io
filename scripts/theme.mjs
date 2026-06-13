const STORE_KEY = "vc.theme";
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.setAttribute("aria-label", theme === "dark" ? "Светлая тема" : "Тёмная тема");
  }
}

let saved;
try { saved = localStorage.getItem(STORE_KEY); } catch {}
applyTheme(saved || "light");

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem(STORE_KEY, next); } catch {}
});
