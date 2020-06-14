var startBtn=document.getElementById("startBtn");
var startSection=document.getElementById("start");
var answerBtn1=document.getElementById("answerBtn1");
var answerBtn2=document.getElementById("answerBtn2");
var answerBtn3=document.getElementById("answerBtn3");
var answerBtn4=document.getElementById("answerBtn4");
var quizSection=document.getElementById("quiz");
// var question=document.getElementById("question");
var submitBtn=document.getElementById("submitBtn");
var finalScoreSection=document.getElementById("finalScore");
var goBackBtn=document.getElementById("goBackBtn");
var clearBtn=document.getElementById("clearBtn");
var highScoreSection=document.getElementById("highScore");


// var questions = [
//     {
//         question : "Ask a good qestion for question one?",
//         multiChoiceA : "Answer 1",
//         multiChoiceB : "Answer 2",
//     },{
//         question : "Ask a really good qestion for question two?",
//         multiChoiceA : "Answer 1",
//         multiChoiceB : "Answer 2",
//     },{
//         question : "Ask a really really good qestion for question three?",
//         multiChoiceA : "Answer 1",
//         multiChoiceB : "Answer 2",
//     }
// ];




function startButtonHandler () {
    startSection.className="hide";
    quizSection.classList.remove("hide");
}

function answerButtonHandler () {
    quizSection.className="hide";
    finalScoreSection.classList.remove("hide");
    console.log(answerBtn2);
}

function submitButtonHandler () {
    finalScoreSection.className="hide";
    highScoreSection.classList.remove("hide");
}

function goBackButtonHandler () {
    highScoreSection.className="hide";
    startSection.classList.remove("hide");
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