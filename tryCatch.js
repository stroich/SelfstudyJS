"use strict";

// try...catch construct allows to handle runtime errors. It literally allows to “try” running the code and “catch” errors that may occur in it.
// The syntax is:
// try {
//     // run this code
//   } catch (err) {
//     // if an error happened, then jump here
//     // err is the error object
//   } finally {
//     // do in any case after try/catch
//   }
// There may be no catch section or no finally, so shorter constructs try...catch and try...finally are also valid.
console.log("try...catch");

function func1(str) {
    console.log(str);
}

try {
  console.log("try...catch with object reference");
  func1(str2);
} catch (error) {
    console.log(`Error name: ${error.name};\nError message: ${error.message};\nError stack: ${error.stack}.`);
}
// Error objects have following properties:
// - message – the human-readable error message.
// - name – the string with error name (error constructor name).
// - stack (non-standard, but well-supported) – the stack at the moment of error creation.

try {
    console.log("try...catch without object reference");
    func1(str3);
} catch {
      console.log("Error appears");
} /* If an error object is not needed, we can omit it by using catch instead of catch (err). */

let json = '{ "age": 30 }';
try {
    console.log("try...catch with throw");
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("There is no data");
    } /* We can also generate our own errors using the throw operator. Technically, the argument of throw can be anything, but usually it’s an error object inheriting from the built-in Error class. */
    console.log(user.name);    
} catch (error) {
    console.log(`Error name: ${error.name};\nError message: ${error.message}.`);
}

try {
    console.log("try...catch with finally");
    func1(str4);
} catch (error) {
      console.log(`Error stack: ${error.stack}.`);
} finally {
    console.log("The script has been completed");
} /* The finally clause is often used when we start doing something and want to finalize it in any case of outcome. */
console.log("__________________________________");
