//Form Validation

const emailField = document.getElementById("email-field");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");

function validateEmail() {
   if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = "Please Enter a valid email";
      emailField.style.borderBottomColor = "red";
      return false;
   }
   emailError.innerHTML = "";
   emailField.style.borderBottomColor = "green";
   return true;

}