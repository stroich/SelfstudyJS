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

// Iterate: forEach - The arr.forEach method allows to run a function for every element of the array. 
/* The syntax:arr.forEach(function(item, index, array) {
   ... do something with item
}); 
*/
// forEach
console.log("forEach");
arrLegions.forEach((element) => console.log(element)); /* item is mandatory, index and array are not mandatory */
arrLegions.forEach(function (element, index, array) {
    console.log(`The ${element} has index ${index} in the list: ${array}`);
});
arrLegions.forEach((element, index) => {
    if (element === "Dark Angels") {
        arrLegions.splice(index, 1);
    };
}); /* User can update the array by using the forEach method */
arrLegions.forEach((element) => console.log(element)); 
/* let arrLegions2 = [];
arrLegions2 = arrLegions.forEach((element) => arrLegions2.push(element));
arrLegions2.forEach((element) => console.log(element));  Error appears because forEach returns undefined */
arrLegions.splice(1,0, "Dark Angels");
console.log("_________________________________");

// indexOf(item, from) – looks for item starting from index from left to right, and returns the index where it was found, otherwise -1. from is not mandatory
console.log("indexOf()");
console.log(arrLegions.indexOf("Alpha Legion")); /* Will return index of the element in Array. Default value of from: 0 (entire array is searched). */
console.log(arrLegions.indexOf("Alpha Legion", 3)); /* Will return -1 because searching will start from the element with index 3 */
console.log(arrLegions.indexOf("Alpha Legion", 1)); /* Will return index of the element in Array */
console.log(arrLegions.indexOf("Iron Warriors", -4)); /* Will return index of the element in Array. Negative index specify the position from the end of the array*/
console.log(arrLegions.indexOf("Iron Warriors", 6)); /* If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. */
console.log("_________________________________");

// lastIndexOf(item, from) – looks for item starting from index from right to left, and returns the index where it was found, otherwise -1. from is not mandatory
console.log("lastIndexOf()");
console.log(arrLegions.lastIndexOf("Alpha Legion")); /* Will return index of the element in Array. Default value of from: 0 (entire array is searched). */
console.log(arrLegions.lastIndexOf("Alpha Legion", 1)); /* Will return -1 because searching will start from the element with index 1 right to left */
console.log(arrLegions.lastIndexOf("Alpha Legion", 3)); /* Will return index of the element in Array */
console.log(arrLegions.lastIndexOf("Iron Warriors", -2)); /* Will return index of the element in Array. Negative index specify the position from the end of the array*/
console.log(arrLegions.lastIndexOf("Iron Warriors", 6)); /* fromIndex value greater than or equal to the length of the array causes the whole array to be searched */
console.log("_________________________________");

// includes(item, from) - looks for item starting from index from left to right, returns true if found. from is not mandatory
console.log("includes()");
console.log(arrLegions.includes("Alpha Legion")); /* Will return true. Default value of from: 0 (entire array is searched). */
console.log(arrLegions.includes("Alpha Legion", 3)); /* Will return false because searching will start from the element with index 3 */
console.log(arrLegions.includes("Alpha Legion", 1)); /* Will return true */
console.log(arrLegions.includes("Iron Warriors", -4)); /* Will return true. Negative index specify the position from the end of the array*/
console.log(arrLegions.includes("Iron Warriors", 6)); /* If the index is greater than or equal to the array's length, false is returned, which means the array will not be searched. */
console.log("_________________________________");

// Checking NaN in array - very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf
let arrLegions3 = [NaN];
console.log(arrLegions3.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arrLegions3.includes(NaN));// true (correct)
console.log("_________________________________");

// find(function(item, index, array) - item is the element (mandatory); index is its index (optional); array is the array itself (optional).
// The function is called for elements of the array, one after another. If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.
console.log("find()");
let result = arrLegions.find((element) => element === "Dark Angels");
console.log(result); /* Will return found element */
result = arrLegions.find((element) => {
    element === "Blood Angels"
});
console.log(result); /* Will return undefined */
result = arrLegions.find((element, index) => {
    if (index > 2 && element === "Sons of Horus") {
        return true;
    } else {
        return false;
    }
    
});
console.log(result); /* Will return found element because the element corresponds to to both criteria in the callback function */
result = arrLegions.find((element, index) => {
    if (index < 2 && element === "Sons of Horus") {
        return true;
    } else {
        return false;
    }
    
});
console.log(result); /* Will return undefined because the element does not correspond to to both criteria in the callback function */
console.log("_________________________________");

// findIndex(function(item, index, array) - item is the element (mandatory); index is its index (optional); array is the array itself (optional).
// The function is called for elements of the array, one after another. If it returns true, the search is stopped, the index of the element is returned. If nothing found, -1 is returned.
console.log("findIndex()");
result = arrLegions.findIndex((element) => element === "Dark Angels");
console.log(result); /* Will return index of found element */
result = arrLegions.findIndex((element) => {
    element === "Blood Angels"
});
console.log(result); /* Will return -1 */
result = arrLegions.findIndex((element, index) => {
    if (index > 2 && element === "Sons of Horus") {
        return true;
    } else {
        return false;
    }
    
});
console.log(result); /* Will return index of found element because the element corresponds to to both criteria in the callback function */
result = arrLegions.findIndex((element, index) => {
    if (index < 2 && element === "Sons of Horus") {
        return true;
    } else {
        return false;
    }
    
});
console.log(result); /* Will return -1 because the element does not correspond to to both criteria in the callback function */
console.log("_________________________________");

// filter(function(item, index, array) - item is the element (mandatory); index is its index (optional); array is the array itself (optional).
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. If nothing found, empty array is returned.
console.log("filter()");
result = arrLegions.filter((element) => element === "Dark Angels");
showArray(result); /* Will return array filled in with found elements */
result = arrLegions.filter((element) => {
    element === "Blood Angels"
});
showArray(result); /* Will return empty array */
result = arrLegions.filter((element, index) => {
    if (index > 2) {
        return true;
    } else {
        return false;
    }
    
});
showArray(result); /* Will return array filled in with found elements */
result = arrLegions.filter((element, index) => {
    if (index > 6) {
        return true;
    } else {
        return false;
    }
    
});
showArray(result); /* Will return empty array */
console.log("_________________________________");


// find() and findIndex() and filter() will work if an array consists of objects
console.log("find() and findIndex() and filter() will work if an array consists of objects");
let arrLegions4 = [
    {number: 13, name: "Ultramarines"},
    {number: 1, name: "Dark Angels"},
    {number: 20, name: "Alpha Legion"},
    {number: 4, name: "Iron Warriors"},
    {number: 16, name:"Sons of Horus"},
]; 

let checkLegion = function (element, index, array) {
    if (element.number > 1 && index > 0) {
        return true;
    } else {
        return false;
    }
};

result = arrLegions4.find(checkLegion); /* It is allowed to use the find method with existed function as a callback */
showObject(result); /* Will return Object */
result = arrLegions4.findIndex(checkLegion); /* It is allowed to use the findIndex method with existed function as a callback */
console.log(result); /* Will return index of Object */
result = arrLegions4.filter(checkLegion); /* It is allowed to use the filter method with existed function as a callback */
showArrayObjects(result);
console.log("_________________________________");