const API_URL = "https://script.google.com/macros/s/AKfycby0rH5l3JfbVVUw2-HpaGV1oAQNTLHvBYiLdo9BNw90N7bZIK2r_1X3CX6yPMlKdmE4Kw/exec?path=json&token=tajne123456";


async function loadUsers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const startEl = document.getElementById("startTime");
    const countEl = document.getElementById("count");
    const listEl  = document.getElementById("list");

    if (data.start) {
      const d = new Date(data.start);
      startEl.textContent = "Začátek sběru: " + d.toLocaleString("cs-CZ");
    } else {
      startEl.textContent = "Začátek sběru: -";
    }

    const users = data.users || [];
    countEl.textContent = "Počet: " + users.length;

    if (users.length === 0) {
      listEl.textContent = "Nikdo se nepřihlásil.";
    } else {
      listEl.textContent = users.join(", ");
    }

    // Save do datasetu, ať jde kopírovat
    listEl.dataset.users = users.join(", ");
  } catch (err) {
    console.error(err);
    alert("Chyba při načítání dat.");
  }
}

function copyUsers() {
  const listEl = document.getElementById("list");
  const txt = listEl.dataset.users || "";
  if (!txt) {
    alert("Žádná data k zkopírování.");
    return;
  }
  navigator.clipboard.writeText(txt).then(() => {
    alert("Seznam zkopírován do schránky.");
  });
}

// automaticky loadne při loadu stránky
window.addEventListener("DOMContentLoaded", loadUsers);
