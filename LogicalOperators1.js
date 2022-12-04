"use strict";

console.log(true || true); /* Return true */
console.log(true || false); /* Return true */
console.log(false || true); /* Return true */
console.log(false || false); /* Return false */

// If an operand is not a boolean, it’s converted to a boolean for the evaluation.
if (1 || 0) {
    console.log("Will be true!");
} else {
    console.log("Will be false!");
}

// It is allowed to use "||" with comparasions 
let currentTime1 = 12;
if (currentTime1 < 8 || currentTime1 > 16) {
    console.log(`${currentTime1} o'clock is not working time`);
} else {
    console.log(`${currentTime1} o'clock is working time`);
}

// It is allowed to use multiple "||"
let currentTime2 = 12;
let isWeekend2 = true;
if (currentTime2 < 8 || currentTime2 > 16 || isWeekend2) {
    console.log(`Today ${currentTime2} o'clock is not working time`);
} else {
    console.log(`Today ${currentTime2} o'clock is working time`);
}

// OR returns the first truthy value if total value is true
console.log(23 || "1" || true); /* Will return 23 */
console.log(0 || "1" || true); /* Will return 1 */

// OR returns the last falsy value if total value is false
console.log(undefined || "" || NaN); /* Will return NaN */

// Short-circuit evaluation
let x1 = 1;
let y1 = 1;
x1 || (y1 = 2);
console.log(y1); /* Will return 1 because x1 is truthy value and assignment will not be executed */

let x2 = 0;
let y2 = 1;
x2 || (y2 = 2);
console.log(y2); /* Will return 2 because x2 is falsy value and assignment will be executed */

/* Statement with console.log in brackets will return 3 then 4 and then undefined because console.log just shows 
a message, so there’s no meaningful return. OR will show the last falsy value and both console.log statements 
will be run */
console.log(console.log(3) || console.log(4));
