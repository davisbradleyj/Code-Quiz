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
Barack Hussein Obama
William Jefferson Clinton  X
George Herbert Walker Bush
George Walker Bush

Card 2 - Question 2:
What is the airspeed velocity of an unlaiden swallow?
What?  What do you mean?
African or European?
The sound of two coconuts being clicked together
11 meters per second  X

Card 3 - Question 3:
When was D-Day?
4 June 1944
5 June 1944
6 June 1944  X
7 June 1944

Card 4 - Question 4:
If you fly due east from South Africa, what is the next country you would fly over?
Madagascar
Indonesia
New Zealand
Australia  X

Card 5 - Question 5:
In England, what are "pants" known as?
Trousers
Underwear  X
Jumper
Socks

Card 6 - Question 6:
Who is the current President of the United States Senate?
Mitch McConnell
Mike Pence  X
Chuck Schumer
Nancy Pelosi

Card 7 - Question 7:
Where did Covid-19 originate (supposedly)?
Wuhan  X 
Beijin
Guangzhou
Chengdu

Card 8 - Question 8:
What is the Atomic Number of Carbon?
5
6  X
7
8

Card 9 - Question 9:
How many Super Bowls have the San Francisco 49ers won?
3
4
5  X
6

Card 10 - Question 10:
What is the capital of Illinois?
Chicago
Peoria
Springfield
Bloomington


Question right +10
Question wrong -5

if wrong {
    function wrong()
        secondsLeft -= 10
} else {
    console.log{secondLeft}
}