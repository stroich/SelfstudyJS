"use strict";
// Iterable objects. To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).
// 1. When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
// 2. Onward, for..of works only with that returned object.
// 3. When for..of wants the next value, it calls next() on that object.
// The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

console.log("Iterable objects");
let range1 = {
    from: 1,
    to: 5,
};

range1[Symbol.iterator] = function() {   /* 1. call to for..of initially calls this */
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++,
                }
            } else {
                return {
                    done: true,
                }
            }
        }
    }; 
};

console.log("range1");
for (let num of range1) {
    console.log(`${num}`);
} /* Will return 1, 2, 3, 4, 5 */


// Please note the core feature of iterables: separation of concerns.
// The range itself does not have the next() method.
// Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.
// So, the iterator object is separate from the object it iterates over.
// Technically, we may merge them and use range itself as the iterator to make the code simpler.

let range2 = {
    from: 6,
    to: 10,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++,
            };
        } else {
            return {
                done: true
            };
        }
    }
};

console.log("range2");
for (let num of range2) {
    console.log(`${num}`);
} /* Will return 6, 7, 8, 9, 10 */

console.log("_______________________");

// String is iterable
console.log("String is iterable");

for (let char of "Tester") {
    console.log(char); // T, then e, then s, then t, then e, then rs
}

console.log("_______________________");

// Calling an iterator explicitly
console.log("Calling an iterator explicitly");
let str = "Hello";
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}
console.log("_______________________");

// Iterables and array-likes
// Two official terms look similar, but are very different. 
// - Iterables are objects that implement the Symbol.iterator method, as described above.
// - Array-likes are objects that have indexes and length, so they look like arrays. E.G. Strings.

// Array.from. Array.from(obj[, mapFn, thisArg])
// obj - An array-like or iterable object to convert to an array.
// mapFn - Optional Map function to call on every element of the array.
// thisArg - Optional Value to use as this when executing mapFn.

console.log("Array.from");

function showArray(array){
    for (let element of array){
        console.log(element);
    }
}

let legion = {
    0: "Dark Angels",
    1: "I",
    2: 120000,
    length: 3,
};
let arrLegion = Array.from(legion);  /* Array.from at the line (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it. */
showArray(arrLegion);

let str2 = '123';
let arrStr2 = Array.from(str2); /* Array.from can be used to turn a string into an array of characters */
showArray(arrStr2);

let arrNum = Array.from([1, 2, 3], x => Math.pow(x, 2)); /* The optional second argument mapFn can be a function that will be applied to each element before adding it to the array */
showArray(arrNum);

console.log("_______________________");