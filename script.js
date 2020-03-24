var timeEl = document.querySelector(".time");
var beginEl = document.querySelector("#begin");
var restartEl = document.querySelector("#restart");
var resethighEl = document.querySelector("#resethigh");
var qblockEl = document.querySelector("#qblock");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var answer0El = document.querySelector("#answer0");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var questions = [
  {
    question: "Who was the 42nd President of the United States",
    answer: ["George H.W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama"],
    correct: "Bill Clinton",
  },
  {
    question: "When was D-Day?",
    answer: ["4 June 1944", "5 June 1944", "6 June 1944", "7 June 1944"],
    correct: "6 June 1944",
  },
  {
    question: "If you fly due east from South Africa, what is the next country you would fly over?",
    answer: ["Madagascar", "Indonesia", "New Zealand", "Australia"],
    correct: "Australia",
  },
  {
    question: "England calls these 'pants,' but in the USA they are know as...?",
    answer: ["Trousers", "Underwear", "Jumper", "Socks"],
    correct: "Underwear",
  },
  {
    question: "Who is the current President of the United States Senate?",
    answer: ["Mitch McConnell", "Mike Pence", "Chuck Schumer", "Nancy Pelosi"],
    correct: "Mike Pence",
  },
  {
    question: "Where did Covid-19 originate (supposedly)?",
    answer: ["Wuhan", "Beijing", "Guangzhou", "Chengdu"],
    correct: "Wuhan",
  },
  {
    question: "What is the Atomic Number of Carbon?",
    answer: ["5", "6", "7", "8"],
    correct: "6",
  },
  {
    question: "How many Super Bowls have the San Francisco 49ers won?",
    answer: ["3", "4", "5", "6"],
    correct: "5"
  },
  {
    question: "What is the capital of Illinois?",
    answer: ["Chicago", "Peoria", "Springfield", "Bloomington"],
    correct: "Springfield",
  }
]
var index = 0
// var highScore = localStorage.setItem("#highScore");

var secondsLeft = 99;

function setTime() {
  console.log("set time ran")
  var timerInterval = setInterval(function () {
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
  document.getElementById("begin").style.visibility = 'hidden';
  document.getElementById("qblock").style.visibility = 'visible';
  console.log("I was clicked");
  setTime();
  game(event);
  // endGame();
});

function game() {
  console.log("game function ran")
  questionEl.textContent = questions[index].question;
  answer0El.textContent = questions[index].answer[0];
  answer1El.textContent = questions[index].answer[1];
  answer2El.textContent = questions[index].answer[2];
  answer3El.textContent = questions[index].answer[3];
  checkAnswer();

  if (index < questions.length) {
    game(index++)
  } else {
    endGame()
  }
}

function checkAnswer() {
  answersEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("check answer clicked")
    // stuck - not able to connect the selected button to validate
    var element = event.target;
    if (element.matches(questions[index].correct) != true) {
        secondsLeft -= -10
      } else {
        console.log("correct answer");
      }
    }); return
  };



function endGame() {
  document.getElementById("qblock").style.visibility = 'hidden';
  document.getElementById("restart").style.visibility = 'visible';
  document.getElementById("resethigh").style.visibility = 'visible';

}
