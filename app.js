const passwordConfirmationField = document.getElementById("confirm-password");
const passwordField = document.getElementById("password");
const passPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/g;

passwordConfirmationField.addEventListener("keyup", checkPasswordMatch);
passwordField.addEventListener("keyup", checkPasswordMatch);

function checkPasswordMatch() {
  const msg = document.querySelector(".pwd-msg");

  if (password.value !== passwordConfirmationField.value) {
    msg.textContent = "Passwords do not match*";
    msg.style.color = "red";
    changeBorderColor(
      passwordField,
      passwordConfirmationField,
      "1px solid rgb(221, 25, 25)"
    );
    return;
  }

  if (
    !passwordField.value.match(passPattern) &&
    !passwordConfirmationField.value.match(passPattern)
  ) {
    msg.textContent = "Password does not meet requirements*";
    msg.style.color = "red";
    changeBorderColor(
      passwordField,
      passwordConfirmationField,
      "1px solid rgb(221, 25, 25)"
    );
    return;
  }

  if (
    passwordField.value &&
    passwordField.value === passwordConfirmationField.value
  ) {
    msg.textContent = "";
    changeBorderColor(
      passwordField,
      passwordConfirmationField,
      "1px solid rgb(24, 172, 24)"
    );
  }
}

function changeBorderColor(a, b, settings) {
  a.style.border = settings;
  b.style.border = settings;
}
