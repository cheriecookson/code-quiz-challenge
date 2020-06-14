var startBtn=document.getElementById("startBtn");
var startSection=document.getElementById("start");
var answerBtn1=document.getElementById("answerBtn1");
var answerBtn2=document.getElementById("answerBtn2");
var answerBtn3=document.getElementById("answerBtn3");
var answerBtn4=document.getElementById("answerBtn4");
var quizSection=document.getElementById("quiz");
var question=document.getElementById("question");
var confirm=document.getElementById("confirm");
var submitBtn=document.getElementById("submitBtn");
var finalScoreSection=document.getElementById("finalScore");
var goBackBtn=document.getElementById("goBackBtn");
var clearBtn=document.getElementById("clearBtn");
var highScoreSection=document.getElementById("highScore");

var emailInput = document.querySelector("#email");
var userEmailSpan = document.querySelector("#user-email");


    quiz = [
    {
        question : "Ask a good qestion for question one?",
        answerBtn1 : "Answer 1",
        answerBtn2 : "Answer 2",
        answerBtn3 : "Answer 3",
        answerBtn3 : "Answer 4",
    },{
        question : "Ask a really good qestion for question two?",
        answerBtn1 : "Answer 1",
        answerBtn2 : "Answer 2",
        answerBtn3 : "Answer 3",
        answerBtn3 : "Answer 4",
    },{
        question : "Ask a really really good qestion for question three?",
        answerBtn1 : "Answer 1",
        answerBtn2 : "Answer 2",
        answerBtn3 : "Answer 3",
        answerBtn3 : "Answer 4",
    }
    ];


// ********** Trying to figure this part out ***********
    //   // We start the game with a score of 0.
    //   var score = 0;

    //   // Loop over every question object
    //   for (var i = 0; i < quiz.length; i++) {
    //     // Display current question to user and ask OK/Cancel
    //     var answer = confirm(quiz[i].question);

    //     // Compare answers
    //     if (
    //       (answer === true && quiz[i].a === 't') ||
    //       (answer === false && quiz[i].a === 'f')
    //     ) {
    //       // Increase score
    //       score++;
    //       alert('Correct!');
    //     } else {
    //       alert('Wrong!');
    //     }
    //   }
// *******************************************************************

// Local storage function
function renderLastRegistered() {
    var email = localStorage.getItem("email");
    if (email === null) {
      return;
    } userEmailSpan.textContent = email;

  } renderLastRegistered();

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    localStorage.setItem("email", email);
      renderLastRegistered();
// Clear storage not working ****************************
      localStorage.clear("email", email);
  });



function startButtonHandler () {
    startSection.className="hide";
    quizSection.classList.remove("hide");
}

function answerButtonHandler () {
    quizSection.className="hide";
    finalScoreSection.classList.remove("hide");
}

function submitButtonHandler () {
    finalScoreSection.className="hide";
    highScoreSection.classList.remove("hide");
}

function goBackButtonHandler () {
    finalScoreSection.classList.remove("hide");
    highScoreSection.className="hide";
}

function clearButtonHandler () {
    highScoreSection.className="hide";
    startSection.classList.remove("hide");
    
}



startBtn.addEventListener("click", startButtonHandler);
answerBtn1.addEventListener("click", answerButtonHandler);
answerBtn2.addEventListener("click", answerButtonHandler);
answerBtn3.addEventListener("click", answerButtonHandler);
answerBtn4.addEventListener("click", answerButtonHandler);
submitBtn.addEventListener("click", submitButtonHandler);
goBackBtn.addEventListener("click", goBackButtonHandler);
clearBtn.addEventListener("click", clearButtonHandler);