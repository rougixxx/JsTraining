"use strict";


const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");


// ROLL DICE
let diceImg = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const currentScore0El = document.getElementById('current--0');

let currentScore0 = 0;
let currentScore1 = 0;

let activePlayer = 0;


btnRoll.addEventListener("click", function (e) {
    let diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    e.preventDefault();
    
    currentScore0 += diceNumber;
    currentScore0El.textContent = currentScore0;
    diceImg.setAttribute("src", `dice-${diceNumber}.png`);


    // Switch Player
    if (diceNumber == 1) {
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    };
});     


// HOLD BTN
const btnHold = document.querySelector(".btn--hold");
const score0El = document.getElementById("score--0");

let score0 = 0;
score0El.textContent = "0";


btnHold.addEventListener('click', function(e) {
    e.preventDefault();
    score0 += Number(currentScore0El.textContent);
    score0El.textContent = score0;
    currentScore0 = currentScore0El.textContent = 0;
})

