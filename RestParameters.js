"use strict";

// Rest parameters.
console.log("Rest parameters"); 
function func1(...args){
    let sum = 0;
    for (let arg of args) {
        sum = sum + arg;
    }
    return sum;
} /* The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”. */

console.log(func1(1));/*  Will return 1 */
console.log(func1(1, 2)); /* Will return 3 */
console.log(func1(1, 2, 3)); /* Will return 6 */

function showName(firstName, lastName,...titles){
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    for (let element of titles) {
        console.log(`title: ${element}`);
    }
} /* We can choose to get the first parameters as variables, and gather only the rest. The rest parameters must be at the end */

showName("Julius", "Caesar", "Consul", "Imperator"); /* Will return all sent parameters */
showName("Lucius", "Cornelius"); /* Will return all sent parameters */
console.log("___________________________________"); 

// The “arguments” variable. There is also a special array-like object named arguments that contains all arguments by their index. It does not support array methods. Arrow functions do not have "arguments".
console.log("The “arguments” variable");
function showName2(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName2("Gaius", "Marius"); /* Will show 2; Gaius; Marius */
showName2(); /* Will show 0; undefined; undefined */
console.log("___________________________________"); 

// Spread syntax. We’ve just seen how to get an array from the list of parameters. But sometimes we need to do exactly the reverse.
console.log("Spread syntax");
console.log(Math.max([3, 5, 1])); /* Will return NaN */
console.log(Math.max(...[3, 5, 1])); /* Will return 5 */
console.log(Math.max(...[3, 5, 1], ...[7, 8])) /* We also pass multiple iterables this way. Will return 8 */
console.log(Math.max(10, ...[3, 5, 1], 12, ...[7, 8])); /* We can combine the spread syntax with normal values. Will return 12 */
let arr1 = [2, 3, 4];
let arr2 = [5, 6, 7];
let arr3 = [1, ...arr1, ...arr2, 8]; /* The spread syntax can be used to merge arrays */
arr3.forEach((a) => console.log(a)); /* Will show 1, 2, 3, 4, 5, 6, 7, 8 */
let str1 = "Hello";
[...str1].forEach((a) => console.log(a)); /* We can use the spread syntax to turn the string into array of characters. Will show "H","e","l","l","o" */
let arr4 = Array.from(str1); /* We can use Array.from() to converts an iterable into an array */
arr4.forEach((a) => console.log(a)); /* Will show "H","e","l","l","o" */
// But there’s a subtle difference between Array.from(obj) and [...obj]:
// Array.from operates on both array-likes and iterables.
// The spread syntax works only with iterables.
console.log("___________________________________");

// Copy an array/object
console.log("Copy an array/object");
let arr5 = [1, 2, 3];
let arr6 = [...arr5]; // spread the array into a list of parameters and then put the result into a new array
// do the arrays have the same contents?
console.log(JSON.stringify(arr5) === JSON.stringify(arr6)); // true
// are the arrays equal?
console.log(arr5 === arr6); // false (not same reference)
arr5.push(4); /* modifying our initial array does not modify the copy */
arr5.forEach((a) => console.log(a)); // 1, 2, 3, 4
arr6.forEach((a) => console.log(a)); // 1, 2, 3

// That it is possible to do the same thing to make a copy of an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1 }; // spread the object into a list of parameters and then return the result in a new object
// do the objects have the same contents?
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
// are the objects equal?
console.log(obj1 === obj2); // false (not same reference)
// modifying our initial object does not modify the copy:
obj1.d = 4;
console.log(JSON.stringify(obj1)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(obj2)); // {"a":1,"b":2,"c":3}