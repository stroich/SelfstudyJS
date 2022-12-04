"use strict";

console.log(true && true); /* Return true */
console.log(true && false); /* Return false */
console.log(false && true); /* Return false */
console.log(false && false); /* Return false */

// If an operand is not a boolean, it’s converted to a boolean for the evaluation.
if (1 && 3) {
    console.log("Will be true!");
} else {
    console.log("Will be false!");
}

// It is allowed to use "&&" with comparasions 
let currentTime1 = 12;
if (currentTime1 > 8 && currentTime1 < 16) {
    console.log(`${currentTime1} o'clock is working time`);
} else {
    console.log(`${currentTime1} o'clock is not working time`);
}

// It is allowed to use multiple "&&"
let currentTime2 = 12;
let isNotWeekend2 = true;
if (currentTime2 > 8 && currentTime2 < 16 && isNotWeekend2) {
    console.log(`Today ${currentTime2} o'clock is not working time`);
} else {
    console.log(`Today ${currentTime2} o'clock is working time`);
}

// AND returns the last truthy value if total value is true
console.log(23 && "1" && 145); /* Will return 145 */

// AND returns the first falsy value if total value is false
console.log(23 && undefined && 145); /* Will return undefined */

// Short-circuit evaluation
let x1 = 1;
let y1 = 1;
x1 && (y1 = 2);
console.log(y1); /* Will return 2 because x1 is truthy value and assignment will be executed */

let x2 = 0;
let y2 = 1;
x2 && (y2 = 2);
console.log(y2); /* Will return 1 because x2 is falsy value and assignment will not be executed */

/* Statement with console.log in brackets will return 3 then undefined because console.log just shows 
a message, so there’s no meaningful return AND will show the first falsy value
and only the first console.log statement will be run */
console.log(console.log(3) && console.log(4));

// AND has highier priority than OR
console.log (1 && 2 || 4 || 5 && 6);
console.log ((1 && 2) || 4 || (5 && 6));
/* Both statements above are equal. 2 will be returned because 
AND statements will be run firstly 
then OR statement will be run and the first truthy value will be returned */
console.log (1 && 2 && 5 && 6 || 4 ); /* 6 will be returned in this example */