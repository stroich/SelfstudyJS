"use strict";

/* ! (NOT) The operator accepts a single argument and does the following:
- Converts the operand to boolean type: true/false.
- Returns the inverse value. */
console.log(!false); /* Will return true */
console.log(!true); /* Will return false */
console.log(!0); /* Will convert to boolean and return true */
console.log(!true); /* Will convert to boolean and return false */
console.log(!""); /* Will convert to boolean and return true */
console.log(!"0"); /* Will convert to boolean and return false */
console.log(!0); /* Will convert to boolean and return true */
console.log(!1); /* Will convert to boolean and return false */
console.log(!null); /* Will convert to boolean and return true */
console.log(!Infinity); /* Will convert to boolean and return false */
console.log(!NaN); /* Will convert to boolean and return true */
console.log(!undefined); /* Will convert to boolean and return true */

/* A double NOT !! is sometimes used for converting a value to boolean type:
- The first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again.
 */

console.log(!!0); /* Will convert to boolean and return false */
console.log(!!true); /* Will convert to boolean and return true */
console.log(!!""); /* Will convert to boolean and return false*/
console.log(!!"0"); /* Will convert to boolean and return true */
console.log(!!0); /* Will convert to boolean and return false */
console.log(!!1); /* Will convert to boolean and return true */
console.log(!!null); /* Will convert to boolean and return false */
console.log(!!Infinity); /* Will convert to boolean and return true */
console.log(!!NaN); /* Will convert to boolean and return false */
console.log(!!undefined); /* Will convert to boolean and return false */

// AND has highier priority than OR
console.log (1 && 2 || 4 || 5 && 6);
console.log ((1 && 2) || 4 || (5 && 6));
/* Both statements above are equal. 2 will be returned because 
AND statements will be run firstly 
then OR statement will be run and the first truthy value will be returned */
console.log (1 && 2 && 5 && 6 || 4 ); /* 6 will be returned in this example */

// NOT has highier priority then AND, OR
console.log(undefined || !0 || NaN); /* Will return true because 0 will be confrted to true 
and OR will return the first truthy value */
console.log(1 && !2 && 3); /* Will return false because 2 will be confrted to false 
and AND will return the first falsy value */