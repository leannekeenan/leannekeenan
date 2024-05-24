const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const confirmationEmail = localStorage.getItem('email');
const userEmail = document.getElementById('user-email')

function handleSubmit(e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    

    if(validateEmail(emailValue)) {
        console.log('success')
        console.log({email: email.value.trim()})

        // Store the email in localStorage
        localStorage.setItem('userEmail', emailValue);
       
        email.value = '';
        emailError.innerHTML = '';
        email.style.backgroundColor = '';

        // Redirect to a new page
        window.location.href = 'success.html';
        userEmail.innerHTML = confirmationEmail;
        console.log(userEmail)
    }
    
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

// Retrieve the email from localStorage and display it
if (confirmationEmail) {
    document.getElementById('user-email').textContent = confirmationEmail;
    console.log("Email stored in localStorage:", confirmationEmail); // Log stored email
}

form.addEventListener('submit', handleSubmit);



