"use strict";

function showMessage1() {
    console.log("The first message");
}

showMessage1();
showMessage1(); /* The functon will be excuited twice */

// Functions have access to global variables
let myFirstName = "Anton";

function showFirstName1() {
    console.log(`My first name is ${myFirstName}`);
}

showFirstName1();

function showFirstName2() {
    myFirstName = "Tony"; /* Function can update global variables */
    console.log(`My first name is ${myFirstName}`);
}

showFirstName2();
console.log(myFirstName);
showFirstName1();

// Functions can have local variables
function showLastName() {
    let myLastName = "Stroich";
    console.log(`My last name is ${myLastName}`);
}

showLastName();
// console.log(myLastName); Error will appear because the variable is visible only in function

// Parameters. We can pass arbitrary data to functions using parameters.
function showFirstLastName1(firstName, lastName) {
    console.log(`My first name is ${firstName}, my last name is ${lastName}`);
}

showFirstLastName1("Ivan", "Ivanov");
showFirstLastName1("Peter"); /* The function can be executed only with one parameter. 
The second parameter will be undefined */

function showFirstLastName2(firstName = "unknown", lastName = "unknown") {
    console.log(`My first name is ${firstName}, my last name is ${lastName}`);
} /* It is allowed to set a value of parameter by default */

showFirstLastName2("Nastya", "Ivlieva");
showFirstLastName2("Max");
showFirstLastName2();

// Returning a value. A function can return a value back into the calling code as the result.
function calculateYearSalary(monthSalary) {
    return monthSalary = 12 * monthSalary;
} 

let yearSalary = calculateYearSalary(1000);
console.log(yearSalary);

function checkAdult(age) {
    if (age >= 18) {
        return "adult";
    } else if (age < 18) {
        return "not adult";
    } else {
        return "not defined age";
    }
} /* Function can have several returns. */

let adult1 = checkAdult(18);
console.log(adult1);
let adult2 = checkAdult(17);
console.log(adult2);
let adult3 = checkAdult("a16");
console.log(adult3);

function checkEngine(engineStatus) {
    if (engineStatus !== true) {
        return;
    }
    console.log("Engine is running"); /* Return will stop execution of a function */ 
}

checkEngine(true); /* "Engine is running" will be presented */
checkEngine(1); /* Nothing will be presented */
console.log("Result of running checkEngine(1) will not be presented in the console")
let isEngineRunning = checkEngine(false); 
console.log(isEngineRunning); /* Will return undefined because empty return is equal to return undefined */ 

/* A function should do only one action. 
If it is required to do several actions, You should write several functions */
function checkAmountOfMonth(numberOfMonths) {
    if (numberOfMonths > 0) {
        return true;
    }
    return false;
}

function calculateMonthSalary (yearSalary, amountOfMonths) {
    if (!checkAmountOfMonth(amountOfMonths)) {
        return yearSalary;
    }
    return yearSalary / amountOfMonths;
}

let myMonthSalary1 = calculateMonthSalary(24000, 10);
console.log(myMonthSalary1); /* Will return 2400 */
let myMonthSalary2 = calculateMonthSalary(1000);
console.log(myMonthSalary2); /* Will return 1000 */