"use strict";

// The "if" statement evaluates a condition and, if the result is true, executes block of code
let model = "Lada";
if (model == "Lada") console.log("This is my old car!"); /* Code will be executed */
if (model == "Ford") console.log("This is my new car!"); /* Code will not be executed */
if (model == "Lada") {
    console.log("I bought the car in 2015!");
    console.log("The cas was purchased in the store"); 
} /* Use square brackets to execute more than one statement */

// Boolean conversion: O, Empty String, null, undefined and NaN will be false
if (0) {
    console.log("O");
} /* Will be false. Code will not be execuited */

if (-1) {
    console.log("-1");
} /* Will be true. Code will be execuited */

if ("") {
    console.log("Empty String");
} /* Will be false. Code will not be execuited */

if (" ") {
    console.log("Space");
} /* Will be true. Code will be execuited */

if (null) {
    console.log("null");
} /* Will be false. Code will not be execuited */

if ("0") {
    console.log("String with 0");
} /* Will be true. Code will be execuited */

if (undefined) {
    console.log("undefined");
} /* Will be false. Code will not be execuited */

if (Infinity) {
    console.log("Infinity");
} /* Will be true. Code will be execuited */

if (NaN) {
    console.log("NaN");
} /* Will be false. Code will not be execuited */

// The “else” clause. The if statement may contain an optional “else” block. It executes when the condition is falsy.
let yearOfBirthday1 = 1988;
if (yearOfBirthday1 == 1989) {
    console.log("This is my birthday year");
} else {
    console.log("This is not my birthday year");
}

// It is allowed to use several "if" conditions
let yearOfBirthday2 = 1987;
if (yearOfBirthday2 > 1988) {
    console.log("This is too late date");
} else if (yearOfBirthday2 < 1988) {
    console.log("This is too early date");
} else {
    console.log("This is my birthday year");
}

// "else" block is not required
let yearOfBirthday3 = 1989;
if (yearOfBirthday3 > 1988) {
    console.log("This is too late date");
} else if (yearOfBirthday3 < 1988) {
    console.log("This is too early date");
} else if (yearOfBirthday3 == 1988) {
    console.log("This is my birthday year");
}

// It is allowed to use several "else if" conditions and "else" condition
let yearOfBirthday4 = "I don't know";
if (yearOfBirthday4 > 1988) {
    console.log("This is too late date");
} else if (yearOfBirthday4 < 1988) {
    console.log("This is too early date");
} else if (yearOfBirthday4 == 1988) {
    console.log("This is my birthday year");
} else {
    console.log("The birthday year is unknown");
}

// Conditional operator ‘?’
let yearOfBirthday5 = 2004;
let adultTrue5 = (yearOfBirthday5 < 2003) ? "You are adult": "You are not adult";
console.log(adultTrue5); /* Will return "You are not adult" */

// Multiple ‘?’
let yearOfBirthday6 = 2003;
let adultTrue6 = (yearOfBirthday6 < 2003) ? "You are adult": 
(yearOfBirthday6 == 2003) ? "We are not sure":
(yearOfBirthday6 > 2003) ? "You are not adult":
"We do not understand your age";
console.log(adultTrue6); /* Will return "We are not sure" */

// '?' can replace 'if' but this notation is less readable. Do not use this notation!
let yearOfBirthday7 = 1988;
(yearOfBirthday7 == 1988)?
console.log(`${yearOfBirthday7} is my birthday year`): console.log(`${yearOfBirthday7} is not my birthday year`);
