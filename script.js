const allInputs = document
  .getElementById("signup_form")
  .querySelectorAll("input");

const message = document.getElementById("message");

allInputs.forEach((input) =>
  input.addEventListener("keydown", () => {
    allInputs.forEach((field) => {
      field.style.borderColor = "";
      message.innerHTML = "";
    });
  })
);

/**
 * Basic form validation. Currently checks
 *   if required inputs are filled out
 *   email is a valid address
 *   passwords match
 */
function validateForm() {
  const reqInputs = document
    .getElementById("signup_form")
    .querySelectorAll("[required]");
  let allInputsFilled = true;

  reqInputs.forEach((input) => {
    if (input.value === "") {
      input.style.borderColor = "red";
      message.innerHTML = "Please fill out the required fields";
      allInputsFilled = false;
    }
  });

  // do more granular validation once all fields filled out
  if (allInputsFilled) {
    let noError = validateEmail();
    if (noError) noError = checkPassword();
  }
}

/**
 * Basic email validation
 * @returns true if the email address format is valid
 */
function validateEmail() {
  const email = document.getElementById("email");
  const emailValue = email.value;
  const format =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailValue.match(format)) {
    email.style.borderColor = "red";
    message.innerHTML = "Please enter a valid email address";
    return false;
  }
  return true;
}

/**
 * Basic password matching validation
 * @returns true if the passwords match
 */
function checkPassword() {
  const password1 = document.getElementById("password");
  const password2 = document.getElementById("confirm_password");

  if (password1.value != password2.value) {
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    message.innerHTML = "Passwords do not match";
    return false;
  }
  return true;
}
