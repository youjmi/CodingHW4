var startbutton = document.getElementById("startbutton");
var nexttbutton = document.getElementById("nextPage")
var highscoreView = document.getElementById("highscoreView");
var addInitials = document.getElementById("addInitials")
var timer = document.getElementById("timer");
var questionContainer = document.getElementById("question-container")
var questionS = document.getElementById("question");
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD")
var startPage = document.getElementById("Start")
var btnContainer = document.getElementById("question-btn")
var Button = document.querySelectorAll(".btn")
var hSbutton = document.getElementById("hSbutton")



//Questions pulled from W3 and tutorialspoint.com//
var questionDisplay = [
    {
        question: "Which HTML element do we put for JavaScript?",
        answers: {
            a: '<scripting>',
            b: '<javascript>',
            c: '<script>',
            d: '<js>',
        },
        correctAnswer: '<script>'
    },
    {
        question: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        answers: {
            a: 'concat()',
            b: 'match()',
            c: 'replace()',
            d: 'search()',
        },
        correctAnswer: 'search()' //change
    },
    {
        question: " Which of the following function of Array objects sorts the element of an array?",
        answers: {
            a: 'sort()',
            b: 'toSource()',
            c: 'toString()',
            d: 'unshift()',
        },
        correctAnswer: 'sort()' //change
    },
    {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        answers: {
            a: 'Global Variable',
            b: 'Local Variable',
            c: 'Both of the Above',
            d: 'None of the above',
        },
        correctAnswer: 'Local Variable'

    },
];


var timecount = 60
var finalQuestionIndex = questionDisplay.length
var score = 0
var questionCounter = 0
var availableQuestions = []
var settimerInterval
var currentQuestionindex = 0
//const totalPoints = 100
//const totalQuestions = 4

startbutton.addEventListener("click", beginQuiz)
choiceA.addEventListener("click", chooseAnswer)
choiceB.addEventListener("click", chooseAnswer)
choiceC.addEventListener("click", chooseAnswer) 
choiceD.addEventListener("click", chooseAnswer)
nexttbutton.addEventListener("click",() => {
    currentQuestionindex++
    generateQuestions()
})

function beginQuiz() {
    beginTimer()
    startbutton.style.display = "none"
    startPage.style.display = "none"
    questionContainer.style.display = "block"
    currentQuestionindex = 0
    generateQuestions();
}

function beginTimer() {
    settimerInterval = setInterval(function () {
        timecount--;
        timer.textContent = "Time Left:" + timecount;
        if (timecount === 0) {
            clearInterval(settimerInterval)
            alert("Time is up!")
        }
    }, 1000);
}

function generateQuestions() {
    showQuestion(questionDisplay[currentQuestionindex])
    if (currentQuestionindex === finalQuestionIndex){
        finalScore()
    }
}

function showQuestion(question) {
    console.log(question)
    questionS.innerText = question.question
    choiceA.innerText = question.answers.a
    choiceB.innerText = question.answers.b
    choiceC.innerText = question.answers.c
    choiceD.innerText = question.answers.d

}


function chooseAnswer(e) {
    var currentquestion = questionDisplay[currentQuestionindex]
    var selectChoice = e.target.textContent
    if (selectChoice === currentquestion.correctAnswer) {
        timecount += 10
        score++
    }
    else
    {
        timecount -= 10
        score--
    }
    nexttbutton.style.display="block"
    finalScore()
}

function finalScore(){}
    



