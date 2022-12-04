// Nullish coalescing operator '??'
"use strict";

let x1;
let y1 = 1;
console.log(x1 ?? y1); /* Will return y1 because x1 is undefined */

let x2 = null;
let y2 = 2;
console.log(x2 ?? y2); /* Will return y2 because x2 is null */

let x3 = Infinity;
let y3 = 3;
console.log(x3 ?? y3); /* Will return x3 because x3 is not null or undefined */

let x4 = 545;
let y4 = 4;
console.log(x4 ?? y4); /* Will return x4 because x4 is not null or undefined */

let x5 = "QA";
let y5 = 5;
console.log(x5 ?? y5); /* Will return x5 because x5 is not null or undefined */

let x6 = false;
let y6 = 6;
console.log(x6 ?? y6); /* Will return x6 because x6 is not null or undefined */

/* The nullish coalescing operator ?? is evaluated before = and ?, 
To choose a value with ?? in an expression with other operators, consider adding parentheses */ 
let x7;
let y7;
let z7 = (x7 ?? 5) + (y7 ?? 10);
console.log(z7); /* Will return 15 */

let x8;
let y8;
let z8 = x8 ?? 5 + y8 ?? 10;
console.log(z8); /* Will return NaN */

// Using ?? with && or || 
// console.log(1 && 2 ?? 3); Will return an error because it is not allowed to use ?? with && or || */
console.log(1 && (2 ?? 3)); /* Will return 2 */