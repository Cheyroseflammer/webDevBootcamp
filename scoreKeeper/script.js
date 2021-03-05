// Defining UI Varss

const p1ButtonEL = document.querySelector('#p1Button');
const p2ButtonEL = document.querySelector('#p2Button');
const p1DisplayEL = document.querySelector('#p1Display');
const p2DisplayEL = document.querySelector('#p2Display');
const resetEL = document.querySelector('#reset');
const playToEL = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

// Updating Player One Score

p1ButtonEL.addEventListener('click', function () {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true;
      p1DisplayEL.classList.add('has-text-success');
      p2DisplayEL.classList.add('has-text-danger');
      p1ButtonEL.disabled = true;
      p2ButtonEL.disabled = true;
    }
    p1DisplayEL.textContent = p1Score;
  }
});

// Updating Player Two Score

p2ButtonEL.addEventListener('click', function () {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true;
      p1DisplayEL.classList.add('has-text-danger');
      p2DisplayEL.classList.add('has-text-success');
      p1ButtonEL.disabled = true;
      p2ButtonEL.disabled = true;
    }
    p2DisplayEL.textContent = p2Score;
  }
});

playToEL.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

// Reseting the scores

resetEL.addEventListener('click', reset);

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1DisplayEL.textContent = '0';
  p2DisplayEL.textContent = '0';
  p1DisplayEL.classList.remove('has-text-danger', 'has-text-success');
  p2DisplayEL.classList.remove('has-text-success', 'has-text-danger');
  p1ButtonEL.disabled = false;
  p2ButtonEL.disabled = false;
}
