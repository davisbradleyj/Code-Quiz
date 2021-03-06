// set pointers, questions, answers, correct responses, and other global variables which can be accessed by all functions

var timeEl = document.querySelector("#time");
var highScoreEl = document.querySelector("#highscore")
var gameScore = document.querySelector("#gamescore");
var beginEl = document.querySelector("#begin");
var restartEl = document.querySelector("#restart");
var resethighEl = document.querySelector("#resethigh");
var qblockEl = document.querySelector("#qblock");
var questionEl = document.querySelector("#question");
var buttonEl = document.querySelectorAll(".button");
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
var index = 0;
var timerInterval;
var secondsLeft = 60;
var highScore = [];

// function to set the high score, if applicable/appropriate/anyone else takes this quiz, pulling from local storage
function initial() {
  document.getElementById("highscore").textContent = localStorage.getItem("highscore");
  var initScore = (document.getElementById("highscore").textContent);
  highScore = initScore.substr(2);
  console.log(highScore)
  };


initial()

// prompts the timer, with some console logging to trigger any failure, and console my imposter syndrome
function setTime() {
  console.log("set time ran")
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remain.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("Game Over")
      endGame();
    }
  }, 1000);
};

//this button gets everything going, initializing the timer function and game function
beginEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("begin").style.visibility = 'hidden';
  document.getElementById("qblock").style.visibility = 'visible';
  console.log("I was clicked");
  setTime();
  game(event);
});

// want to play a (guessing) game?
function game() {
  console.log("game function ran" + index)
  questionEl.textContent = questions[index].question;
  answer0El.textContent = questions[index].answer[0];
  answer1El.textContent = questions[index].answer[1];
  answer2El.textContent = questions[index].answer[2];
  answer3El.textContent = questions[index].answer[3];
};

// event listener to determine the answer selected for each question in the question game
buttonEl.forEach(function (answerButton) {
  answerButton.addEventListener("click", function(event) {
    console.log("check answer clicked")
    var element = event.target;
    if (element.textContent !== questions[index].correct) {
      console.log("wrong")
      secondsLeft -= 10
    } else {
      console.log("correct answer");
    }
    if (index < questions.length - 1) {
      index++
      game()
    } else {
      clearInterval(timerInterval)
      endGame()
    }
  });
});

// hide some things, show some things - I mean, "you" would like to get a score for all your effort after all.  Also triggers the high score save function
function endGame() {
  document.getElementById("gamescore").textContent = "Score: " + secondsLeft;
  document.getElementById("qblock").style.visibility = 'hidden';
  document.getElementById("restart").style.visibility = 'visible';
  document.getElementById("resethigh").style.visibility = 'visible';
  document.getElementById("gamescore").style.visibility = 'visible';
  document.getElementById("time").style.visibility = 'hidden';
  console.log(secondsLeft)
  storeHigh()
};

// restarts game by refreshing page
restartEl.addEventListener("click", function (event) {
  location.reload(event)
});

// resets high score, leaving html default of "BD : 45"
resethighEl.addEventListener("click", function (event) {
  localStorage.clear(event);
});

// stores the new/high score
function storeHigh() {
if ((highScore == 0) || (highScore == null)) {
  var initials = prompt("What are your initials?");
  highScore = initials + " " + secondsLeft;
  localStorage.setItem("highscore", highScore);
} else { 
  if (secondsLeft > highScore) {
    initials = prompt("What are your initials?");
    highScore = initials + " " + secondsLeft;
    localStorage.setItem("highscore", highScore)
  } else {
    console.log("not a new high score")
    alert("Sorry, gotta do a little better next time!") 
  };
 };
};

