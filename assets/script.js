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
var highScoreSection=document.getElementById("#highScore");

var initialsInput = document.querySelector("#initials");
var userinitialsSpan = document.querySelector("#user-initials");


    quiz = [
    {
        question : "Inside which HTML element do we put the JavaScript?",
        answerBtn1 : "<js>",
        answerBtn2 : "<javascript>",
        answerBtn3 : "<script>",
        answerBtn4 : "<scripting",
        correctAnswer : "<script>",
    },{
        question : "Where is the correct place to insert a JavaScript?",
        answerBtn1 : "The <head> section",
        answerBtn2 : "The <body> section",
        answerBtn3 : "Both <head> and <body>",
        answerBtn4 : "None of the above",
        correctAnswer : "The <body> section",
    },{
        question : "How does a FOR loop start?",
        answerBtn1 : "for (i <= 5; i++)",
        answerBtn2 : "for (i = 0; i <= 5; i++)",
        answerBtn3 : "for (i = 0; i <= 5)",
        answerBtn4 : "for i = 1 to 5",
        correctAnswer : "for (i = 0; i <= 5; i++)",
    }
    ];

    function renderQuestion(qArray) {
        for (var i = 0; i < qArray.length; i++){
            question.innerHTML=quiz[0].question;
            question.innerHTML=quiz[1].question;
            question.innerHTML=quiz[2].question;
        }
    }



// Local storage function
function renderLastRegistered() {
    var initials = localStorage.getItem("initials");
    if (initials === null) {
      return;
    } userinitialsSpan.textContent = initials;

  } renderLastRegistered();

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    localStorage.setItem("initials", initials);
      renderLastRegistered();
// Clear storage not working ****************************
      localStorage.clear("initials", initials);
  });


  // Timer Countdown
  var timeleft = 60;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);

// Need to combine timeleft with score in order to decrease time per wrong answer
  
    
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
    highScorehighScoreSection.className="hide";
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