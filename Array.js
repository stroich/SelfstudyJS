"use strict";

// Declaration of empty Arrays
let arrFruits = new Array (); /* Create an empty array: 1st variant of syntax */
let arrCars = []; /* Create an empty array: 2nd variant of syntax */
arrCars[0] = "Ford"; /* Add element of array */
arrCars[1] = "Lada"; /* Add element of array */
arrCars[2] = "Opel"; /* Add element of array */
console.log(arrCars); /* Show the array */
arrCars[1] = "BMW"; /* Change the existed element of Array */
console.log(arrCars);

// Loops: Use for...of to work with Arrays. Do not use for...in because it has low performance
for (let car of arrCars) {
    console.log(car);
}

// Methods pop/push, shift/unshift
arrCars.push("Audi"); /* push - appends an element to the end */ 
console.log(arrCars);
console.log(arrCars.pop()); /* pop - Extracts the last element of the array and returns it */
console.log(arrCars);
console.log(arrCars.shift()); /* shift - Extracts the first element of the array and returns it */
console.log(arrCars);
arrCars.unshift("Mersedes"); /* unshift - Add the element to the beginning of the array */
console.log(arrCars); 
// Methods push and unshift can add multiple elements at once
arrCars.unshift("Lada", "Audi");
arrCars.push("Honda", "VW");
console.log(arrCars);
// Performance Methods push/pop run fast, while shift/unshift are slow.

// The length property
console.log(arrCars.length) /* Show the array length. It will return 7 */
arrCars.length = 6; /* If we set array length less than existed manualy, Some elements will be missed */
console.log(arrCars); /* The last element will be missed */
arrCars.length = 7; /* If we set array length more than existed manualy, Elements will not be missed or added*/
console.log(arrCars[6]); /* Will return undefined */

// Declaration of filled Arrays 
let arrMarks = new Array("A", "B", "C", "E", "F"); /* Create a filled array: 1st variant of syntax */
console.log(arrMarks);
let arrNames = [
    "Peter",
    "Anton",
    "Mark",
]; /* Create a filled array: 2nd variant of syntax. An array, just like an object, may end with a comma */
console.log(arrNames);
let arrTexts = new Array(2); /* If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length. */
console.log(arrTexts.length); /* Will return 2 */
console.log(arrTexts[0]); /* Will return undfined */
console.log(arrTexts[1]); /* Will return undfined */

//  Multidimensional arrays: Arrays can have items that are also arrays. 
let numbers = [
    [1,2],
    [3,4],
];
console.log(numbers[0][0]); /* Return 1 */
console.log(numbers[0][1]); /* Return 2 */
console.log(numbers[1][0]); /* Return 3 */
console.log(numbers[1][1]); /* Return 4 */

// Arrays comparasions
let arrCats = [
    "Barsik",
    "Murka",
    "Pushok",
] /* Create the first array */

let arrCats2 = [
    "Barsik",
    "Murka",
    "Pushok",
] /* Create the second array which equal to the first one*/

let arrCats3 = arrCats; /* Create the third array which has the same reference as the first one*/
console.log(arrCats == arrCats2); /* Will return false */
console.log(arrCats == arrCats3); /* Will return true because both arrays has the reference to the same object */
arrCats3.pop(); /* Update one of arrays that have the same reference */  
console.log(arrCats == arrCats3); /* Will return true because both arrays has the reference to the same object */
console.log(arrCats); /* The first array was updated because  */
console.log(arrCats3); /* The second array was updated because  */

// toString
console.log(arrCats);
let cats = String(arrCats); /* Will return one string with array elements divided by comma */
console.log(cats);

// Arrays has only toString conversion
console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"