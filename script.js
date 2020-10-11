var startBtn = document.getElementById('start-btn');
var submitBtn = document.getElementById('submit-btn');
var questionContainer = document.getElementById('question-container');
var questionEl =document.getElementById('question');
var answerBtnEl = document.getElementById('answer-buttons');
var count = 60;
var score = 0;
let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz)
submitBtn.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})
function startQuiz (){
console.log('Started')
startBtn.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainer.classList.remove('hide')
setNextQuestion()

}
function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
questionEl.innerText = question.question
question.answer.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtnEl.appendChild(button)
})
}
function resetState () {
    submitBtn.classList.add('Hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}
function selectAnswer(e){
var selectedBtn = e.target
var correct = selectedBtn.dataset.correct
if (shuffledQuestions.length > currentQuestionIndex + 1)
submitBtn.classList.remove('hide')
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }



var questions= 
    [{
        question: "What is the purpose of a for loop?",
        answer: [
             {text: "To descibe what something is for", correct: false},
             {text: "To create a loop", correct: false},
             {text: "To efficiently write a loop that needs to run mulitple times", correct: true},
             {text: "To control the flow of JavaScript", correct: false}]
    },
    {
        question: "What is the definition of an array?",
            answer: [
            {text: "A single variable that is used to store different elements", correct: true},
            {text: "A list of objects that you can recall later", correct: false},
            {text: "A powerful tool to defeat the enemies of JavaScript", correct: false},
            {text: "A collection of elements used in multiple ways throughout your code", correct: false}]
    },
{
    question: "What does HTML stand for?",
        answer: [
            {text: "Hyperlink Text Makeup Language", correct: false},
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hot Tamales Make Lunch",correct: false},
            {text: "How To Make Lasers", correct: false}]
},
{
    question: "What is an if/else statement in JavaScript?",
        answer: [
            {text: "A statement that checks to see if something is true or false", correct: false},
            {text: "A statement that is unsure of what input it needs", correct: false},
            {text: "A statement that has no defined properties until given them", correct: false},
            {text: "A statement used to perform different actions based on different conditions", correct: true}
        ]
        },
];