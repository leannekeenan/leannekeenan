// JavaScript to toggle the navigation menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navList = document.getElementById("navList");

// Toggle the "show" class on the navbar list when the hamburger icon is clicked
hamburgerMenu.addEventListener("click", function() {
    navList.classList.toggle("show");
});



document.querySelector('form').addEventListener('submit', function(e) {
    const inputs = document.querySelectorAll('input[type="number"]');
    let valid = true;

    inputs.forEach(input => {
        if (input.value < 0) {
            alert(`Please enter a valid quantity for ${input.previousElementSibling.innerText}`);
            valid = false;
        }
    });

    if (!valid) {
        e.preventDefault(); // Prevent form submission if invalid
    }
});
