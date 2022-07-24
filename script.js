"use strict";

const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let winningNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (Number(score.textContent) <= 1) {
    score.textContent = 0;
    message.textContent = `💥 You lost the game!`;
  } else {
    if (!guess) {
      message.textContent = `⛔ No number!`;
    } else if (guess === winningNumber) {
      if (Number(score.textContent) >= Number(highscore.textContent)) {
        highscore.textContent = Number(score.textContent);
      }
      message.textContent = "🎉 Correct Number!";
      number.textContent = winningNumber;
      body.style.backgroundColor = "#60b347";
      number.style.width = "30rem";
    } else if (guess > winningNumber) {
      message.textContent = "📈 Too high!";
      score.textContent--;
    } else if (guess < winningNumber) {
      message.textContent = "📉 Too low!";
      score.textContent--;
    }
  }
});

again.addEventListener("click", function () {
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  message.textContent = "Start guessing...";
  score.textContent = 20;
  number.textContent = "?";
  guess.value = "";
  winningNumber = Math.trunc(Math.random() * 20) + 1;
});
