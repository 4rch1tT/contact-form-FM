const form = document.getElementById("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const generalQueryInput = document.getElementById("general-req");
const supportQueryInput = document.getElementById("support-req");
const messageInput = document.getElementById("message");
const checkboxInput = document.getElementById("checkbox");
const submitButton = document.getElementById("submit-btn");

const firstNameError = document.getElementById("error-fname")
const lastNameError = document.getElementById("error-lname")
const emailError = document.getElementById("error-mail")
const queryError = document.getElementById("error-query")
const messageError = document.getElementById("error-msg")
const checkBoxError = document.getElementById("error-checkbox")

function onSubmit(e) {
  e.preventDefault();

  let isValid = true;

  if(firstNameInput.value.trim()===""){
   firstNameError.textContent = "This field is required"
   isValid = false
  }else{
   firstNameError.textContent = ""
  }

  if(lastNameInput.value.trim()===""){
   lastNameError.textContent = "This field is required"
   lastNameInput.style.border = "1px solid hsl(0, 66%, 54%)"
  }else{
   lastNameError.textContent = ""
  }

  if(emailInput.value.trim()==="")
  console.log("form submitted");
}

form.addEventListener("submit", onSubmit);
