"use strict";

// Computed properties
let title = "QA";
let employee = {
    name: "Tony",
    [title] : "It Specialist", /* The meaning of a computed property is: [jobFunction] means that the property name should be taken from jobFunction */
};
console.log(employee.QA); /* Will return "It Specialist" */

// Property value shorthand
function createEmployee(name, title) {
    return {
        name,
        title,
    };
}
let employee2 = createEmployee("Mark", "BA");
console.log(employee2.name);
console.log(employee2.title);
console.log(employee2.age); /* Reading a non-existing property just returns undefined */
console.log(employee2.age === undefined); /* Will return true if property does not exist */

// “in” operator
console.log("name" in employee2); // Return true
console.log("age" in employee2); // Return false

/* Please note that on the left side of in there must be a property name. That’s usually a quoted string.
If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance */
let key = "title";
console.log(key in employee2); // Return true

// The “for…in” loop
for (key in employee2) {
    console.log(key);
    console.log(employee2[key]);
}

let codes1 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
  };
  
  for (let code in codes1) {
    console.log(code); // Will return +49, +41, +44, +1 because properties will be considered as strings and will be returned in order of adding
  }

let codes2 = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };
  
  for (let code in codes2) {
    console.log(code); // Will return 1, 41, 44, 49 because properties will be considered as integer
  }

// Property names limitations
let obj = {
  for: 1,
  let: 2,
  return: 3
};  /* There are no limitations on property names. */
console.log( obj.for + obj.let + obj.return ); // Will return 6

