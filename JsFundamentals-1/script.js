// JS Fundamentals

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Hello World");

// Name conventions & Data Types
const myName = "Yacine";
const myAge = 20;
const isDone = true;
console.log(myName, myAge, isDone);
console.log(typeof myName);
//
let birthYear; // Default Value
console.log(typeof myYear);
birthYear = "Birth Year Is 2022";
console.log(typeof myAge);

// Dynamic Typing
birthYear = 2022;
console.log(typeof birthYear);

// Let, const and Var

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Math Operators
let x = 20;
let y = 10;
x * y;
x / y;
x % y;
let z = x * y;
z = z + 1;
z += 1;
z++;
++z;

z = 2;
z = z * 2;
z *= 2;
console.log(z ** 5);

// Precedence Remark + Mdn Dock
// Comparison Operators
let ageYacine = 20;
let ageAymen = 18;
ageAymen = "20";

ageYacine === ageAymen; // Strict Comparaison
ageYacine == ageAymen; // With conversion
ageYacine != ageAymen;
ageYacine !== ageAymen; // Strict Comparaison

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Strings and Template Literals
const firstName = "Yacine";
const job = "teacher";
birthYear = 2001;
const year = 2022;

const jonasPresentation = `My name is${firstName}, i'm ${
  year - birthYear
} year old and my job is ${job}!`;

// Multiple Line String
console.log("A Normal String");
console.log("String with \n line 1 \n line 2 ");

////////////////////////////////////

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);

// Type Coercion - JS Automaticly convert
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" / "2");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Truthy and Falsy Values

// 5 Falsy values: 0, '', undefined, null, NaN => Returns False When converted to Boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

// Real Use
const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const age = 22;

// If else statment

if (age >= 18) console.log("Il est Majeur");
else console.log("Il est Mineur");

// The Conditional (Ternary) Operator

age >= 18 ? console.log("Il est majeur") : console.log("Il est mineur");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. In one ligne of code calcul the tip and print it to the console. (The tip is ....)
TEST DATA: Test for bill values 275, 40 and 430
*/

const bill = 275;

50 < bill < 300
  ? console.log(`The tip ${bill * 0.15}`)
  : console.log(`The tip is ${bill * 0.2}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Strict Mode : Prevent Devs to intruduces bugs into their code ; generate erros
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log("Can Drive");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow functions
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challange + Correction

/*
  We have two gymanse team, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
  Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
  A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
  4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
  5. Ignore draws this time.
  TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
  TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
  HINT: To calculate average of 3 values, add them all together and divide by 3
  HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
  GOOD LUCK 😀
  */

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

