"use strict";

var numberOfBalls = 150;
var ballsArray = [];
var body = document.getElementById("body");

function createBalls() {
  for (i = 0; i < numberOfBalls; i++) {
    ballsArray.push(generateBall(i));
  }

  ballsArray.forEach(function (ball) {
    ballContainer.appendChild(ball);
  });
}

newBall = createBalls();

function move(ball, x, y) {
  setTimeout(function () {
    calculateMovement(ball, x, y);
  });
}

function calculateMovement(ball, x, y, vel) {
  var rotationX = numberOfBalls * x / 6;
  var rotationY = numberOfBalls * y / 6;
  var velocity = vel + numberOfBalls / 2;
  setInterval(function () {
    i = i + 1;
    midX = body.clientWidth / 4;
    midY = body.clientHeight;
    ball.style.top = -Math.tan(i / rotationY + velocity) * velocity + midX + "px";
    ball.style.left = Math.sin(i / rotationX + velocity) * velocity + midY + "px"; // Changes hue at certain speed
    // Hue and lightness based on velocity (ember effect)

    ball.style.backgroundColor = "hsl(".concat(vel / 6.5 - 20, ", 100%, ").concat(vel / 7 + 18, "%)");
  }, 15);
}

function generateBall(i) {
  var newBall = document.createElement("div");
  color = getRandomColor();
  newBall.classList.add("ball", "index".concat(i));
  newBall.style.backgroundColor = color;
  /*   newBall.style.boxShadow = `0px 0px 10px orange`; */

  return newBall;
}

function getRandomColor() {
  return "hsl(".concat(Math.floor(Math.random() * 150) + 200, ", 60%, 45%)");
}

function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 300;
}

function getRandomVelocity() {
  return Math.floor(Math.random() * 350) + 10;
}

ballsArray.forEach(function (ball) {
  calculateMovement(ball, getRandomNumber(), getRandomNumber(), getRandomVelocity());
});