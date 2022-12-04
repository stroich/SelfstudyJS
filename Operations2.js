"use strict";

// Priority of operations without square brackets
let x1 = 2 + 3 * -4;
console.log(x1);

// Priority of operations without square brackets
let x2 = (2 + 3) * -4;
console.log(x2);

// Assignment = return a value
let x3 = 5;
let y3 = 2;
let z3 = 10 + (x3 = x3 - y3);
console.log(x3); /* 3 */
console.log(z3); /* 13 */

// Chaining assignments
let x4;
let y4;
let z4;
x4 = y4 = z4 = 5 - 1; /* Order of operations <- <- <- <- */
console.log(x4);
console.log(y4);
console.log(z4);

// Modify-in-place
let x5 = 5;
x5 +=3; /* x5 = 5 + 3; */
console.log(x5);
x5 *=2; /* x5 = 8 * 2; */
console.log(x5);
x5 /=4; /* x5 = 16 / 4; */
console.log(x5);
x5 -=3; /* x5 = 4 - 3; */
console.log(x5);

// Increment/decrement - prefix form
let x6 = 3;
let y6 = ++x6;
console.log(y6); /* Return 4 */

let x7 = 3;
let y7 = --x7;
console.log(y7); /* Return 2 */

// Increment/decrement - postfix form
let x8 = 3;
let y8 = x8++;
console.log(y8); /* Return 3 */

let x9 = 3;
let y9 = x9--;
console.log(y9); /* Return 3 */

// Increment/decrement among other operators
let x10 = 3;
let y10 = 5 + ++x10;
console.log(y10); /* Return 9 */

let x11 = 3;
let y11 = 5 + x11++;
console.log(y11); /* Return 8 */

// Increment/decrement woks only with variables
/* let x12 = ++3;
console.log(x12); */

// Comma
let x12 = (1 + 3, 1 + 2); /* both operations will be execuited but only the last one will be returned */
console.log(x12);