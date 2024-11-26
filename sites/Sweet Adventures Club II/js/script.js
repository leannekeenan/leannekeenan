// JavaScript to toggle the navigation menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navList = document.getElementById("navList");

// Toggle the "show" class on the navbar list when the hamburger icon is clicked
hamburgerMenu.addEventListener("click", function() {
    navList.classList.toggle("show");
});

// Form validation for quantity inputs
document.querySelector('form').addEventListener('submit', function(e) {
    const inputs = document.querySelectorAll('input[type="number"]');
    let valid = true;

    // Clear previous error messages before validation
    inputs.forEach(input => {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    });

    // Validate each input
    inputs.forEach(input => {
        const quantity = parseInt(input.value) || 0;
        if (quantity < 0) {
            // Create an error message element
            const errorElement = document.createElement('span');
            errorElement.classList.add('error-message');
            errorElement.textContent = 'Please enter a valid quantity.';
            errorElement.style.color = 'red';

            // Insert the error message after the input field
            input.parentNode.insertBefore(errorElement, input.nextSibling);
            valid = false;
        }
    });

    // Prevent form submission if validation fails
    if (!valid) {
        e.preventDefault();
    }
});
