const STORE_KEY = "vc.lang";
const root = document.documentElement;
const btnRu = document.getElementById("lang-ru");
const btnEn = document.getElementById("lang-en");

function applyLang(lang) {
  root.setAttribute("lang", lang);
  btnRu?.setAttribute("aria-pressed", String(lang === "ru"));
  btnEn?.setAttribute("aria-pressed", String(lang === "en"));
  const title = root.dataset["title" + lang.charAt(0).toUpperCase() + lang.slice(1)];
  if (title) document.title = title;
}

let saved;
try { saved = localStorage.getItem(STORE_KEY); } catch {}
if (!saved) {
  saved = (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "ru";
}
applyLang(saved);

function setLang(lang) {
  applyLang(lang);
  try { localStorage.setItem(STORE_KEY, lang); } catch {}
}

btnRu?.addEventListener("click", () => setLang("ru"));
btnEn?.addEventListener("click", () => setLang("en"));
