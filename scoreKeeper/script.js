// Defining vars
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};
const resetEL = document.querySelector('#reset');
const playToEL = document.querySelector('#playTo');
let winningScore = 5;
let gameOver = false;

// Update Score Function
function updateScores(player, opponenet) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add('has-text-success');
      opponenet.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponenet.display.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

// Event Listeners
p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

playToEL.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

// Reseting the scores
resetEL.addEventListener('click', reset);
function reset() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
