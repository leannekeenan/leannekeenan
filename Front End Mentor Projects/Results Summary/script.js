let resultValue = document.querySelector('.result-value');//gets result value from result container
let resultAdj = document.querySelector('.result-adjective');//gets h2 feom result-details
let explaination = document.querySelector('.result-explanation');//gets p from result-details


let reactionScore = document.querySelector('.score.reaction .score-total .score');
let memoryScore = document.querySelector('.score.memory .score-total .score');
let verbalScore = document.querySelector('.score.verbal .score-total .score');
let visualScore = document.querySelector('.score.visual .score-total .score');


memoryScore.textContent = 80;
reactionScore.textContent = 92;
verbalScore.textContent = 61;
visualScore.textContent = 72;

let reactionScoreValue = Number(reactionScore.textContent);
let memoryScoreValue = Number(memoryScore.textContent);
let verbalScoreValue = Number(verbalScore.textContent);
let visualScoreValue = Number(visualScore.textContent);


// Add the values together
let totalScore = Math.floor((memoryScoreValue + reactionScoreValue + verbalScoreValue + visualScoreValue) / 4);

// Now you can use the total score as needed
console.log(totalScore); // Output the total score

resultValue.textContent = totalScore

if(totalScore <= 50) {
    resultAdj.textContent = "FAIL";
    explaination.textContent = "You've scored as high as 50% of the people who've taken these tests"
}

else if(totalScore <= 70) {
    resultAdj.textContent = "POOR";
    explaination.textContent = "You've scored higher than 55% of the people who've taken these tests"
}

else if(totalScore <= 80) {
    resultAdj.textContent = "GOOD";
    explaination.textContent = "You've scored higher than 65% of the people who've taken these tests"
}

else if (totalScore >= 80) {
    resultAdj.textContent = "GREAT";
    explaination.textContent = "You've scored higher than 65% of the people who've taken these tests"
}

