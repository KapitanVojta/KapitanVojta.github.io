const darkbtn = document.getElementById("darkbtn");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

darkbtn.checked = isDarkMode;

if (isDarkMode) {
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

const btn = document.getElementById('button');
const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Posílám...';

   const serviceID = 'default_service';
   const templateID = 'template_tjfporo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Odeslat';
      alert('Dotaz byl úspěšně poslán. Odpověď na Váš dotaz zpracujeme a ozveme se Vám co nejrychleji.');
      email.value = '';
      name.value = '';
      message.value = '';
    }, (err) => {
      btn.value = 'Odeslat';
      alert("Něco se pokazilo. Pokud tento problém přetrvává, kontaktujte mě plrosím přes Instagram, či doscord.");
      //alert(JSON.stringify(err));
    });
});