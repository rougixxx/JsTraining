/////////////////////////////////////////////
const btnRoll = document.querySelector(".btn--roll");

const score1El = document.querySelector("#current--0");
const score2El = document.querySelector('#current--1');
const imgDice = document.querySelector(".dice");

const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");

let currentScore = 0;



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



