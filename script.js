var timeEl = document.querySelector(".time");


var secondsLeft = 99;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remain.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Game Over - Your score is " + secondsLeft)
    }

  }, 1000);
}
setTime()