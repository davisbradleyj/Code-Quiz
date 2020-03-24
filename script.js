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
   answer: ["George H.W. Bush", "Bill Clinton", "Barack Obama", "George W. Bush"],
   correct: "Bill Clinton",
  },
  {question: "When was D-Day?",
   answer: ["4 June 1944","5 June 1944","6 June 1944","7 June 1944"],
   correct: "6 June 1944",
  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },

]
var index = 0
// var highScore = localStorage.setItem("#highScore");
// var resethighEl = document.querySelector("#resethigh");
var secondsLeft = 99;

function setTime() {
  console.log("set time ran")
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
  console.log("I was clicked");
  setTime();
  game(index);
});

function game() {
  console.log("game function ran")
  questionEl.textContent = questions[index].question;
  answer0El.textContent = questions[index].answer[0];
  answer1El.textContent = questions[index].answer[1];
  answer2El.textContent = questions[index].answer[2];
  answer3El.textContent = questions[index].answer[3];
  checkAnswer();

  if (i < questions.length) {
    game(index++)
  } else {
    endGame()
  }

  
    if ((questions.correct) != "Bill Clinton") {
    secondsLeft -= -10
    } else {
    console.log(question.correct)
    }
}



function checkAnswer() {
  answersEl.addEventListener("click", function () {
    console.log("check answer clicked")
    var userSelection = event.target;
    if (userSelection != questions[index].correct) {
      secondsLeft -= -10
    } else {
      console.log("correct answer");
    }
  }); return 
} 


function endGame() {
}

