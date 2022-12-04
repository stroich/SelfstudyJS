"use strict";

// Map - is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// Methods and properties are:
// - new Map() – creates the map.
// - map.set(key, value) – stores the value by the key.
// - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// - map.has(key) – returns true if the key exists, false otherwise.
// - map.delete(key) – removes the value by the key.
// - map.clear() – removes everything from the map.
// - map.size – returns the current element count.
console.log("Create a Map");
let map1 = new Map();
map1.set(1, "num1"); /* Number can be used as a key */
map1.set("1", "str1"); /* String can be used as a key */
map1.set(true, "bool1"); /* Boolean can be used as a key */
console.log(map1.get(1)); /* Will return and show "num1" */
console.log(map1.get("1")); /* Will return and show "str1" */
console.log(map1.get(true)); /* Will return and show "bool1" */ 
// Map can also use objects as keys. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.
let user1 = {name: "Max"};
let visitCounter1 = new Map();
visitCounter1.set(user1, 54);
console.log(visitCounter1.get(user1)); /* Will return 54 */
// How Map compares keys: To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.
console.log("___________________________")

// Iteration over Map. For looping over a map, there are 3 methods:
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of
console.log("Iteration over Map");
let legions1 = new Map([
    ["I", "Dark Angels"],
    ["III", "Emperor's Children"],
    ["IV", "Iron Warriors"],
    ["V", "White Scars"]
]); /* When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization */
console.log(legions1.size); /* Will return 4 */
console.log(legions1.get("III")); /* Will return "	Emperor's Children" */
console.log(legions1.has("III")); /* Will return true */
legions1.delete("III");
console.log(legions1.has("III")); /* Will return false */
console.log(legions1.size); /* Will return 3 */

for (let element of legions1.keys()){
    console.log(`${element}`); /* Will return "I", "IV", "V". */
}

for (let element of legions1.values()){
    console.log(`${element}`); /* Will return "Dark Angels", "Iron Warriors", "White Scars". */
}

for (let element of legions1.entries()){
    console.log(`${element}`); /* Will return "I,Dark Angels", "IV,Iron Warriors", "V,White Scars". */
}

for (let element of legions1){
    console.log(`${element}`); /* Will return "I,Dark Angels", "IV,Iron Warriors", "V,White Scars". The same as for map.entries() */
}

// Besides that, Map has a built-in forEach method, similar to Array
legions1.forEach((value, key) => {
    console.log(`${key}: ${value}`); // Will return "I: Dark Angels", "IV: Iron Warriors", "V: White Scars".
  });

legions1.clear(); /* Clear the map */
console.log(legions1.size); /* Will return 0 */
console.log("___________________________");

//   Object.entries: Map from Object
// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
console.log("Map from Object");
let legionObj = {
    number: "XIII",
    name: "Ultramarines"
};

let legionMap = new Map(Object.entries(legionObj));
for (let element of legionMap){
    console.log(`${element}`); /* Will return "number,XIII", "name,Ultramarines". */
}
console.log("___________________________");

// Object.fromEntries: Object from Map. We can use Object.fromEntries to get a plain object from Map.
console.log("Object from Map")
let legions2 = new Map ([
    ["VI", "Space Wolves"],
    ["VII", "Imperial Fists"],
    ["VIII", "Night Lords"]
]); 

let legions2Obj1 = Object.fromEntries(legions2.entries()); /* make a plain object (*) */
for (let key in legions2Obj1) {
    console.log(`${key}:  ${legions2Obj1[key]}`);
}

let legions2Obj2 = Object.fromEntries(legions2); /* We could also make line (*) shorter by omitting .entries() */
for (let key in legions2Obj2) {
    console.log(`${key}:  ${legions2Obj2[key]}`);
} 
console.log("___________________________");

// Set. A Set is a special type collection – “set of values” (without keys), where each value may occur only once. Main methods are:
// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

// Iteration over Set. We can loop over a set either with for..of or using forEach.
// The same methods Map has for iterators are also supported:
// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

console.log("Set");
let legions3 = new Set([
    "X",
    "XI",
    "XII",
    "XIII",
    "XI"
]); /* "XI" will be added only once */

console.log(legions3.size); /* Will return 4 */

for (let value of legions3) {
    console.log(value);
}; /* "XI" will be presented only once */

legions3.add("XIV"); /* The new element will be added */
legions3.add("XI"); /* The new element will not be added */

legions3.forEach ((value, valueAgain, set) => {
    console.log(`Legion Number: ${value}`); 
}); /* "XI" will be presented only once.  "XIV" will be presented */
/* The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.
That’s for compatibility with Map where the callback passed forEach has three arguments. */

console.log(legions3.has("XI")); /* Will return true */
console.log(legions3.delete("XI"));  /* Will delete the element and return true */
console.log(legions3.has("XI")); /* Will return false */

for (let element of legions3.keys()){
    console.log(`Number: ${element}`); /* Will return "I", "IV", "V". */
}

legions3.clear(); /* Clear the map */
console.log(legions3.size); /* Will return 0 */
console.log("___________________________");





