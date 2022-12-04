"use strict";

// Ex 1: Unrary operation 
let x1 = 1;
x1 =-x1;  /* x1 is an operand; - is an unrary operation */
console.log(x1); 

// Ex2: Binary operation; Subtraction -
let x2 = 7;
let y2 = 5;
let z2 = x2 - y2; /* x2 and y2 are operands; - is a binary operation */
console.log(z2);

// Ex3: Binary operation; Addition +
let x3 = 5.25;
let y3 = 1;
let z3 = x3 + y3;
console.log(z3);

// Ex4: Binary operation; Multiplication * 
let x4 = 3;
let y4 = 2;
let z4 = x4 * y4;
console.log(z4);

// Ex5: Binary operation; Division /
let x5 = 12;
let y5 = 4;
let z5 = x5 / y5;
console.log(z5);

// Ex6: Binary operation; Remainder %
let x6 = 8;
let y6 = 3;
let z6 = x6 % y6;
console.log(z6);

// Ex7: Binary operation; Exponentiation ** (raising a to the power of b)
let x7 = 2;
let y7 = 3;
let z7 = 2 ** 3;
console.log(z7);

// Ex8: Binary operation; Exponentiation ** (cubic root)
console.log(8**(1/3));

// Ex9: Binary operation; Addition of strings (Numbers will be converted to string)
let s = "Test #";
let x9 = 123;
let z = s + x9;
console.log(z);

// Ex10: Binary operation; Addition of strings (All numbers before the string will be considered as numbers)
console.log(1 + 3 + " is my id");

// Ex11: Binary operation; Addition of strings (All numbers after the string will be considered as strings)
console.log( "My id is " + 2 + 3);

// Ex12: Binary operation; Subtraction of strings (Strings will be converted to numbers)
console.log(8 - "3");

// Ex13: Unrary operation; Boolean will be converted to number by +
let x13 = false;
let y13 = +x13;
console.log(y13);
console.log(typeof(y13)); 

// Ex14: Unrary operation; String will be converted to number by +
let x14 = "12";
let y14 = +x14;
console.log(y14);
console.log(typeof(y14)); 

// Ex15: Unrary operation; no effect on numbers
let x15 = 125;
let y15 = +x15;
console.log(y15);
console.log(typeof(y15));  

// Ex16: Unrary operation; it is allowed to use several operations
let x16 = "4";
let y16 = "3";
let z16 = +x16 + +y16;
console.log(z16);
console.log(typeof(z16));