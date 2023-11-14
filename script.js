'use strict';
//Generate a secret number
const displaySecretNumber = value =>
  (document.querySelector('.number').textContent = value);
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

//Defining the variables
let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;
let input = document.querySelector('.guess');

//Other functions
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
const changeStyle = (color, width) => {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

//When we click check button
document.querySelector('.check').addEventListener('click', function () {
  //Converting the input value to a number
  const guess = Number(input.value);

  //When there's no input value
  if (!guess) {
    displayMessage('😐 No number');

    //When the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🤩 Correct guess');
    displaySecretNumber(secretNumber);
    changeStyle('#60b347', '30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😐 Too high' : '😐 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('😪 You lost the game');
      displayScore('0');
    }
  }
});

//When we click again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  displaySecretNumber('?');
  displayScore(score);
  changeStyle('rgb(94, 94, 94)', '15rem');
  input.value = '';
});
