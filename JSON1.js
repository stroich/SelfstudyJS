"use strict";

// JSON.stringify. The method takes the object and converts it into a string.
// JSON supports following data types:
// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.

console.log("JSON.stringify");

let legion1 = {
    number: "VII",
    name: "Imperial Fists",
    strength: {
      warriors: 120000,
      tanks: 1500,
    },
    locations: ["Terra", "Phall"],
    isTraitor: false,
  }

let legion1Json = JSON.stringify(legion1);
console.log(legion1Json); /* Will return object in JSON format */
console.log(typeof legion1Json); /* Will return string */

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:
// Function properties (methods)
// Symbolic keys and values
// Properties that store undefined

let legion2 = {
    number: "II",
    showStatus() {  /* Will be ignored */
      console.log("Legion is lost");
    },
    [Symbol("expedition")]: 63, /* Will be ignored */
    locations: undefined  /* Will be ignored */
  };

let legion2Json = JSON.stringify(legion2); 
console.log(legion2Json); /* Only "number":"II" is added to the string other values are ignored */

// The important limitation: there must be no circular references.
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
  
// meetup.place = room;       meetup references room
// room.occupiedBy = meetup; room references meetup
// JSON.stringify(meetup); Error: Converting circular structure to JSON
console.log("______________");

// Excluding and transforming: replacer. The full syntax of JSON.stringify is: let json = JSON.stringify(value[, replacer, space])
// value - a value to encode.
// replacer - Array of properties to encode or a mapping function function(key, value).
// space - Amount of space to use for formatting
console.log("Excluding and transforming: replacer.");

let status = {
    isTraitor: false,
}

let legion3 = {
    number: "VI",
    name: "Space Wolves",
    strength: {
      warriors: 100000,
      tanks: 1200,
    },
    loyalty: status,
  }

status.legion = legion3;

console.log(JSON.stringify(legion3, ["number", "name", "strength"])); /* Will show {"number":"VI","name":"Space Wolves","strength":{}} status.legion is not presented */
console.log(JSON.stringify(legion3, ["number", "name", "strength", "loyalty", "warriors", "tanks", "isTraitor"])); /* Will show {"number":"VI","name":"Space Wolves","strength":{"warriors":100000,"tanks":1200},"loyalty":{"isTraitor":false}} status.legion is not presented */

// We can use a function instead of an array as the replacer
console.log(JSON.stringify(legion3, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'legion') ? undefined : value;
  }));
console.log("______________");

// Formatting: space - The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting.
console.log("Formatting: space");

let legion4 = {
  number: "IX",
  name: "Blood Angels",
  strength: {
    warriors: 90000,
    tanks: 1100,
  },
  locations: ["Baal"],
  isTraitor: false,
}

console.log(JSON.stringify(legion4, null, 2)); /* Will add 2 spaces to JSON */
console.log(JSON.stringify(legion4, null, 4)); /* Will add 4 spaces to JSON */
console.log("______________");

// Custom “toJSON” - Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.
console.log("Custom \“toJSON\”");

let user1 = {
  name: "Mike",
  birthday: new Date(1963, 10, 15, 14, 30, 15, 1600),
}

console.log(JSON.stringify(user1)); /* Here we can see that date (1) became a string because dates have a built-in toJSON method which returns such kind of string. */

let password1 = {
  value: "Qwerty", 
  toJSON(){
    return this.value;
  } /* It is allowed to use custom toJSON  method for the object  */
}

let account1 = {
  login: 23,
  password1
}

console.log(JSON.stringify(account1)); /* Will return {"login":23,"password1":"Qwerty"} */
console.log("______________");

// JSON.parse - To decode a JSON-string, we need another method named JSON.parse.
// The syntax: let value = JSON.parse(str, [reviver]).
// str - JSON-string to parse.
// reviver - Optional function(key,value) that will be called for each (key, value) pair and can transform the value.
console.log("JSON.parse");

let legion5 = '{"name": "Dark Angels", "number": "I"}';
legion5 = JSON.parse(legion5); /* Will convert to object */
console.log(typeof legion5); /* Will return a object */
for (let key in legion5){
  console.log(`${key} : ${legion5[key]}`);
} /* Will show all parameters of object */

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers); /* Will convert to array */
console.log(typeof numbers); /* Will return object */
for (let element of numbers){
  console.log(`${element}`);
}

console.log("______________");

// Using reviver
console.log("Using reviver");
let user2 = '{"name": "Tony", "date": "2018-12-16T04:30:00.000Z"}'
// let record1 = JSON.parse(user2); 
// console.log(record1.date.getDate()); Will show an error because the value of record1.date is a string, not a Date object.

let record2 = JSON.parse(user2, function(key, value){
  if (key == "date") return new Date(value);
  return value;
}); /* Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date */

console.log(record2.date.getDate()); /* Will return 16 */
console.log("______________");