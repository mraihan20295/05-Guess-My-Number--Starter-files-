'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
console.log(highScore);

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  if (score === 0) return;

  let guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter a Number!';
    return;
  }

  guess = Number(guess);

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Enter a Number between 1-20';
    return;
  }

  if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
  }
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    document.querySelector('.message').textContent = 'You Lost the Game!';
    // document.querySelector('.check').disabled = true;
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNumber);
});
