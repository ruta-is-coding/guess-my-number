'use strict';
//Defining the variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/*In the addEventListener method the first argument is an event name
The second argument is a function value */
document.querySelector('.check').addEventListener('click', function () {
  //We get a string from an input field (not a number), so we need to convert it to a number
  const guess = Number(document.querySelector('.guess').value);

  /*Checking whether there's a value in the input field
  When there's no input value*/
  if (!guess) {
    document.querySelector('.message').textContent = '😐 No number';

    //When the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🤩 Correct guess';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😐 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😪 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😐 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😪 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//When we click again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(94, 94, 94)';
  document.querySelector('.number').style.width = '15rem';
});
