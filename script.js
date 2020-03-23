var timeEl = document.querySelector(".time");
var beginEl = document.querySelector("#begin");
var restartEl = document.querySelector("#restart");
var resethighEl = document.querySelector("#resethigh");
var qblockEl = document.querySelector("#qblock");

var secondsLeft = 99;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remain.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Game Over")
    }
  }, 1000);
}

beginEl.addEventListener("click", function() {
  document.getElementById("begin").style.visibility='hidden';
  document.getElementById("qblock").style.visibility='visible';
  setTime();
});


