"use strict";

// Prototypal inheritance
// - In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
// - We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
// - The object referenced by [[Prototype]] is called a “prototype”.
// - If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
// - Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
// - If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
// - The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

console.log("[[Prototype]]");
let legionStatus = {
    isTraitor: false,
    set traitorStatus(value) {
        this.isTraitor = Boolean(value);
    }, /* Setter */
    
    get traitorStatus() {
        return `${this.isTraitor}`;
    }, /* Getter */
    
    showReport () {
        console.log("Legion is ready!");
    }, /* Method */
}

let legion1 = {
    name: "Blood Angels",
    number: "IX",
    __proto__: legionStatus,
}

console.log(legion1.isTraitor); /* Will return false */
legion1.showReport(); /* Will return "Legion is ready!" */
console.log("___________________");

for (let element of Object.keys(legion1)) {
    console.log(`${element}`);
} /* Will return only own properies and values */
console.log("___________________");

for (let property in legion1) {
    let isOwn = legion1.hasOwnProperty(property);
    if (isOwn === true) {
        console.log(`Own property: ${property}, property value: ${legion1[property]}`);
    } else {
        console.log(`Inherited property: ${property}, property value: ${legion1[property]}`);
    }
} /* Will return own and inherited properies and values */
console.log("___________________");

let legion2 = {
    name: "World Eaters",
    number: "XII",
    __proto__: legionStatus,
}

for (let property in legion2) {
    console.log(`Property: ${property}, property value: ${legion2[property]}`);
} /* Will return own and inherited properies and values */
console.log("___________________");

legion2.traitorStatus = true; /* Will update inherited property of legion2 */
legion2.showReport = function () {
    console.log("KILL! MAIM! BURN!");
} /* Will update inherited method of legion2 */

for (let property in legion2) {
    console.log(`Property: ${property}, property value: ${legion2[property]}`);
}  /* Will return only inherited properies and values should be updated */
console.log("___________________");