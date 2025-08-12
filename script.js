"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When There is No Input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  }
  // When Player Wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When Guess is Too High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔼 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  // When Guess is Too Low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔻 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Resetting/Trying the Game Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
