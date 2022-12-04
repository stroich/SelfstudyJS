"use strict";

// Boolean is the result
let x1 = 3 > 2;
console.log(x1); /* return true */
console.log(typeof(x1)); /* return boolean */

let x2 = 2 < 3;
console.log(x2); /* return true */
console.log(typeof(x2)); /* return boolean */

let x3 = 3 == 3;
console.log(x3); /* return true */
console.log(typeof(x3)); /* return boolean */

let x4 = 3 != 2;
console.log(x4); /* return true */
console.log(typeof(x4)); /* return boolean */

let x5 = 2 > 3;
console.log(x5); /* return false */
console.log(typeof(x5)); /* return boolean */

let x6 = 3 < 2;
console.log(x6); /* return false */
console.log(typeof(x6)); /* return boolean */

let x7 = 3 == 2;
console.log(x7); /* return false */
console.log(typeof(x7)); /* return boolean */

let x8= 3 != 3;
console.log(x8); /* return false */
console.log(typeof(x8)); /* return boolean */

// String comparison
/* The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater. */

let x9 = "Legion" < "Legioner";
console.log(x9); /* return true */

let x10 = "Legion" > "Legioner";
console.log(x10); /* return false */

let x11 = "Legion" != "legion";
console.log(x11); /* return true because l has priority highier than L */

let x12 = "A" > "BC";
console.log(x12); /* return false because B has priority highier than A */

let x13 = "2" > "13";
console.log(x13); /* return true because 2 has priority highier than 1 */