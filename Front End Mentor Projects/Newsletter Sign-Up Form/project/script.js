const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error')

function handleSubmit(e) {
    e.preventDefault();

    const emailValue = email.value.trim();

    if(validateEmail(emailValue)) {
        console.log('success')
        console.log({email: email.value.trim()})

        email.value = '';
        emailError.innerHTML = '';
        email.style.backgroundColor = ''
    }

    // Redirect to a new page
    window.location.href = 'success.html'; // Replace 'success.html' with your desired page URL

}

function validateEmail(emailValue) {
    if (!emailValue) {
        email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)';
        emailError.textContent = 'Email is required';
        return false;
    }

    const isValidEmail = /^\S+@\S+\.\S+$/;

    if (!isValidEmail.test(emailValue)) {
        email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)';
        emailError.textContent = 'Please enter a valid email';
        return false;
    }

    // Clear any previous error styles if the email is valid
    email.style.backgroundColor = '';
    emailError.textContent = '';
    return true;

}

form.addEventListener('submit', handleSubmit);