"use strict";

let showGreeting = function() {
    console.log("Hello");
}; /* The function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression. Semicolon is required at the end of  */

console.log(showGreeting); /* shows the function code */
showGreeting(); /* To call a function, use a variable name with a brackets */

// It is allowed to assign the function to other variable
let text1 = showGreeting; 
text1();

function showMessage() {
    console.log("Good Day!");
}

let text2 = showMessage;
text2();
text1 = showMessage;
text1();

// Callback functions. It is allowed to pass another function as a parameter
function checkAdult (age, yes, no) {
    if (age >= 18) {
        yes();       
    } else {
        no();
    }  
}

function showMessageForAdult() {
    console.log("You are adult!");
}

function showMessageForNotAdult() {
    console.log("You are not adult!");
}

checkAdult(18, showMessageForAdult, showMessageForNotAdult);
checkAdult(17, showMessageForAdult, showMessageForNotAdult);

// We can use Function Expressions to write the same function much shorter
function checkExamMark (mark, yes, no) {
    if (mark >= 25) {
        yes();       
    } else {
        no();
    }  
}

checkExamMark(
    20,
    function () {console.log("You have passed the exam!");},
    function () {console.log("You haven't passed the exam!");}
);

checkExamMark(
    25,
    function () {console.log("You have successfully passed the exam!");},
    function () {console.log("You have failed the exam!");}
);
// Here, functions are declared right inside the ask(...) call. 
// They have no name, and so are called anonymous. 
// Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.
showBookTitle("War and Peace"); /* A Function Declaration can be called earlier than it is defined. */

function showBookTitle(title) {
    console.log(`The title of the book is ${title}`);
}

/* A Function Expression can't be called earlier than it is defined.
showSongTitle("Stairway to Heaven"); 

showSongTitle = function(title) {
    console.log(`The title of the song is ${title}`);
} */

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
let carSpeed = 60;
if (carSpeed > 60) {
    function showCarSpeedWarning() {
        console.log("Your speed is highier than allowed!");
    }
}
/* showCarSpeedWarning();  Error: the function is not defined */

let approvalLimit = 1000;
let showApprovalLimitWarning;
if (approvalLimit < 1100) {
    showApprovalLimitWarning = function() {
        console.log("Your approval limit is lower than allowed!");
    }
}
showApprovalLimitWarning(); /* Function will be visible */

