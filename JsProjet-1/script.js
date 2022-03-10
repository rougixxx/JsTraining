/////////////////////////////////////////////
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector('.btn--hold');


const score1El = document.querySelector("#current--0");
const score2El = document.querySelector('#current--1');

const globalScore1El = document.querySelector('#score--0');
const globalScor2El = document.querySelector('#score--1');

console.log(globalScore1El, globalScor2El);


const imgDice = document.querySelector(".dice");

const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");

let currentScore = 0;

globalScore1El.textContent = 0;
globalScor2El.textContent = 0;
imgDice.setAttribute("src", "")


btnRoll.addEventListener("click", function() {
    let diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1); // Math.random * (max - min +1) 
    let diceString = `dice-${diceNumber}.png`; //"dice-"+String(diceNumber)+".png"
    imgDice.setAttribute("src", diceString); // Change the image

    if (diceNumber == 1) {
        currentScore = 0;
        if (player1El.classList.contains("player--active")) {
            score1El.textContent = currentScore ;
        
        } else {
            score2El.textContent = currentScore;
        }
        player1El.classList.toggle("player--active");
        player2El.classList.toggle("player--active");
    } else {
        currentScore +=  diceNumber;
        console.log(player1El.classList);
        if (player1El.classList.contains("player--active")) {
            score1El.textContent = currentScore ;
        
        } else {
            score2El.textContent = currentScore;
        }
    }
}) 

let globalScore1 = 0;
let globalScore2 = 0;

btnHold.addEventListener("click", function() {
    if (player1El.classList.contains("player--active")) {
        // 1. Global Score
        globalScore1 += currentScore;
        globalScore1El.textContent = globalScore1
        // 2. Current Score 
        currentScore = 0;
        score1El.textContent = currentScore;
        // 3. Switch Player
        player1El.classList.toggle("player--active");
        player2El.classList.toggle("player--active");
    } else {
        // 1. Global Score
        globalScore2 += currentScore;
        globalScor2El.textContent = globalScore2
        // 2. Current Score 
        currentScore = 0;
        score2El.textContent = currentScore

        // 3. Switch Player
        player1El.classList.toggle("player--active");
        player2El.classList.toggle("player--active");
    }
})


