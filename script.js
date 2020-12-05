var startbutton = document.getElementById("startbutton");
var highscoreView = document.getElementById("highscoreView");
var addInitials = document.getElementById("addInitials")
var timer = document.getElementById("timer");
var questionS = document.getElementById("question");
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var nextPage = document.getElementById("nextPage")
var startPage = document.getElementById("Start")


var timecount = 60
var score = 0
var questionCounter = 0
var availableQuestions = []
var settimerInterval


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
        correctAnswer: 'c'
    },
    {
        question: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        answers: {
            a: 'concat()',
            b: 'match()',
            c: 'replace()',
            d: 'search()',
        },
        correctAnswer: 'd'
    },
    {
        question: " Which of the following function of Array objects sorts the element of an array?",
        answers: {
            a: 'sort()',
            b: 'toSource()',
            c: 'toString()',
            d: 'unshift()',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        answers: {
            a: 'Global Variable',
            b: 'Local Variable',
            c: 'Both of the Above',
            d: 'None of the above',
        },
        correctAnswer: 'b'

    },
];

//const totalPoints = 100
//const totalQuestions = 4


function beginTimer() {
    startbutton.style.display = "none"
    startPage.style.display = "none"

    settimerInterval = setInterval(function () {
        timecount--;
        timer.textContent = "Time Left:" + timecount;


        if (timecount === 0) {
            clearInterval(settimerInterval)
            alert("Time is up!")
            finalScore();
        }
    }, 1000
    )
}

function beginQuestions() {
    beginTimer();

    if (answers === correctAnswer) {
        timecount++
    }
    else (answers != correctAnswer); {
        timecount--
    }
}


var finalquestionIndex = questionDisplay.length - 1;
var currentquestionIndex = 0;


function generateQuestion() {
    if (currentquestionIndex === finalquestionIndex) {
        return finalScore()
    }

    var currentQuestion = questionDisplay[currentquestionIndex];
    questionS.innerHTML = "<p>" + currentQuestion.question + "</p>";
    choiceA.innerHTML = currentQuestion.a;
    choiceB.innerHTML = currentQuestion.b;
    choiceC.innerHTML = currentQuestion.c;
    choiceD.innerHTML = currentQuestion.d;
}


function finalScore() {
    questionDisplay.style.display = "none"
    clearInterval(settimerInterval)
}

startbutton.addEventListener("click", beginTimer)