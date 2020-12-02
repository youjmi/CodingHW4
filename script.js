var startbutton = document.getElementById("startbutton");
var highscore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var questions = document.getElementById("question");
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startPage = document.getElementById("Start")

var timecount = 60
var settimerInterval

questions.style.display= "none"


//Questions pulled from W3 and tutorialspoint.com//
questions = [
    {
        question: "Which HTML element do we put for JavaScript?",
        answers: {
            a: '<scripting>',
            b: '<javascript>',
            c: '<js>',
            d: '<script>',
        },
            correctAnswer: 'd'
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
            a: 'toSource()',
            b: 'sort()',
            c: 'toString()',
            d: 'unshift()',
        },
        correctAnswer: 'b'
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



function beginQuiz() {
    startbutton.style.display = "none"
    startPage.style.display = "none"

    settimerInterval = setInterval(function(){
        timecount--;
        timer.textContent  = "Time Left:" + timecount;

        if (timecount === 0) {
            clearInterval
        }

    }, 1000
    )}

function beginQuestions() {
    
    
}

startbutton.addEventListener("click",beginQuiz)