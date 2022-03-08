
const btnRoll = document.querySelector(".btn--roll");
const imgDice = document.querySelector(".dice");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const btnHold = document.querySelector('.btn--hold');

const globalScore0El = document.querySelector('#score--0');
const globalScore1El = document.querySelector("#score--1");






const imgSrc = imgDice.getAttribute("src");



let currentScore = 0;


btnRoll.addEventListener("click", function() {
    const diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  
    imgDice.setAttribute('src', `dice-${diceNumber}.png`);


    if (diceNumber == 1) {
        if (player0El.classList.contains('player--active')) {
            currentScore = 0;
            current0El.textContent = currentScore;
        } else {
            currentScore = 0;
            current1El.textContent = currentScore;
        }
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    } else {
        currentScore += diceNumber;
        if (player0El.classList.contains('player--active')) {
            current0El.textContent = currentScore
        } else {
            current1El.textContent = currentScore
        }
    }
})

let globalScore0 = 0;
let globalScore1 = 0;

btnHold.addEventListener('click', function() {
    if (player0El.classList.contains("player--active")) {
        globalScore0 += currentScore;
        globalScore0El.textContent = globalScore0;
        current0El.textContent = 0;
        
    } else {
        globalScore1 += currentScore;
        globalScore1El.textContent = globalScore1;
        current1El.textContent = 0;
    }
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    currentScore = 0;
})

//qsdfqsfsdf


































/////////////////////////////////////////////

/* const btnRoll = document.querySelector(".btn--roll");
const score1El = document.querySelector("#current--0");
const score2El = document.querySelector('#current--1');
const imgDice = document.querySelector(".dice");

const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");

console.log(player1El);
console.log(player1El.classList);
// console.log(player2El);
// console.log(typeof player1El.classList);

// console.log(player1El.classList.contains('player--active'));

let currentScore = 0;




// console.log([1, 2, 3, 4].includes(2)); 





btnRoll.addEventListener("click", function() {
    let diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1); // Math.random * (max - min +1) 

    let diceString = `dice-${diceNumber}.png`; //"dice-"+String(diceNumber)+".png"
    // console.log(diceString);
    imgDice.setAttribute("src", diceString);

    if (diceNumber == 1) {
        currentScore = 0;
        score1El.textContent = currentScore;
        // // player1El.classList
        // player1El.classList.remove("player--active");
        // player2El.classList.add("player--active")
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
}) */

