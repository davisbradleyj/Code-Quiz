# Code-Quiz

Strategy:

Initial design

quiz
counter top right (h4 sized?)
10 question quiz
high score determined by time remaining - store to to DOM, per Friday 3/21 lesson
create button to start game
create button to refresh high score
cards for each question block

Layout
Button to begin quiz
> On click, begin quiz
> Hide button

Card 1 - Question 1:
Who was the 42nd President of the United States:
Barack Obama
Bill Clinton  X
George H. W. Bush
George W. Bush

Card 2 - Question 2:
When was D-Day?
4 June 1944
5 June 1944
6 June 1944  X
7 June 1944

Card 3 - Question 3:
If you fly due east from South Africa, what is the next country you would fly over?
Madagascar
Indonesia
New Zealand
Australia  X

Card 4 - Question 4:
In England, what are "pants" known as?
Trousers
Underwear  X
Jumper
Socks

Card 5 - Question 5:
Who is the current President of the United States Senate?
Mitch McConnell
Mike Pence  X
Chuck Schumer
Nancy Pelosi

Card 6 - Question 6:
Where did Covid-19 originate (supposedly)?
Wuhan  X 
Beijin
Guangzhou
Chengdu

Card 7 - Question 7:
What is the Atomic Number of Carbon?
5
6  X
7
8

Card 8 - Question 8:
How many Super Bowls have the San Francisco 49ers won?
3
4
5  X
6

Card 9 - Question 9:
What is the capital of Illinois?
Chicago
Peoria
Springfield  X
Bloomington


Question right +10
Question wrong -5

if wrong {
    function wrong()
        secondsLeft -= 10
} else {
    console.log{secondLeft}
}

To Do
Onclick listener - answers
account for last question
ask question (function) 
- to pass to next question
- logic to determine valid answer
- decreasing time for incorrect
- 