"use strict";
// The "new Function" syntax. There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.
// let func = new Function ([arg1, arg2, ...argN], functionBody) - The function is created with the arguments arg1...argN and the given functionBody;
// Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).
// But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.
// So, such function doesn’t have access to outer variables, only to the global ones.
console.log("New Function");
let myFunc = new Function ('x', 'y', 'return x + y'); /* Here’s a function with two arguments */
console.log(myFunc(4,6)); /* Will show 10 */
let sayGoodDay = new Function ('console.log("Good Day!")') /* A function without arguments, with only the function body */
sayGoodDay();  /* Will show "Good Day!" */
let strBye = 'console.log("Bye")'; /* The new Function allows to turn any string into a function. For example, we can receive a new function from a server and then execute it */
let sayBye = new Function(strBye);
sayBye();
console.log("_____________________________");

// Closure. 
// Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).
// But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.
console.log("Closure");
// function getFunc() {
//     let value = "test";
//     let func = new Function('console.log(value)');
//    return func;
// }
  
// getFunc()();  error: value is not defined

function getFunc() {
    let value = "test";
    let func = function() {
        console.log(value)
    };
    return func;
}

getFunc()(); /* Will return "test" */
console.log("_____________________________");