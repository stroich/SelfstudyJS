"use strict";

// Method examples
let legion1 = {
    name: "Ultamarines",
    number: "XIII",
};
legion1.status = function () {
    console.log(`Legion is ready to battle`);
} /* A function that is a property of an object is called its method. */
legion1.status();

let legion2 = {
    name: "Dark Angels",
    number: "I",
};
let legionStatus = function () {
    console.log(`Legion is ready to fight`);
} 
legion2.status = legionStatus; /* We could use a pre-declared function as a method */
legion2.status();

let legion3 = {
    name: "Imperial Fists",
    number: "VII",
    status: function () {
        console.log(`Legion is ready to siege`);
    }
}; /* There exists a shorter syntax for methods in an object literal */
legion3.status();

let legion4 = {
    name: "Salamanders",
    number: "XVIII",
    status () {
        console.log(`Legion is not ready to fight. Big looses.`);
    } /* We can omit "function" */
}; 
legion4.status();

// “this” in methods
let legion5 = {
    name: "Space Wolves",
    number: "VI",
    status () {
        console.log(`${this.name} is always ready to fight.`); 
        /* console.log(`${name} is always ready to fight.`); - Will failed: name is not defined  */
    } /* We can omit "function" */
}; 
legion5.status();
function showNumber() {
    console.log(`${this.number}`);
} /* The value of this is evaluated during the run-time, depending on the context. */
legion5.presentNumber = showNumber; 
legion5.presentNumber(); 

// Calling without an object: this == undefined
function sayHi() {
    console.log(this);
  }
  
  sayHi(); // undefined
  
  /* Arrow functions have no “this”. hen this is accessed inside an arrow function, it is taken from outside. */
  let legion6 = {
    name: "White Scars",
    number: "V",
    status() {
        let arrowFunction = () => console.log(`${this.name} is always ready to raid.`); 
        arrowFunction();
    }
}; 
legion6.status();


/* let status = legion6.status;
status();  
Will show error because cannot read properties of undefined (reading 'name'). 
"this" will work if user calls method of object - legion6.status(). It will return Reference type. 
let status = legion6.status will assign a function to the variable and "this" will be missed.
*/

// Constructor function. Constructor functions technically are regular functions. There are two conventions though: they are named with capital letter first; they should be executed only with "new" operator.
function Legion(name, number) {
    this.name = name;
    this.number = number;
    this.showLegion = function(){
      console.log(`The legion name is ${this.name}; the legion number is ${this.number}`);
    };
}

let legion7 = new Legion("Raven Guard", "XIX");
legion7.showLegion();
let legion8 = new Legion("World Eaters", "XII");
legion8.showLegion();

// Omitting parentheses. By the way, we can omit parentheses after new, if it has no arguments: Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification. E.G. let user = new User;

// Return from constructors. 
// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

function Legion2() {
    this.name = "Night Lords";
    return {name: "Sons of Horus"} /* Will return this Object */
}
console.log(new Legion2().name); // Will return "Sons of Horus"

function Legion3() {
    this.name = "Night Lords";
    return this.name /* Will return the parameter */
}
console.log(new Legion3().name); // Will return "Night Lords"
// Usually constructors don’t have a return statement.

// Constructor mode test: new.target. Inside a function, we can check whether it was called with new or without it. It is undefined for regular calls and equals the function if called with new.
function Legion4() {
    this.name = "Alpha Legion";
    console.log(`${this.name}`);
    console.log(new.target);
}
// Legion4(); /* Will return undefined */
new Legion4(); /* Will return this.name and function */

function Legion5(name) {
    if (!new.target) {
        return new Legion5(name);
    }
    this.name = name;
}
let legion9 = Legion5("Word Bearers"); 
console.log(legion9.name); /* Will return "Word Beares" */
let legion10 = new Legion5("Iron Warriors"); 
console.log(legion10.name); /* Will return "Iron Warriors" */

// The “non-existing property” problem. Optional chaining.
let legion11 = {
    name: "Sons of Horus",
    strength: 100000,
    primarch: "Horus",
    status: {
        isReadyToBattle: true,
        isTraitor: true,
    }, 
    showStatus() {
        console.log(`The legion name is ${this.name}. The legion is ready to battle: ${this.status.isReadyToBattle}. The legion is traitor: ${this.status.isTraitor}.`)
    },
};

let legion12 = {
    name: "Word Bearers", 
};

let legion13 = null;
let key = "primarch";

console.log("Optional chaining");
console.log(legion11.status?.isTraitor); /* Will return the property value: true */
legion11.showStatus(); /* Will call the method */
console.log(legion11?.[key]); /* Will return "Horus" */
/* console.log(legion12.status.isTraitor);  As legion12.status is undefined, an attempt to get legion12.status.isTraitor fails with an error. */
console.log(legion12.status?.isTraitor); /* Will show undefined */
/* legion12.showStatus();   Will show error */
legion12.showStatus?.();   /* Will not show the error. The Method will be called without errors. */
console.log(legion12?.[key]);  /* Will return undefined */
/* console.log(legion13.status);  Will show error */
console.log(legion13?.status);   /* As legion13.status is undefined, an attempt to get legion13.status fails with an error. */
/* console.log(legion14?.status);  Will show error. The variable before ?. must be declared */

// We can use ?. for deleting
console.log(legion11.strength); /* Will return 100000 */
console.log(legion12.strength); /* Will return undefined */
delete legion11?.strength;
delete legion12?.strength;
console.log(legion11.strength); /* Will return undefined*/
console.log(legion12.strength); /* Will return undefined */

// The optional chaining ?. has no use at the left side of an assignment.
/* let legion12?.strength = 200000;  Will show an error */
