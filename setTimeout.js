"use strict";

// Scheduling: setTimeout - allows us to run a function once after the interval of time.
// The syntax: let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// Parameters:
// func|code - Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.
// delay - The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
// arg1, arg2… - Arguments for the function (not supported in IE9-)
// Zero delay setTimeout. There’s a special use case: setTimeout(func, 0), or just setTimeout(func). This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.
console.log("Zero delay setTimeout");
setTimeout(() => console.log("World")); /* Will be run after the code below */
console.log("Hello"); /* Will be run before the code above */
setTimeout(()=> console.log("_________________________"), 1000);

setTimeout(()=> console.log("setTimeout"), 2000);
function func1 () {
    console.log("Hello!")
}

function func2 (firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}`)
}

setTimeout(func1, 4000); /* This code calls func1() after four seconds */
setTimeout(func2, 3000, "Anton", "Stroich") /* This code calls func2() with arguments after three seconds */
// func2 will be called later then func1 because timeout of func1 is more than timeout of func2
setTimeout((name) => console.log(`Good Bye, ${name}`), 5000, "Peter"); /* But using strings is not recommended, use arrow functions instead of them, like this */
/* setTimeout("console.log('Good Day')", 7000);  If the first argument is a string, then JavaScript creates a function from it. Does not work in Node.js */
/* setTimeout(func2(), 1000, "Tony", "Stroich"); That doesn’t work, because setTimeout expects a reference to a function. And here sayHi() runs the function, and the result of its execution is passed to setTimeout. In our case the result of sayHi() is undefined (the function returns nothing), so nothing is scheduled. */
setTimeout(()=> console.log("_________________________"), 6000);

// Canceling with clearTimeout. A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
setTimeout(()=> console.log("clearTimeout"), 7000);
let timerId = setTimeout(() => console.log("Never happens"), 8000);
setTimeout(()=> console.log(timerId), 9000); // Node.js returns a timer object with additional methods.
clearTimeout(timerId);
setTimeout(()=> console.log(timerId), 10000); // Node.js returns a timer object with additional methods. (doesn't become null after canceling)
setTimeout(()=> console.log("_________________________"), 11000);


// setInterval - The setInterval method has the same syntax as setTimeout:
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...) But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.
// To stop further calls, we should call clearInterval(timerId).
setTimeout(()=> console.log("setInterval"), 12000);
let timerId2 = setInterval((name) => console.log(`Good Bye, ${name}`), 13000, "Mark"); 
setTimeout (() => { 
    clearInterval(timerId2); 
    console.log('Stop'); 
}, 39000); /* Will be run two times and after that "Stop" will appear */
setTimeout(()=> console.log("_________________________"), 40000);

// Nested setTimeout. here are two ways of running something regularly. One is setInterval. The other one is a nested setTimeout.
// The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the previous one. The real delay between func calls for setInterval is less than in the code!
setTimeout(()=> console.log("Nested setTimeout"), 41000);
let i = 0;
let intervalTimerId = setTimeout(function start() {
    if (i < 3) {
    console.log('Start');
    intervalTimerId = setTimeout(start, 2000);
    i = i + 1;
    } else {
        console.log('Finish'); 
    }
  }, 42000);
setTimeout(()=> console.log("_________________________"), 50000);


