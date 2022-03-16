/////////////////////////////////////////////
/* CLEAN CODE 
'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);












*/
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const score1El = document.querySelector("#current--0");
const score2El = document.querySelector("#current--1");

const globalScore1El = document.querySelector("#score--0");
const globalScor2El = document.querySelector("#score--1");

console.log(globalScore1El, globalScor2El);

const imgDice = document.querySelector(".dice");

const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");

let currentScore = 0;

globalScore1El.textContent = 0;
globalScor2El.textContent = 0;
imgDice.setAttribute("src", "");

btnRoll.addEventListener("click", function () {
  let diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1); // Math.random * (max - min +1)
  let diceString = `dice-${diceNumber}.png`; //"dice-"+String(diceNumber)+".png"
  imgDice.setAttribute("src", diceString); // Change the image

  if (diceNumber == 1) {
    currentScore = 0;
    if (player1El.classList.contains("player--active")) {
      score1El.textContent = currentScore;
    } else {
      score2El.textContent = currentScore;
    }
    player1El.classList.toggle("player--active");
    player2El.classList.toggle("player--active");
  } else {
    currentScore += diceNumber;
    console.log(player1El.classList);
    if (player1El.classList.contains("player--active")) {
      score1El.textContent = currentScore;
    } else {
      score2El.textContent = currentScore;
    }
  }
});

let globalScore1 = 0;
let globalScore2 = 0;

btnHold.addEventListener("click", function () {
  if (player1El.classList.contains("player--active")) {
    // 1. Global Score
    globalScore1 += currentScore;
    globalScore1El.textContent = globalScore1;
    // 2. Current Score
    currentScore = 0;
    score1El.textContent = currentScore;
    // 3. Switch Player
    player1El.classList.toggle("player--active");
    player2El.classList.toggle("player--active");
  } else {
    // 1. Global Score
    globalScore2 += currentScore;
    globalScor2El.textContent = globalScore2;
    // 2. Current Score
    currentScore = 0;
    score2El.textContent = currentScore;

    // 3. Switch Player
    player1El.classList.toggle("player--active");
    player2El.classList.toggle("player--active");
  }
});
