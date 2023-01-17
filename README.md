# Scrimba Learn React - Final Project - Quiz App

## What do I need to do?

I need to create an app that fetches 5 random trivia questions from Open Trivia DB using their API, and then allow the user to pick an answer and then check whether they were right or wrong.

I've also decided I'll have a go at some 'extra credit', as the example app only allows for 5 questions and no other options. I would like to see if I can make it so that the user can change the category, difficulty and number of questions.

## How will I do that?

First of all, I will need to create the 'welcome' screen, where the user can read a brief description of the app, select their options and then start the quiz. The options can be done via dropdown menus, then the quiz can be started with the click of a button.

Looking at the Open Trivia DB API, it looks like the different options I mentioned above can be changed by changing some parts of the API URL. This means that I should be able to construct a custom URL with the options the user has selected

For example, the standard URL for 10 questions with all options as 'any' is: https://opentdb.com/api.php?amount=10
For 5 questions and the "General Knowledge" category, it is: https://opentdb.com/api.php?amount=5&category=9
For 15 questions, the Sports category and Medium difficulty, it is: https://opentdb.com/api.php?amount=15&category=21&difficulty=medium

I am sure I can create and fetch a custom URL depending on these options as an extra challenge to myself.

To display the questions, I should be able to figure out a way to create a 'Question' component that I can map over to create multiple elements depending on the number of questions, which display correctly depending on if they are true/false or multiple choice questions. The buttons can use optional CSS to display selected or not, etc.

If the 'check answers' button is clicked, I could add button wiggle animation or error popup if they have not selected an answer for every question.

Once all are selected and 'check answers' is clicked, I can update the class of the correct answers so that they appear green. If the user selected an incorrect answer, it can appear red. I will need to think about exactly how I will do this.

Then I need to tally up and display how many they got correct, comparing their selected answers to the correct answers. This and the above CSS issues will likely be solved using objects that contain 'isSelected' boolean values.