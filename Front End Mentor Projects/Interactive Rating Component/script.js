//gets the rating elements from HTML
let ratings = document.querySelectorAll('input[type="text"][name="rate"]');

//defines rating choice printed to thank.html
let choice = document.querySelector('.choice');

//a forEach loop is run to identify ratings as an individual element and...
ratings.forEach(rating => {
    //...each element will have a function applied when clicked
    rating.addEventListener('click', function () {
       
        // Clears CSS styling of background and text [hover effect]
        ratings.forEach(option => {
            option.style.backgroundColor = '';
            option.style.color = ''; 
        });

        // Applies new styling to the clicked rating
        this.style.backgroundColor = 'orange';
        this.style.color = 'white';

        // Sets the rating value to localStorage
        localStorage.setItem('ratingValue', rating.value);
    });
});

// Event listener for page load
window.addEventListener('DOMContentLoaded', function() {
    //the localStorage is retrevied and set as the value for the rating
    const ratingValue = localStorage.getItem('ratingValue');
    if (choice && ratingValue) {
        //The value is then used to fill the empty choice element on the thank.html page
        choice.textContent = ratingValue;
    }
});
