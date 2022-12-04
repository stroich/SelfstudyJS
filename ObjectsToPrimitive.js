"use strict";

// Conversion rules
// The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.
// There are 3 types (hints) of it:
// "string" (for alert and other operations that need a string)
// "number" (for maths)
// "default" (few operators)

console.log("Conversion rules");
let obj1 = {
    name: "test1",
};

let obj2 = {
    name: "test2",
};

console.log(typeof obj1); /* Will return object */
let num = Number(obj1); 
console.log(typeof num); /* Will return number */
let str = `${obj1}`;
console.log(typeof str); /* Will return string */
if (obj1 == 1) {
    console.log("Hi!")
}
console.log("____________________");

// Symbol.toPrimitive
console.log("Symbol.toPrimitive");
let obj3 = {
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
          return 10;
      } else if (hint === 'string') {
          return "This is string";
      } else if (hint === 'default') {
        return true;
       }
    }
};
  
console.log(`${obj3}`); // Will return "This is string"
console.log(+obj3); // Will return 10
console.log(obj3 + ""); // Will return true
console.log("____________________");

//toString/valueOf
// If there’s no Symbol.toPrimitive then JavaScript tries to find methods toString and valueOf:
// For the “string” hint: toString, and if it doesn’t exist, then valueOf (so toString has the priority for string conversions).
// For other hints: valueOf, and if it doesn’t exist, then toString (so valueOf has the priority for maths).
// Methods toString and valueOf come from ancient times. They are not symbols (symbols did not exist that long ago), but rather “regular” string-named methods. They provide an alternative “old-style” way to implement the conversion.
// These methods must return a primitive value. If toString or valueOf returns an object, then it’s ignored (same as if there were no method).
// By default, a plain object has following toString and valueOf methods:
// - The toString method returns a string "[object Object]".
// - The valueOf method returns the object itself.
console.log("toString/valueOf");

let legion1 = {
      name: "Dark Angels",
      number: 1,
      toString() {
        return `name: "${this.name}"`;
    }, /* for hint="string" */
      valueOf() {
        return this.number;
    }, /* for hint="number" or "default" */
}

console.log(`${legion1}`); // Will return name: "Dark Angels"
console.log(+legion1); // Will return 1
console.log(legion1 + 100); // Will return 101
// A conversion can return any primitive type
// The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.
// There is no control whether toString returns exactly a string, or whether Symbol.toPrimitive method returns a number for a hint "number".
// The only mandatory thing: these methods must return a primitive, not an object.
console.log("____________________");

// Further conversions
// As we know already, many operators and functions perform type conversions, e.g. multiplication * converts operands to numbers.
// If we pass an object as an argument, then there are two stages:
// The object is converted to a primitive (using the rules described above).
// If the resulting primitive isn’t of the right type, it’s converted.
console.log("Further conversions");
let legion2 = {
    name: "Ultramarines",
    number: 13,
    toString() {
      return `name: "${this.name}"`;
  }, /* for hint="string" */
    valueOf() {
      return this.number;
  }, /* for hint="number" or "default" */
}

console.log(`${legion2}` + ` are winners`); // Will return name: "Ultramarines are winners"
console.log(legion2 * 2); // Will return 26
console.log("____________________");

