//DOM Toggle Buttons
let toggle1 = document.querySelector('.toggle-1');
let toggle2 = document.querySelector('.toggle-2');
let toggle3 = document.querySelector('.toggle-3');
let toggle4 = document.querySelector('.toggle-4');

//DOM Answer Paragraphs
let answer1 = document.querySelector('.answer-1');
let answer2 = document.querySelector('.answer-2');
let answer3 = document.querySelector('.answer-3');
let answer4 = document.querySelector('.answer-4');




//Create a function that toggles on and off the CSS property 'answer'
function toggleOpenAnswer(hidden) {
    hidden.classList.toggle('hidden');  
}

//Add the 'toggleOpenAnswer' function to each toggle button in the DOM


toggle1.addEventListener('click', function() {
    toggleOpenAnswer(answer1)
});
toggle2.addEventListener('click', function() {
    toggleOpenAnswer(answer2)
});
toggle3.addEventListener('click', function() {
    toggleOpenAnswer(answer3)
});
toggle4.addEventListener('click', function() {
    toggleOpenAnswer(answer4)
});






