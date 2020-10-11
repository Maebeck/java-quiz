var question = document.querySelector('#question');
var choice = document.querSelector(".choice-text");
var score = 0;
var scoreText = document.querySelector("#score");
var currentQuestion = {};
var questionCounter = 0;
var availableQuestions = [];
var startbtn = document.querySelector(".btn1");
var count = 60;
var questions= 
    [{
        question: "What is the purpose of a for loop?",
        choices: [
             "To descibe what something is for",
             "To create a loop",
             "To efficiently write a loop that needs to run mulitple times",
             "To control the flow of JavaScript"],
            correctChoice: "3"
    },
    {
        question: "What is the definition of an array?",
            choices: [
            "A single variable that is used to store different elements",
            "A list of objects that you can recall later",
            "A powerful tool to defeat the enemies of JavaScript",
            "A collection of elements used in multiple ways throughout your code"],
            correctChoice: "1"
    },
{
    question: "What does HTML stand for?",
        choices: [
        "Hyperlink Text Makeup Language",
        "Hypertext Markup Language",
        "Hot Tamales Make Lunch",
        "How To Make Lasers"],
        correctChoice: "2"
},
{
    question: "What is an if/else statement in JavaScript?",
        choices: [
        "A statement that checks to see if something is true or false",
        "A statement that is unsure of what input it needs",
        "A statement that has no defined properties until given them",
         "A statement used to perform different actions based on different conditions"],
        correctChoice: "4"
        },
];
function displayQuestion (){
document.getElementById("question").innerHTML = question + 1;

}
function displayChoices (){


}











function updateTimer (){
    var currentTime = timeLeft - timeElapsed
    timeElapsed.textContent = currentTime;
}
function startCount(){
    timer = setInterval(function (){
        timeGauge.innterHTML = "Time: " + count--;
        if (count === -1) clearInterval(timer);
    }, 1000);
}
function setChoices (questionNum){
    questions[questionNum].choices.forEach(function (choice, i){
        var selectorNum = i + 1;
        var selection = document.querySelector('[data-number=' + '"' + 
        selectorNum + '"]').innterHTML = choice
        console.log(choice, selectorNum, selection)});

}

function saveScores() {
    var initialsEl = document.getElementById("initials");
    var newScore = {
        initials:initialsEl.value,
        highScore: score
    };
    console.log(newScore);
    highScore.push(newScore);
    console.log(highScore);
    localStorage.setItem("scores", JSON.stringify(highScore));
}
submitButton.addEventListener("click", saveScores);

document.addEventListener("DOMContentLoaded", function (event){
    startCount(60);
    setChoices(questionCounter);
})