const btnRoll = document.querySelector(".btn--roll");
const imgDice = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");


console.log(player0El);
console.log(player1El);

let currentScore = 0;

console.log(btnRoll);
console.log(current0El);
console.log(imgDice);

const imgSrc = imgDice.getAttribute("src");



console.log(imgSrc);


btnRoll.addEventListener("click", function() {
    const diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    // console.log(diceNumber);
    imgDice.setAttribute('src', `dice-${diceNumber}.png`);
    // imgSrc = imgDice.setAttribute("src", `dice-${diceNumber}.png`)

    currentScore = Number(current0El.textContent) + diceNumber ;

    if (diceNumber == 1) {
        current0El.textContent = 0;
        if (player0El.classList.contains("player--active")) {
            player0El.classList.remove("player--active");
            player1El.classList.add("player--active");
        } 
    }

    console.log(currentScore);

    current0El.textContent = currentScore;
    
    


    // console.log(diceNumber);
})