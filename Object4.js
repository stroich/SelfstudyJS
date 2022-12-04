"use strict";

function showObject(obj){
    for (let element in obj) {
        console.log(`${element}: ${obj[element]}`);
    }
}

function showArray(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

// Symbol type. A “symbol” represents a unique identifier.
let id1 = Symbol();
let id2 = Symbol("id"); /* Upon creation, we can give symbol a description (also called a symbol name), mostly useful for debugging purposes */
let id3 = Symbol("id");
console.log(id1 == id2); /* Will return false */
console.log(id2 == id3); /* Will return false */
console.log(id2); /* Will show "Symbol(id)" */
console.log(id2.toString()); /* Will show "Symbol(id)" */
console.log(id2.description); /* Will show id */

// Global symbols. If we want to make same-named symbols to be same entities, there exists a global symbol registry. We can create symbols in it and access them later.
let id4 = Symbol.for("id"); /* Global symbol */
let id5 = Symbol.for("id"); /* Global symbol */
let id6 = Symbol("id"); /* Local symbol */
console.log(id4 == id5) /* Will return true */
console.log(id4 == id6) /* Will return false */

// Symbol.keyFor. For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol.
console.log(Symbol.keyFor(id4)); /* Will return description for global */
console.log(Symbol.keyFor(id6)); /* Will return undefined for local symbol */
console.log(id4.description); /* Will return description for global symbol */
console.log(id6.description); /* Will return description for local symbol */

// System symbols There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.
// They are listed in the specification in the Well-known symbols table. E.G.:
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive

// Symbols in an object literal. If we want to use a symbol in an object literal {...}, we need square brackets around 
let strength = Symbol("Number os astartes");
let legion1 = {
    name: "Ultamarines",
    number: "XIII",
    [strength]: 250000,
};
console.log(legion1[strength]); /* Will show 250000 */
showObject(legion1); /* Symbols are skipped by for…in. legion1[strength] will not be shown */

// Object.keys, values, entries. For plain objects, the following methods are available:
// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.
console.log("Object.keys");
let arrLegion1keys = Object.keys(legion1);
showArray(arrLegion1keys); /* Will show array of legion1 keys. Symbols are skipped*/
console.log("______________________");

console.log("Object.values");
let arrLegion1values = Object.values(legion1);
showArray(arrLegion1values); /* Will show array of legion1 values. Symbols are skipped */
console.log("______________________");

console.log("Object.entries");
let arrLegion1entries = Object.entries(legion1);
arrLegion1entries.forEach((element) => console.log(`${element[0]}: ${element[1]}`));  /* Will show pairs key and value.Symbols are skipped by the method */
console.log("______________________");

// Transforming objects.Objects lack many methods that exist for arrays, e.g. map, filter and others.
// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:
// Use Object.entries(obj) to get an array of key/value pairs from obj.
// Use array methods on that array, e.g. map, to transform these key/value pairs.
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
console.log("Transforming objects");
let army = {
    canons: 5000,
    planes: 200,
    tanks: 600,
};

showObject(army);

let updatedArmy = Object.fromEntries(
    Object.entries(army).map((element) => [element[0], element[1] * 1.5])
);

showObject(updatedArmy);

// Destructuring assignment
console.log("Destructuring assignment");
let arrayLegions1 = ["Word Bearers", "World Eaters", "Sons of Horus", "Night Lords", "Alpha Legion"];
let [firstLegion, secondLegion] = arrayLegions1;
showArray(arrayLegions1); /* The array wll not be changed */
console.log(firstLegion); /* Will return "Word Bearers" */
console.log(secondLegion); /* Will return "World Eaters" */
let [, ,thirdLegion, , fifthLegion] = arrayLegions1; /* Unwanted elements of the array can also be thrown away via an extra comma */
console.log(thirdLegion); /* Will return "Sons of Horus" */
console.log(fifthLegion); /* Will return "Alpha Legion" */
console.log("______________________");

/* Looping with .entries() */
console.log("Looping with .entries()");
let legion2 = {};
[legion2.number, legion2.name, legion2.strength, legion2.loyalty] = "I: Dark Angels: 150000: loyalist".split(": "); /* We can use any “assignables” at the left side. */
console.log(legion2.number); /* Will return "I" */
console.log(legion2.name); /* Will return "Dark Angels" */
for (let [key, value] of Object.entries(legion2)){
  console.log(`The Legion ${key} is ${value}`);
}  /* We can use .entries() with destructuring to loop over keys-and-values of an object */
console.log("______________________");

// The rest ‘…’ Usually, if the array is longer than the list at the left, the “extra” items are omitted.
console.log("The rest \"...\"");
let arrayLegion2 = ["Space Wolves", "VI", "100000", "loyalist"]; /* If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "..." */
let [nameLegion2, numberLegion2, ...otherParamsLegion2] = arrayLegion2; 
console.log(nameLegion2); /* Will return "Space Wolves" */
console.log(numberLegion2); /* Will return "VI" */
showArray(otherParamsLegion2); /* Will shown "100000" and "loyalist" as array elements */
console.log("______________________");

// Default values. If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined
// If we want a “default” value to replace the missing one, we can provide it using =
console.log("Default values");
let legion3 = {};
[legion2.number = "unknown", legion2.name = "unknown", legion2.strength = "unknown", legion2.loyalty = "unknown"] = "XX: Alpha Legion".split(": ");
for (let [key, value] of Object.entries(legion2)){
  console.log(`The Legion ${key} is ${value}`);
} /* Will show default values for undefined paramenters */
console.log("______________________");

// Object destructuring
let legion4 = {
  number: "IX",
  name: "Blood Angels", 
  loyalty: "loyalist",
}

console.log("Object destructuring");
let {name, number, loyalty} = legion4;  /* We should have an existing object at the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. The order does not matter. */
console.log(name); /* Will show "Blood Angels" */
console.log(number); /* Will show "IX" */
console.log(loyalty); /* Will show "loyalist" */
console.log("______________________");

console.log("Default values and variables");
let {name: n, number: num, loyalty:l, strenght:s = "unknown"} = legion4; /* We can assign a property to a variable with another name and use default values */
console.log(n); /* Will show "Blood Angels" */
console.log(num); /* Will show "IX" */
console.log(l); /* Will show "loyalist" */
console.log(s); /* Will show "unknown" */
console.log("______________________");

// The rest pattern “…”
console.log("The rest \"...\" pattern for objects");
let {name: n2, number: num2,...otherParamsLegion4} = legion4; /* We can use the rest pattern for objects. The rest variable will be filled in with Object */
console.log(n2); /* Will show "Blood Angels" */
console.log(num2); /* Will show "IX" */
for (let [key, value] of Object.entries(otherParamsLegion4)){
  console.log(`The Legion ${key} is ${value}`);
}  /* Will shown pair key: value (loyalty : loyalist) */
console.log("______________________");

// Gotcha if there’s no let
console.log("no let");
let numberLegion, nameLegion;
/* {numberLegion, nameLegion} = {numberLegion: "XVIII", nameLegion: "Salamanders"};   This will not work. Error will be presented in console */ 
({numberLegion, nameLegion} = {numberLegion: "XVIII", nameLegion: "Salamanders"});  /* This will work if we add brackets */
console.log(numberLegion); /* Will show "XVIII" */
console.log(nameLegion); /* Will show "Salamanders" */
console.log("______________________");

// Nested destructuring
console.log("Nested destructuring");
let legion5 = {
  number: "VII",
  name: "Imperial Fists",
  strength: {
    warriors: 120000,
    tanks: 1500,
  },
  locations: ["Terra", "Phall"],
  isTraitor: false,
}
// If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.
let {
    number: numberL5, 
    name: nameL5, 
    strength: {
      warriors: warriorsL5,
      tanks: tanksL5,
    }, 
    locations: [location1L5, location2L5], 
    status: statusL5 = "Ready!"
  } = legion5;
console.log(numberL5); /* Will return "VII" */
console.log(nameL5); /* Will return "Imperial Fists" */
console.log(warriorsL5); /* Will return 120000 */
console.log(tanksL5); /* Will return 1500 */
console.log(location1L5); /* Will show "Terra" */
console.log(location2L5); /* Will show "Phall" */
console.log(statusL5); /* Will return "Ready!" */
console.log("______________________");

// Smart function parameters. We can pass parameters as an object, and the function immediately destructurizes them into variables.
function showLegion(
      {
        number: num = "unknow", 
        name: n = "unknown", 
        locations = "unknown", 
        status = "Ready!",
      }) {
  console.log(`Legion name is ${n}, number is ${num} and its status is ${status}`);
  if (locations === "unknown") {
    console.log(`Location is ${locations}`)
  } else {
    for (let location of locations) {
      console.log(`Location is ${location}`);
    }
  }
}

showLegion(legion5);

let legion6 = {
  number: "II",
}

showLegion(legion6);

// Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object
/* showLegion();  Will shown an arror */
showLegion({});  /* Will shown default values */

// We can fix this by making {} the default value for the whole object of parameters
function showLegion2(
  {
    number: num = "unknow", 
    name: n = "unknown", 
    locations = "unknown", 
    status = "Not Ready!"
  } = {}) {
  console.log(`Legion name is ${n}, number is ${num} and its status is ${status}`);
  if (locations === "unknown") {
    console.log(`Location is ${locations}`)
  } else {
    for (let location of locations) {
      console.log(`Location is ${location}`);
    }
  }
}

showLegion2(); /* Will shown default values */
console.log("______________________");

