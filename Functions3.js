"use strict";

// Arrow functions
let showMessage = () => console.log("The first message");
showMessage();

// Arrow function written without brackets can return a value back as the result without return.
let calculateYearSalary = (monthSalary) => monthSalary = 12 * monthSalary;
let yearSalary = calculateYearSalary(1000);
console.log(yearSalary);

// Arrow Functions have access to global variables
let myFirstName = "Anton";
let showFirstName1 = () => console.log(`My first name is ${myFirstName}`);
showFirstName1();

// Multiline arrow functions. We need to use return in brackets.
let showFirstName2 = () => {
    myFirstName = "Tony"; /* Arrow function can update global variables */
    console.log(`My first name is ${myFirstName}`);
}

showFirstName2();
console.log(myFirstName);
showFirstName1();

// Arrow functions can have local variables
let showLastName = () => {
    let myLastName = "Stroich";
    console.log(`My last name is ${myLastName}`);
}

showLastName();
// console.log(myLastName); Error will appear because the variable is visible only in function

// We need to use return in brackets in multiline arrow functions.
let calculateMonthSalary = (yearSalary) => {
    let monthSalary = yearSalary / 12;
    return monthSalary
}

let myMonthSalary = calculateMonthSalary(1200);
console.log(myMonthSalary);

// Parameters. We can pass arbitrary data to Arrow functions using parameters.It is allowed to set a value of parameter by default.
let  showFirstLastName = (firstName = "unknown", lastName = "unknown") => {
    console.log(`My first name is ${firstName}, my last name is ${lastName}`);
} 

showFirstLastName("Ivan", "Ivanov");
showFirstLastName("Peter"); /* The function can be executed only with one parameter. 
The second parameter will be by default */
showFirstLastName();  /* The function can be executed without one parameters. 
All parameters will be by default */

// We can use Arrow functions to create anonimus functions
let checkExamMark = (mark, yes, no) => {
    if (mark >= 25) {
        yes();       
    } else {
        no();
    }  
}

checkExamMark(
    20,
    () => {console.log("You have passed the exam!");},
    () => {console.log("You haven't passed the exam!");}
);

checkExamMark(
    25,
    () => {console.log("You have successfully passed the exam!");},
    () => {console.log("You have failed the exam!");}
);