const form = document.getElementById("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const radioButtons = document.querySelectorAll(
  'input[type="radio"][name="query-type"]'
);
const generalQueryInput = document.getElementById("general-enq");
const supportQueryInput = document.getElementById("support-req");
const radioDivP1 = document.getElementById("radio-div-p1");
const radioDivP2 = document.getElementById("radio-div-p2");
const messageInput = document.getElementById("message");
const checkboxInput = document.getElementById("checkbox");
const submitButton = document.getElementById("submit-btn");
const successState = document.getElementById("success-state");

const firstNameError = document.getElementById("error-fname");
const lastNameError = document.getElementById("error-lname");
const emailError = document.getElementById("error-mail");
const queryError = document.getElementById("error-query");
const messageError = document.getElementById("error-msg");
const checkBoxError = document.getElementById("error-checkbox");

function onSubmit(e) {
  e.preventDefault();

  let isValid = true;
  let isChecked = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstNameInput.value.trim() === "") {
    firstNameError.textContent = "This field is required";
    firstNameInput.style.border = "1px solid hsl(0, 66%, 54%)";
    isValid = false;
  } else {
    firstNameError.textContent = "";
    firstNameInput.style.border = "";
  }

  if (lastNameInput.value.trim() === "") {
    lastNameError.textContent = "This field is required";
    lastNameInput.style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    lastNameError.textContent = "";
    lastNameInput.style.border = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "This field is required";
    emailInput.style.border = "1px solid hsl(0, 66%, 54%)";
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.style.border = "1px solid hsl(0, 66%, 54%)";
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.style.border = "";
  }

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    queryError.textContent = "Please select a query type";
    isValid = false;
  } else {
    queryError.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "This field is required";
    messageInput.style.border = "1px solid hsl(0, 66%, 54%)";
    isValid = false;
  } else {
    messageError.textContent = "";
    messageInput.style.border = "";
  }

  if (!checkboxInput.checked) {
    checkBoxError.textContent =
      "To submit this form, please consent to being contacted";
    isValid = false;
  } else {
    checkBoxError.textContent = "";
  }
  if (isValid) {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    checkboxInput.checked = false;

    radioButtons.forEach((rb) => (rb.checked = false));

    radioDivP1.style.backgroundColor = "";
    radioDivP2.style.backgroundColor = "";

    successState.style.display = "block";

    setTimeout(() => {
      successState.style.display = "none";
    }, 5000);

    console.log("form submitted");
  }
}

radioButtons.forEach((rb) => {
  rb.addEventListener("change", () => {
    radioDivP1.style.backgroundColor = "";
    radioDivP2.style.backgroundColor = "";

    if (generalQueryInput.checked) {
      radioDivP1.style.backgroundColor = "hsl(148, 38%, 91%)";
    }
    if (supportQueryInput.checked) {
      radioDivP2.style.backgroundColor = "hsl(148, 38%, 91%)";
    }
  });
});

form.addEventListener("submit", onSubmit);
