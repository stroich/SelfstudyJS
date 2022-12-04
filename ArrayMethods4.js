"use strict";

let arrLegions = [
    "Ultramarines",
    "Dark Angels",
    "Alpha Legion",
    "Iron Warriors",
    "Sons of Horus",
]; /* Create a filled in array  */

let legion = {
    number: 13,
    name: "Ultramarines",
};


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

// The Array.isArray() method determines whether the passed value is an Array. The method will return true or false.
console.log("isArray");
console.log(typeof arrLegions); /* Will return object because. Because typeof does not help to distinguish a plain object from an array*/
console.log(Array.isArray(arrLegions)); /* Will return true */
console.log(Array.isArray(legion)); /* Will return false */
console.log("_________________________________");

// thisArg - Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.
console.log("thisArg");
let army = {
    traitor: false,
    canJoin(legion) {
      return legion.traitor === this.traitor;
    }
  };
  
  let arrLegions2 = [
    {number: 13, name: "Ultramarines", traitor: false},
    {number: 1, name: "Dark Angels", traitor: false},
    {number: 20, name: "Alpha Legion", traitor: true},
    {number: 4, name: "Iron Warriors", traitor: true},
    {number: 16, name:"Sons of Horus", traitor: true},
];
  
  // find users, for who army.canJoin returns true
  let armyLegions = arrLegions2.filter(army.canJoin, army); /* Will return filtered array */
  showArrayObjects(armyLegions); 
  /* let armyLegions2 = arrLegions2.filter(army.canJoin); Will return error because thisArg is not defined 
  showArrayObjects(armyLegions2);  */
  let armyLegions3 = arrLegions2.filter((legion) => army.canJoin(legion)); /* Will return filtered array. filter(army.canJoin, army) can ve replaced by call of arrow function*/
  showArrayObjects(armyLegions3);
  console.log("_________________________________");
 