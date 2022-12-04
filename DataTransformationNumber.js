"use strict";

/* Transform different data types to number */
let firstNumber = Number("10 "); /* Strings will be transformed to appropriate number if contain only spaces by borders or/and digits */
console.log(firstNumber);
console.log(typeof(firstNumber));

let secondNumber = Number(null); /* null will be always 0 */
console.log(secondNumber);
console.log(typeof(secondNumber));

let thirdNumber = Number(true);  /* true will be always 1 */
console.log(thirdNumber);
console.log(typeof(thirdNumber));

let fourthNumber = Number(false); /* false will be always 0 */
console.log(fourthNumber);
console.log(typeof(fourthNumber));

let fifthNumber = Number(" 40K "); /* Strings will be transformed to NaN if contain NOT  only spaces by borders or/and digits*/
console.log(fifthNumber);
console.log(typeof(fifthNumber));

let sixthNumber = Number(undefined);  /* underfined will be always NaN */
console.log(sixthNumber);
console.log(typeof(sixthNumber));