"use strict";

let arrCats = [
    "Barsik",
    "Pushok",
    "Murzik",
    "Murka",
    "Snejok",
] /* Create a filled in array  */

function showArrayLenght(array) { 
    console.log(`The array length is ${array.length}`);
}

function showArray (array) {
    console.log(`The array consists of the following elements:`);
    for (let element of array) {
        console.log("   " + element);
    }
    showArrayLenght(array);
}

console.log("delete");
showArray(arrCats);
delete arrCats[1];
showArray(arrCats); /* The element will be removed from the array and calling of the appropriate index will return undefined but the Length of array has not been changed. */
arrCats[1] = "Pushok"; /* Add deleted element once again */
showArray(arrCats);
console.log("______________________________________");

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
console.log("splice");
console.log(arrCats.splice(2, 2)); /* The code will delete two elements of array starting from the index 2 and return back array of removed elemets */
showArray(arrCats); /* The array has been updated and removed elements are not presented.  */
console.log(arrCats.splice(0, 1, "Kuzya")); /* The code will delete one elements of array starting from the index 0 then add one new elements */
showArray(arrCats); /* The array has been updated and removed elements are not presented and added elements are presented. The Length of array has been changed. */
console.log(arrCats.splice(2, 0, "Murzik", "Murka")); /* The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0 */
showArray(arrCats); /* The array has been updated. The Length of array has been changed. */
console.log(arrCats.splice(-1, 1)); /* Negative indexes are allowed. They specify the position from the end of the array */
showArray(arrCats); /* The array has been updated. The Length of array has been changed.*/
arrCats[0] = "Barsik"; /* Return the array to default state */
arrCats[4] = "Snejok"; /* Return the array to default state */
showArray(arrCats); /* The array has been returned back to the default state */
console.log("______________________________________");

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
console.log("slice");
let arrCats2 = arrCats.slice(1, 3); /* Code will copy arrCat[1], arrCat[2] */
showArray(arrCats2); /* The new array has been created */
showArray(arrCats); /* The arrCats has no been changed */
let arrCats3 = arrCats.slice(2); /* The end argument is not mandatory. Code will copy all elements starting from the index 2 till the end */
showArray(arrCats3); /* The new array has been created */
let arrCats4 = arrCats.slice(); /* The start and end arguments are not mandatory. Code will copy all elements of the array */
showArray(arrCats4); /* The new array has been created */
let arrCats5 = arrCats.slice(-5, -3); /* Negative values are allowed. Code will copy arrCat[0], arrCat[1] */
showArray(arrCats5); /* The new array has been created */
console.log("______________________________________");

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
console.log("concat");
let arrCats6 = arrCats.concat("Ryjik", "Tishka"); /* Will create an array based on the existed arrays and new values  */
showArray(arrCats6); /* The new array has been created */
let arrCats7 = [
    "Cassandra",
    "Muska",
] 
let arrCats8 = arrCats.concat(arrCats7); /* Will create an array based on the existed arrays and other array  */
showArray(arrCats8); /* The new array has been created */

let cat1 = {
    0: "Kusya",
    length: 1,
};

let arrCats9 = arrCats.concat(cat1); /* Normally, concat only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole  */
showArray(arrCats9); /* The new array has been created. The Value from the object is presented like [object Object] */

let cat2 = {
    0: "Kusya", 
    [Symbol.isConcatSpreadable]: true,  
    length: 1,
};

let arrCats10 = arrCats.concat(cat2); /* But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat */
showArray(arrCats10); /* The new array has been created. The Value from the object is presented like a value */

