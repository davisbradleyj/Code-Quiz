# Code-Quiz


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - present to add styling elements
- JavaScript - used to create the logic controlling the application
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary

This one definitely kicked my read-end. I hit a wall with the getting the questions to render over my id tags, and really need to give a hat tip to Stephon Autrey for his time in helping me see some other options I had not conisdered, and to Kerwin Hy for providing some guidance in reworking some of the code to follow better JS logic which had been blocking the elements from working correctly.

Setting the majority of the pointers, global elements, and some of the more basic level functions and features did not pose as large an issue.  Getting and storing the high score was a bit more challenging, and took a bit of testing to determine how to best go about setting, storing, and calling the high scores.  In time, I may even try to add a high scorers list, but for now, the king of the mountain will have to reign supreme... until someone comes along and dusts them at the endGame #thanos.

My code snippet show some of the code which connects hidden/visible elements, and the logic through which the questions, answers, and correct responses were populated/assessed through the DOM.  The majority of my code is probably still littered with console.log events for points where I was testing the function to ensure success.  I suppose I could clean them out, but I have a feeling I will maybe want to do a review once everything is complete for the course to see how far I have come


## Code Snippet
```html


    <div class="center">
      <h3><span><button id="begin">Begin Quiz</button></span></h3>
      <p style="visibility: hidden" id="gamescore"> : Game Score</p>
    </div>
    <main id="qblock" style="visibility: hidden;">
      <p id="question"></p>
      <div id="answers">
        <button class="button" id="button0"><span id="answer0"></span></button>
        <button class="button" id="button1"><span id="answer1"></span></button>
        <button class="button" id="button2"><span id="answer2"></span></button>
        <button class="button" id="button3"><span id="answer3"></span></button>
      </div>
    </main>

```

```js

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

```

## Acknowledgements

Jerome Chenette, Kerwin Hy, Mahisha Manikandan, Corbin Brockbank, Alex Kwaitkowski, Stephon Autery, Kasey Chang, Dan Fellows

## Author Links

Brad Davis
[Email](davis.bradleyj@gmail.com)
[LinkedIn](https://www.linkedin.com/in/brad-davis-7885884/)
[GitHub](https://github.com/davisbradleyj)
