console.log("\n\t\t\t\t\tWELCOME TO MY FIRST CLI APP\n\n\"Do you know me ??\" Quiz ? \n\nThere needs to be two participants to play this quiz. The participant with the highest score will be the winner....!");
console.log("")
var readlineSync = require("readline-sync");

var name = readlineSync.question("\n➡ Enter your name ? ");


var score = 0;

// processing
function quizGame(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right! Answer is correct.....");
    score = score + 1;
  } else {
    console.log("WRONG! Answer is not correct.....");
  }
  console.log("Your score is " + score);
  console.log("-----------------------------")
}

// Questions
var questionOne = {
  question: "\n➊ Where do you live ? ",
  answer: "pune"
}

var questionTwo = {
  question: "➋ Which is your fav song ? ",
  answer: "friends"
}

var questionThree = {
  question: "➌ What your college name ? ",
  answer: "mitaoe"
}

var questionFour = {
  question: "➍ Which is my fav food ? ",
  answer: "nonveg"
}

var questionFive = {
  question: "➎ Which course i am currently doing ? ",
  answer: "electronic"
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// Function call
for (var i = 0; i < questionList.length; i++) {
  quizGame(questionList[i].question, questionList[i].answer)
}


console.log("Congrats!! " + name + " you score "+ score + " in this quiz contest....");
