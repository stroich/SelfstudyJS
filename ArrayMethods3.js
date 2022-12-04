"use strict";

let arrLegions = [
    "Ultramarines",
    "Dark Angels",
    "Alpha Legion",
    "Iron Warriors",
    "Sons of Horus",
]; /* Create a filled in array  */


function showArrayLenght(array) { 
    console.log(`The array length is ${array.length}`);
}

function showArray(array) {
    console.log(`The array consists of the following elements:`);
    for (let element of array) {
        console.log(` ${element}`);
    }
    showArrayLenght(array);
}

function showObject(obj) {
    for (let param in obj){
        console.log(`  ${param} is ${obj[param]}`);
    }
}

function showArrayObjects(array) {
    console.log(`The array consists of the following elements:`);
    for (let element of array) {
        console.log("element");
        showObject(element);
    }
    showArrayLenght(array);
}

// Sort() method sorts the elements of an array. The syntax is sort(compareFn) compareFn is optional.
// If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings
// If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction).
console.log("sort");

let arrNumbers = [
    1,
    3,
    15,
    4,
];

let arrNumbers2 = [
    2,
    4,
    16,
    8,
];

let arrLegions2 = [
    {number: 13, name: "Ultramarines"},
    {number: 1, name: "Dark Angels"},
    {number: 20, name: "Alpha Legion"},
    {number: 4, name: "Iron Warriors"},
    {number: 16, name:"Sons of Horus"},
]; 

arrNumbers.sort();
showArray(arrNumbers);  /* Elements are sorted as strings */
function compareElements(a, b) {
    if (a > b) {
        return 1;
    } else if (a == b) {
        return 0;
    } else if (a < b) {
        return -1;
    }
}

arrNumbers.sort(compareElements); /* It is allowed to pass existed compare function as a parameter */
showArray(arrNumbers);
arrNumbers2.sort(function(a, b) {
    return a - b;
}); /* To compare numbers instead of strings, the compare function can subtract b from a. */
showArray(arrNumbers2);

arrLegions2.sort((a ,b) => {
    if (a.number > b.number) {
        return 1;
    } else if (a.number == b.number) {
        return 0;
    } else if (a.number < b.number) {
        return -1;
    }
}); /* It is allowed to use anonimus function as a parameter */

showArrayObjects(arrLegions2); /* Arrays of objects can be sorted by comparing the value of one of their properties. */
console.log("_________________________________");

// Map() - Syntax map(function callback (item, index, array))
// element - The current element being processed in the array. 
// index (Optional) - The index of the current element being processed in the array.
// arrayOptional (Optional) - The array map was called upon.
console.log("map()");
let arrNumbers3 = arrNumbers.map((element) => Math.pow(element, 2)); /* Will return an array filed in with squares */
showArray(arrNumbers3); 
function updateArray(element, index) {
    if (index > 1) {
        return Math.sqrt(element);
    } else {
        return element;
    }
}

let arrNumbers4 = arrNumbers3.map(updateArray); /* Will create an array filled in with updated elemnts started from the index */
showArray(arrNumbers4); 
console.log("_________________________________");

// Reverse - method reverses an array
console.log("reverse()");
arrNumbers4.reverse();
showArray(arrNumbers4);  /* Will return reversed array */
console.log("_________________________________");

// Split - method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for the first parameter.
console.log("split()");
let legions = "Raven Guard, Salamanders, Imperial Fists, Space Wolves, White Scars";
let arrLegions3 = legions.split(", ");
showArray(arrLegions3);  /* Will return array created from the string */
let arrLegions4 = legions.split(", ", 3); /* The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. */
showArray(arrLegions4);
let text = "Text";
let arrText = text.split(""); /* The call to split(s) with an empty string would split the string into an array of letters. */
showArray(arrText);
console.log("_________________________________");

// Join - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
console.log("join()");
showArray(arrLegions);
let arrLegionsString =  arrLegions.join(); /* Will create a string filed in by elements of array separated by comma (default separated) */
console.log(arrLegionsString);
let arrLegionsString2 =  arrLegions.join("-"); /* Will create a string filed in by elements of array separated by space */
console.log(arrLegionsString2);
console.log("_________________________________");

// Reduce() - The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
// Syntax reduce(callback[, initialValue])
// A “reducer” function that takes four arguments:
// previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
// currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
// currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
// array: the array to traverse
console.log("reduce()");
let arrNumbers5 = [
    1,
    2,
    3,
    4,
];

let arrCars = [
    "Lada",
    "Audi",
    "BMW",
    "Opel",
    "Nissan",
] 
console.log(arrNumbers5.reduce((a, b) => a + b)); /* Will return sum of all elements of array */
console.log(arrNumbers5.reduce((a, b) => a + b, 5)); /* Will return sum of all elements of array + initial value*/
console.log(arrCars.reduce((a, b, c) => {
    if (c > 1) {
        return a + b + " ";
    } else {
        return "";
    }
})); /* Will return sum of all elements of array starting from the specified index left to right */
console.log("_________________________________");

// ReduceRight() - The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// Syntax reduceRight(callback[, initialValue])
// A “reducer” function that takes four arguments:
// previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
// currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
// currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
// array: the array to traverse
console.log("reduceRight()");
let arrNumbers6 = [
    1,
    2,
    3,
    4,
];

let arrCars2 = [
    "Lada",
    "Audi",
    "BMW",
    "Opel",
    "Nissan",
] 
console.log(arrNumbers6.reduceRight((a, b) => a + b)); /* Will return sum of all elements of array */
console.log(arrNumbers6.reduceRight((a, b) => a + b, 5)); /* Will return sum of all elements of array + initial value*/
console.log(arrCars2.reduceRight((a, b, c) => {
    if (c < 2) {
        return a + b + " ";
    } else {
        return "";
    }
})); /* Will return sum of all elements of array starting from the specified index right to left */
console.log("_________________________________");