var startbutton = document.getElementById("startbutton");
var nexttbutton = document.getElementById("nextPage")
var highscoreView = document.getElementById("highscorebutton");
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
var Submit = document.getElementById("Submit")
var viewHighscore = document.getElementById("viewHighScore")
var answerResponse = document.getElementById("answerResponse")



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
        correctAnswer: 'search()' 
    },
    {
        question: " Which of the following function of Array objects sorts the element of an array?",
        answers: {
            a: 'sort()',
            b: 'toSource()',
            c: 'toString()',
            d: 'unshift()',
        },
        correctAnswer: 'sort()' 
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
    {
        question: "Which of the following jQuery method loads a remote page using an HTTP request?",
        answers: {
            a: 'jQuery.ajax(options)',
            b: 'jQuery.ajaxSetup(options',
            c: 'serialize()',
            d: 'serializeArray()',

        },
        correctAnswer:'jQuery.ajax(options)'
    },
    {
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answers: {
            a: 'push()',
            b: 'join()',
            c: 'pop()',
            d: 'map()',
        },
        correctAnswer: 'map()'
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        answers: {
            a: 'sup()',
            b: 'small()',
            c: 'strike()',
            d: 'sub()',
        },
        correctAnswer: 'sub()'
    },
];


var timecount = 60
var finalQuestionIndex = questionDisplay.length
var score = 0
var questionCounter = 0
var availableQuestions = []
var settimerInterval
var currentQuestionindex = 0

startbutton.addEventListener("click", beginQuiz)
choiceA.addEventListener("click", chooseAnswer,)
choiceB.addEventListener("click", chooseAnswer,)
choiceC.addEventListener("click", chooseAnswer,) 
choiceD.addEventListener("click", chooseAnswer,)
nexttbutton.addEventListener("click",() => {
    currentQuestionindex++
    generateQuestions()
})

function beginQuiz() {
    beginTimer()
    startbutton.style.display = "none"
    startPage.style.display = "none"
    questionContainer.style.display = "block"
    answerResponse.style.display = "block"
    viewHighscore.style.display ="block"   
    currentQuestionindex = 0
    generateQuestions();
}

function beginTimer() {
    settimerInterval = setInterval(function () {
        timecount--;
        timer.textContent = "Time Left:" + timecount;
        if (timecount === 0 || timecount <=0) {
            clearInterval(settimerInterval)
            alert("Time is up!")
            questionContainer.style.display = "none"
            Submit.style.display ="block"
            timer.style.display="none"
             
        }
        else if (currentQuestionindex === 7){
            clearInterval(settimerInterval)
            questionContainer.style.display = "none"
            Submit.style.display ="block"
            timer.style.display="none" 
            
        }
    }, 1000);
}

function generateQuestions() {
    showQuestion(questionDisplay[currentQuestionindex])
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
    nexttbutton.style.display="block"
    var currentquestion = questionDisplay[currentQuestionindex]
    var selectChoice = e.target.textContent
    if (selectChoice === currentquestion.correctAnswer) {
        timecount += 10
        score+=25
        answerResponse.innerText = "That is Correct! 10 seconds added."
    }
    else
    {
        timecount -= 10
        answerResponse.innerText = "That is Wrong! 10 seconds deducted"
       
        if (score > 0){
            score -=25
        }
    }
    finalScore()
}

Submit.addEventListener("click", finalScore())

function finalScore(){  
    viewHighscore.textContent = "Your Score is: " + score

    if (addInitials.value === "") {
    answerResponse.innerText = "Please do not leave blank. Put your initials!"

    }

}



    



