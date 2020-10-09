function startQuiz(questions, quizContainer, options, confirm){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i < questions.length; i++){
            answers[];
            for(options in questions[i].answers){

                answers.push(
                    <label>
                        + <input type="radio" name="question' +i+'" value="'+options+'"></input>
                        + options + ":"
                        + questions[i].answers[options]
                        +</label>
                );

            }
        }
        output.push(
            <div class="question"> + questions[i].question +</div>
        );
    }
    quizContainer.innerHTML = output.join('');




    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer='';
        var numCorrect = 0;
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked'))||{}).value;
        }

    }

    showQuestions(questions, quizContainer);

    confirmButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);

    }
};

var quizQuestions = [
    {
        question: "What is...?",
        answers: {
            optionOne: "...",
            optionTwo: "...",
            optionThree: "...",
            optionFour: "...",
        },
        correctAnswer: '...'
    },
    {
        question: "What is...?",
        answers: {
            optionOne: "...",
            optionTwo: "...",
            optionThree: "...",
            optionFour: "...",
        },
        correctAnswer: '...'
    }
{
    question: "What is...?",
    answers: {
        optionOne: "...",
        optionTwo: "...",
        optionThree: "...",
        optionFour: "...",
    },
    correctAnswer: '...'
}
{
    question: "What is...?",
    answers: {
        optionOne: "...",
        optionTwo: "...",
        optionThree: "...",
        optionFour: "...",
    },
    correctAnswer: '...'
}
]