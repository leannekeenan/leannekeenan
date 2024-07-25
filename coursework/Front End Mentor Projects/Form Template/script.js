/*
When a form is submitted, the onsubmit event is fired, and the browser is reloaded. This is because the browser attempts to send the form data to a server. Unfortunately, a page reload effectively clears the form, re-initializes our JavaScript, and clears the console logs.

If we want to manage the form with JavaScript, we first need to prevent the default behavior of the onsubmit event, use:
*/

const form = document.getElementById('form');
const password = document.getElementById('password');
const minlength = 8;

function handleSubmit(e) {
  e.preventDefault() // prevent the default behaviour

  /*
  Before determining if the data in a form is valid, we first need to retrieve the data from the form. The goal here is to end up with a JavaScript object that represents the form, with the object's keys being the names of the fields and the values being the values of the form inputs.
  
  This might look something like:
  */

  const data = {};
  const fields = e.target.querySelectorAll("input, select, textarea");

  for (const field of fields) {
    data[field.name] = field.value;
  }

  console.log(data);
}

function validatePassword(password, minlength) {
    if (!password) return 'Password is required';
  
    if (password.length < minlength) {
      return `Please enter a password that's at least ${minlength} characters long`;
    }
  
    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
      return 'Please use at least one capital letter.';
    }
  
    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
      return 'Please use at least one number.';
    }
  
    return '';
}

function validateEmail(email) {
    if (!email) return 'Email is required';
      
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
  
    return '';
}

function handleSignupFormSubmit(e) {
    // prevent default browser behaviour
    e.preventDefault();
  
    const formDataEntries = new FormData(signupForm).entries();
    const { email, password } = Object.fromEntries(formDataEntries);
  
    const emailErrorMessage = validateEmail(email);
    const passowrdErrorMessage = validatePassword(password);
  
    if (!emailErrorMessage) {
          // select the email form field message element
      const emailErrorMessageElement = document.querySelector('.email .dkh-form-field__messages');
      // show email error message to user
      emailErrorMessageElement.innerText = emailErrorMessage;
    }
  
    if (passowrdErrorMessage) {
          // select the email form field message element
      const passwordErrorMessageElement = document.querySelector('.password .dkh-form-field__messages');
      // show password error message to user
      passwordErrorMessageElement.innerText = passowrdErrorMessage;
    }
  }

form.addEventListener('submit', handleSubmit);