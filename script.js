var timeEl = document.querySelector(".time");
var beginEl = document.querySelector("#begin");
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
  setTime();
});
