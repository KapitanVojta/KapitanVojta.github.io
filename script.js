const darkbtn = document.getElementById("darkbtn");
const body = document.body;
let isDarkMode = localStorage.getItem("darkMode");

if (isDarkMode === null) {
  isDarkMode = "enabled";
  localStorage.setItem("darkMode", "enabled");
}

darkbtn.checked = isDarkMode === "enabled";

if (isDarkMode === "enabled") {
  body.classList.add("dark-mode");
}

darkbtn.addEventListener("change", () => {
  if (darkbtn.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

function formular() {
  alert(
    "Na implementování této funkce se stále pracuje. Prozatím mě můžete kontaktovat na Instagramu, či Discordu."
  );
}

const btn = document.getElementById("button");
const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (!email.value || !name.value || !message.value) {
    alert("Prosím, vyplňte všechna pole formuláře.");
    return;
  }

  btn.value = "Posílám...";

  const serviceID = "default_service";
  const templateID = "template_tjfporo";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Odeslat";
      alert(
        "Dotaz byl úspěšně poslán. Odpověď na Váš dotaz zpracujeme a ozveme se Vám co nejrychleji."
      );
      email.value = "";
      name.value = "";
      message.value = "";
    },
    (err) => {
      btn.value = "Odeslat";
      alert(
        "Něco se pokazilo. Pokud tento problém přetrvává, kontaktujte mě plrosím přes Instagram, či discord."
      );
      //alert(JSON.stringify(err));
    }
  );
});
