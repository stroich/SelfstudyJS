"use strict";

const MY_NAME = "Anton";
let myAge = 33;
let myWeight = 80.33;
let qaStatus = true; 
let myIntroduction = `My name is ${MY_NAME}, my age is ${myAge}, my weight is ${myWeight}. Am I QA? My answer is ${qaStatus}.`;
console.log(myIntroduction);
console.log(typeof (myIntroduction)); /* Check data type */
let height; /* Set undefined variable */
console.log(typeof (height));
let size = null;
console.log(typeof(size));  // Return Object
let workingTime = 11234456789123456n;  /* Set BigInt variable */
console.log(typeof (workingTime));
let devideByZero = -10 / 0;
console.log(devideByZero); /* Return Infinity */
console.log(typeof (devideByZero));
let invalidMathOperations = MY_NAME / myAge;  /* Set a variable for invalid math operation */
console.log(invalidMathOperations);
console.log(typeof(invalidMathOperations));
let operationWithNaN = 10 + invalidMathOperations; /* Set a variable to perform operation with NaN */
console.log(operationWithNaN);
console.log(typeof(operationWithNaN));