"use strict";
// Numbers
// Ways to write a number
// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count
console.log("number after e");
let x1 = 1100000; 
let x2 = 11e5; /* 11e5 = 1100000 */
console.log(x2);
console.log(x1===x2); /* Will return true */
console.log("____________________________");

// A negative number after "e" means a division by 1 with the given number of zeroes
console.log("negative number after e");
let x3 = 0.000023
let x4 = 23e-6; /* 23e-6 = 0.000023 */
console.log(x4);
console.log(x3 === x4); /* Will return true */
console.log("____________________________");

// We can use underscore _ as the separator
console.log("underscore");
let x5 = 100_000;
console.log(x5); /* Will return 100000 */
console.log("____________________________");

// toString(base) - The method num.toString(base) returns a string representation of num in the numeral system with the given base. The base can vary from 2 to 36. By default it’s 10.
console.log("toString()");
let x6 = 15.123;
console.log(x6.toString());
console.log(12..toString());  /* If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it. */
console.log((13).toString()); /* We can use single dot if we put a number to brackets */
// Common use cases for base area:
// - base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
// - base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// - base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36
console.log((10).toString(36)); /* Will return a */
console.log("____________________________");

// isFinite and isNaN. 
// isNaN(value) converts its argument to a number and then tests it for being NaN. 
// isFinite(value) converts its argument to a number and returns true if it’s a regular number.
console.log("isFinite() and isNaN()");
console.log(isNaN("")); /* Will return false because empty string will convert 0 */
console.log(isNaN(NaN)); /* Will return true */
console.log(isFinite("")); /* Will return true because empty string will convert 0 */
console.log(isFinite(NaN)); /* Will return false */
console.log(isFinite(12)); /* Will return true */
console.log(isFinite(Infinity)); /* Will return false */
console.log(NaN === NaN); /* he value NaN is unique in that it does not equal anything, including itself */
console.log("____________________________");

// toFixed() - The toFixed() method formats a number using fixed-point notation. The method will return a string.
console.log("toFixed()");
let a1 = 0.1 + 0.2;
console.log(a1); /* Will return 0.30000000000000004 */
console.log(a1.toFixed(2)); /* Will return 0.30 */
let a2 = +0.3.toFixed(2) + +0.2.toFixed(2); /* toFixed always returns a string. It ensures that it has 2 digits after the decimal point. We can use the unary plus to converce it into a number. */
console.log(a2); /* Will return 0.5 */
console.log("____________________________");

// parseInt and parseFloat. They “read” a number from a string until they can’t. In case of an error, the gathered number is returned.
// parseInt(str, radix) - The function returns an integer; radix (Optional) it specifies the base of the numeral system.
// parseFloat(str, radix) - The function will return a floating-point number; radix (Optional) it specifies the base of the numeral system.
console.log("parseInt() and parseFloat()");
console.log(parseInt("12.5px1")); /* Will return 12 */
console.log(parseInt("a12.5px1")); /* Will return NaN, the first symbol stops the process */ 
console.log(parseFloat("12.5px1")); /* Will return 12.5 */
console.log(parseFloat("a12.5px1")); /* Will return NaN, the first symbol stops the process */ 
console.log("____________________________");

// Rounding
// Math.floor() - Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil() - Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round() - Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
// Math.trunc() - Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1. (not supported by Internet Explorer)
console.log("Rounding");
console.log(Math.floor(3.8)); /* Will return 3 */
console.log(Math.ceil(3.1));  /* Will return 4 */
console.log(Math.round(3.5)); /* Will return 4 */
console.log(Math.round(3.4)); /* Will return 3 */
console.log(Math.trunc(3.7)); /* Will return 3 */
console.log("____________________________");

// Other math functions
// Math.random() - Returns a random number from 0 to 1 (not including 1).
console.log("random()");
console.log(Math.random());  /* Will return a random number */
console.log(Math.random()); /* Will return a random number */
console.log("____________________________");

// Math.max(a, b, c...) / Math.min(a, b, c...) - Returns the greatest/smallest from the arbitrary number of arguments.
console.log("Math.max() / Math.min()");
console.log(Math.max(12, 1, 33, 10)); /* Will return 33 */
console.log(Math.min(12, 1, 33, 10)); /* Will return 1 */
console.log("____________________________");

// Math.pow(n, power) - Returns n raised to the given power.
console.log("Math.pow()");
console.log(Math.pow(2, 3));  /* Will return 8; */
console.log("____________________________");