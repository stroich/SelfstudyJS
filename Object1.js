"use strict";

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user1 = new Object ();
let user2 = {
};

let employee = {
    name: "Tony",
    age: 33
}; // Create an Object with several properties
console.log(employee.name);
console.log(employee.age);
employee.jobFunction = "QA Specialist"; /* Add a new property to the object */
console.log(employee.name);
console.log(employee.age);
console.log(employee.jobFunction);  
delete employee.jobFunction; /* Delete the propert of the Object  */
console.log(employee.name);
console.log(employee.age);
console.log(employee.jobFunction); /* Will return undefined */

let employee2 = {
    name: "Antony",
    age: 33, 
} /* The last property in the list may end with a comma. Makes it easier to add/remove/move around properties, because all lines become alike. */
console.log(employee2.name);
console.log(employee2.age);

let employee3 = {
    name: "Peter",
    age: 21,
    "remote worker": false
} /* It is allowed to use multiword property names, but then they must be quoted */
console.log(employee3.name);
console.log(employee3.age);
/* console.log(employee3.remote worker); For multiword properties, the dot access doesn’t work. Use the square brackets notation that works with any string */
console.log(employee3["remote worker"]); // Will return false
employee3["remote worker"] = true;
console.log(employee3["remote worker"]); // Will return true

let employee4 = {
    name: "Alex",
    age: 24,
} 
// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string
let key = "name";
console.log(employee4[key]);
// The dot notation cannot be used in a similar way

const employee5 = {
    name: "Max",
}
console.log(employee5.name); /* Will return Max */
employee5.name = "Rob"; /* Object declared via const can be changed */
console.log(employee5.name); /* Will return Rob */
/* employee5 = {
    name: "Lerman",
} Will return an error because it is not allowed to change a variable  */
