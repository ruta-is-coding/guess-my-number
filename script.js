'use strict';
//Defining the variables
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

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
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

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
