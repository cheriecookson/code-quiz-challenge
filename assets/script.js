var startBtn=document.getElementById("startBtn");
var startSection=document.getElementById("start");
var answerBtn=document.getElementById("answerBtn");
var quizSection=document.getElementById("quiz");
var submitBtn=document.getElementById("submitBtn");
var finiSection=document.getElementById("fini");
var goBackBtn=document.getElementById("goBackBtn");
var highScoreSection=document.getElementById("highScore");


function startButtonHandler () {
    startSection.className="hide";
    quizSection.classList.remove("hide");
}

function answerButtonHandler () {
    quizSection.className="hide";
    finiSection.classList.remove("hide");
}

function submitButtonHandler () {
    finiSection.className="hide";
    highScoreSection.classList.remove("hide");
}

function goBackButtonHandler () {
    highScoreSection.className="hide";
    startSection.classList.remove("hide");
}




startBtn.addEventListener("click", startButtonHandler);
answerBtn.addEventListener("click", answerButtonHandler);
submitBtn.addEventListener("click", submitButtonHandler);
goBackBtn.addEventListener("click", goBackButtonHandler);