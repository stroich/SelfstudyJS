"use strict";

function checkAdult(x){
    let yearOfBirth = x;
    switch (yearOfBirth) {
        case 2004:
        case 2005: /* Several variants of case which share the same code can be grouped. */
            console.log("You are not adult!");
            break;
        case 2003:
            console.log("You might be an adult!");
            break;
        case 2002:
        case 2001: /* Several variants of case which share the same code can be grouped. */
            console.log("You are an adult!");
            break;
        default:
            console.log("You have inputted incorrect year of birth!");
    } 
}

checkAdult(2004); 
checkAdult(2003);
checkAdult(2002);
checkAdult("2001"); /* Will return default value because the equality check is always strict. The values must be of the same type to match. */
console.log("The first block is completed!");

/* default can be skipped */
function checkAdultWithoutDefault(x){
    let yearOfBirth = x;
    switch (yearOfBirth) {
        case 2004: 
            console.log("You are not adult!");
            break;
        case 2003:
            console.log("You might be an adult!");
            break;
        case 2002:
            console.log("You are an adult!");
            break;
    } 
}

checkAdultWithoutDefault(2004); 
checkAdultWithoutDefault(2003);
checkAdultWithoutDefault(2002);
checkAdultWithoutDefault(2001); /* Will not be executed */
console.log("The second block is completed!");

/* If break is missed, all case statements below will be executed */
function checkAdultWithoutBreak(x){
    let yearOfBirth = x;
    switch (yearOfBirth) {
        case 2004: 
            console.log("You are not adult!");
        case 2003:
            console.log("You might be an adult!");
        case 2002:
            console.log("You are an adult!");
        default:
            console.log("You have inputted incorrect year of birth!");
    } 
}

checkAdultWithoutBreak(2003); 
console.log("The third block is completed!");

// Both switch and case allow arbitrary expressions
function checkTwoValues(a, b){
    let x = a;
    let y = b;
    switch (+x) {
        case +y + 1: 
            console.log(`${x} is more then ${y} by 1`);
            break;
        case +y + 0:
            console.log(`${x} is equal to ${y}`);
            break;
        case +y - 1:
            console.log(`${x} is less then ${y} by 1`);
            break;
        default:
            console.log(`We can't compare ${x} and ${y}`);
            break;
    } 
}

checkTwoValues("1", false);
checkTwoValues(true, 1);
checkTwoValues(1, 2);
checkTwoValues(1, 3);
checkTwoValues("Test", 1);
console.log("The fourth block is completed!");