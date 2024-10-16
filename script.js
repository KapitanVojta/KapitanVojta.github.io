const darkbtn = document.getElementById("darkbtn");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

if (isDarkMode) {
  body.classList.add("dark-mode");
  darkbtn.checked = true;
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

function sendEmail() {
  try {
    var form_name = document.getElementById("name").value;
    var form_email = document.getElementById("email").value;
    var form_message = document.getElementById("query").value;
    var email = SECRETS.EMAIL;
    var password = SECRETS.EMAIL_PASS;
    var mailTo1 = SECRETS.MAIL_TO_1;
    var mailTo2 = SECRETS.MAIL_TO_2;
    Email.send({
      Host: "smtp.seznam.cz",
      Username: `${email}`,
      Password: `${password}`,
      To: `${mailTo2}`,
      From: `${email}`,
      Subject: "Formular na webu - Spoluprace",
      Body: `Jméno: ${form_name} <br>
      Email: ${form_email} <br>
      Dotaz: ${form_message}`,
    }).then(function (message) {
      alert("Dotaz úspěšně odeslán"); // Alert message on successful email delivery
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("query").value = "";
    });
  } catch (error) {
    alert("Něco se pokazilo. Zkuste to prosím znovu.");
    console.log(error);
  }
}
