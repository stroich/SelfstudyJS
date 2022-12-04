"use strict";

/* Transform different data types to boolean */
let firstBoolean = Boolean(0); /* 0 will be false */
console.log(firstBoolean);
console.log(typeof(firstBoolean));

let secondBoolean = Boolean(-10); /* any number excluding 0, null will be true */
console.log(secondBoolean);
console.log(typeof(secondBoolean));

let thirdBoolean = Boolean(NaN); /* NaN will be false */
console.log(thirdBoolean);
console.log(typeof(thirdBoolean));

let forthBoolean = Boolean(null); /* null will be false */
console.log(forthBoolean);
console.log(typeof(forthBoolean));

let fifthBoolean = Boolean(undefined); /* undefined will be false */
console.log(fifthBoolean);
console.log(typeof(fifthBoolean));

let sixthBoolean = Boolean(Infinity); /* Infinity will be true */
console.log(sixthBoolean);
console.log(typeof(sixthBoolean));

let seventhBoolean = Boolean(""); /* Empty string will be false */
console.log(seventhBoolean);
console.log(typeof(seventhBoolean));
const eighthBoolean = 1;
let eighthBoolean = Boolean("0"); /* Not Empty string will be true */
console.log(eighthBoolean);
console.log(typeof(eighthBoolean));

