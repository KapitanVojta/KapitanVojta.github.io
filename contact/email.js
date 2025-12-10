// Dark mode is now default via HTML markup; toggle logic removed.

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
