"use strict";

/* Transform different data types to String */
let firstString = String(150.9); 
console.log(firstString);
console.log(typeof(firstString));

let secondString = String(NaN); 
console.log(secondString);
console.log(typeof(secondString));

let thirdString = String(true);  
console.log(thirdString);
console.log(typeof(thirdString));

let fourthString = String(false); 
console.log(fourthString);
console.log(typeof(fourthString));

let fifthString = String(undefined); 
console.log(fifthString);
console.log(typeof(fifthString));