var timeEl = document.querySelector(".time");
var beginEl = document.querySelector("#begin");
var restartEl = document.querySelector("#restart");
var qblockEl = document.querySelector("#qblock");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var answer0El = document.querySelector("#answer0");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var questions = [
  {question: "Who was the 42nd President of the United States",
   answers: ["Barack Hussein Obama", "William Jefferson Clinton", "George Herbert Walker Bush", "George Walker Bush"],
   correct: "William Jefferson Clinton",
  }
]

// var highScore = localStorage.setItem("#highScore");
// var resethighEl = document.querySelector("#resethigh");
var secondsLeft = 99;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remain.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Game Over")
    }
  }, 1000);
}

beginEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("begin").style.visibility='hidden';
  document.getElementById("qblock").style.visibility='visible';
  setTime();
  game();
});

function game() {
  for (var i = 0; i < questions.length; i++) {
  questionEl.textContent = questions[i].question;
  answer0El.textContent = questions[i].answer[0];
  answer1El.textContent = questions[i].answer[1];
  answer2El.textContent = questions[i].answer[2];
  answer3El.textContent = questions[i].answer[3];
  } 
    if ((questions.correct) != "William Jefferson Clinton") {
    secondsLeft -= -10
    } else {
    console.log(question.correct)


}