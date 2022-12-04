"use strict";
const fs = require("fs/promises");
// The async keyword before a function has two effects:
// - Makes it always return a promise.
// - Allows await to be used in it.
//The await keyword before a promise makes JavaScript wait until that promise settles, and then:
// - If it’s an error, an exception is generated — same as if throw error were called at that very place.
// - Otherwise, it returns the result.
// With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. 
// Also Promise.all is nice when we are waiting for many tasks simultaneously.
// Can’t use await in regular functions
console.log("async/await");

async function getText(path) {
  try {
    const text = await fs.readFile(path, { encoding: 'utf8' });
    console.log(text);
  } catch (error) {
    console.log(`File is not available: ${error.name}, ${error.message}, ${error.stack}`);
  }
}

getText('../Text1.txt');
getText('D:\\Self-Development\\Mentoring\\JS_Basic\\Project_1');

async function showOne() {
    return 1;
  } /* Will return Promise */
  
showOne().then(console.log);  /* Will show 1 */

async function showTwo() {
    return Promise.resolve(2);
  } /* Will return Promise */
  
showTwo().then(console.log);  /* Will show 2 */

async function showText(text) {
      let input = new Promise((resolve, reject) => {
          if (text !=="") {
              setTimeout(() => resolve(`++${text}`), 1000); 
          } else {
            throw "Error found!";
        }      
    }); 
   let result = await input;   /* The keyword await makes JavaScript wait until that promise settles and returns its result. */ 
   return result;   
}

showText("").then(console.log).catch(console.log); /*  Will return "Error found!"" */  
showText("Hello!").then(console.log); /*  Will return "++Hello" after 1 second */

async function showText2(text) {
  let input = new Promise((resolve, reject) => {
      if (text !=="") {
          setTimeout(() => resolve(`--${text}`), 1000); 
      } else {
          setTimeout(() => reject(`Error`), 1000);
      }      
  }); 
  let result = await input;   /* The keyword await makes JavaScript wait until that promise settles and returns its result. */ 
  return result;   
}

showText2("").then(console.log).catch(console.log); /*  Will return "Erorr" after 1 second */
showText2("Hello!").then(console.log); /*  Will return "--Hello" after 1 second */

