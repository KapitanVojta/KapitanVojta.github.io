const API_URL = "https://script.google.com/macros/s/AKfycby0rH5l3JfbVVUw2-HpaGV1oAQNTLHvBYiLdo9BNw90N7bZIK2r_1X3CX6yPMlKdmE4Kw/exec?path=json&token=tajneheslo123456";

function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return isNaN(+d) ? "—" : d.toLocaleString("cs-CZ");
}

async function loadUsers() {
  const statusEl = document.getElementById("status");
  const startEl  = document.getElementById("startTime");
  const countEl  = document.getElementById("count");
  const listEl   = document.getElementById("list");

  try {
    statusEl.textContent = "Stav: načítám…";

    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);

    const data  = await res.json();
    const users = Array.isArray(data.users) ? data.users : [];
    const start = data.start || "";

    startEl.textContent = "Začátek sběru: " + fmtDate(start);
    countEl.textContent = "Počet: " + users.length;
    listEl.textContent  = users.length ? users.join(", ") : "Nikdo se nepřihlásil.";
    listEl.dataset.users = users.join(", ");

    statusEl.textContent = "Stav: OK";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Stav: chyba načítání";
  }
}

function copyUsers() {
  const listEl = document.getElementById("list");
  const txt = listEl.dataset.users || "";
  if (!txt) {
    alert("Žádná data k zkopírování.");
    return;
  }
  navigator.clipboard.writeText(txt).then(
    () => alert("Seznam zkopírován do schránky."),
    () => alert("Nepodařilo se zkopírovat.")
  );
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("copyBtn").addEventListener("click", copyUsers);
  document.getElementById("reloadBtn").addEventListener("click", loadUsers);
  loadUsers();
});
