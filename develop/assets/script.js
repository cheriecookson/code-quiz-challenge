var startBtn=document.getElementById("startBtn");
var startSection=document.getElementById("start");
var quizSection=document.getElementById("quiz");
var highScroeSection=document.getElementById("highScore");


function startButtonHandler () {
startSection.className="hide";
quizSection.classList.remove("hide");
}





startBtn.addEventListener("click", startButtonHandler);