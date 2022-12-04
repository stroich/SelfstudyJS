"use strict";
 
// Recursion - If a function calls itself to solves a task, That’s called recursion.
console.log("Recursive thinking")
function raiseNumberToNaturalPower1(x, n){
    if (n === 1) {
        return x; /* It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x. */
    } else if (n === 0) {
        return 1;
    }
    else {
        return x * raiseNumberToNaturalPower1(x, n - 1); /* This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). */
    }
}

function raiseNumberToNaturalPower2(x, n){
    let result = 1;
    for (let i = 0; i < n; i++){
        result = result * x;
    }
    return result;
} /* Any recursion can be rewritten as a loop. The loop variant usually can be made more effective but recursion can give a shorter code, easier to understand and support. */

console.log(raiseNumberToNaturalPower1(2, 0)); /* Will return 1 */
console.log(raiseNumberToNaturalPower2(2, 0)); /* Will return 1 */
console.log(raiseNumberToNaturalPower1(2, 1)); /* Will return 2 */
console.log(raiseNumberToNaturalPower2(2, 1)); /* Will return 2 */
console.log(raiseNumberToNaturalPower1(2, 2)); /* Will return 4 */
console.log(raiseNumberToNaturalPower2(2, 2)); /* Will return 4 */
console.log(raiseNumberToNaturalPower1(2, 3)); /* Will return 8 */
console.log(raiseNumberToNaturalPower2(2, 3)); /* Will return 8 */
console.log(raiseNumberToNaturalPower1(2, 4)); /* Will return 16 */
console.log(raiseNumberToNaturalPower2(2, 4)); /* Will return 16 */
// The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them. 
console.log("_________________");

console.log("Recursion is usually shorter");
function additionNumbers(x, n){
    return (n === 0)? x: x + additionNumbers(x, n - 1);
} /* A recursive solution is usually shorter than an iterative one. */

console.log(additionNumbers(2, 0)); /* Will return 2 */
console.log(additionNumbers(2, 1)); /* Will return 4 */
console.log(additionNumbers(2, 2)); /* Will return 6 */
console.log(additionNumbers(2, 3)); /* Will return 8 */
console.log(additionNumbers(2, 4)); /* Will return 10 */
console.log("_________________");


// Recursive traversals
console.log("Recursive traversals");
let factory = {
    shop: [{
      name: 'Ivan',
      salary: 12000,
    }, {
      name: 'Slava',
      salary: 16000,
    }], /* Shop is a unit of the factory. There is no any group */
  
    development: {
      bags: [{
        name: 'Peter',
        salary: 20000
      }, {
        name: 'Alex',
        salary: 18000,
      }],
  
      belts: [{
        name: 'Nick',
        salary: 21000,
      }] /* Development is a unit of the factory. There are two groups of development: bags and belts */
    }
  }; /* Sum of all salaries in factory is equal to 87000 */

function summarizeSalaries(unit){
    if (Array.isArray(unit) === true){
          return unit.reduce((previous, current) => previous + current.salary, 0) // sum the array from the unit
    } else {
          let sum = 0;
          for (let group of Object.values(unit)){
              sum = sum + summarizeSalaries(group);
        }
          return sum; // recursively call for groups, sum the results
    }
}

console.log(summarizeSalaries(factory)); /* Will return 87000 */
console.log("______________________");

// Recursive structures. Linked list:
// The linked list element is recursively defined as an object with:
// - value.
// - next property referencing the next linked list element or null if that’s the end.
console.log("Recursive structures.");
let list1 = {
  number: 1, 
  next: {
    number: 2, 
     next: {
      number: 3, 
      next: {
        number: 4, 
        next: null
      }
     }
  }
};

function printList(list){
  console.log(`The ${list.number} element of the list`);
  if (list.next !== null) {
    printList(list.next);
  }
}

printList(list1);
console.log("______________________");

// The list can be easily split into multiple parts and later joined back
console.log("Split the List");
let list2 = list1.next.next;
list1.next.next = null;
console.log(`The number of the 1st elment of 1st list is ${list1.number}`); /* Will return 1 */
console.log(`The number of the 2nd elment of 1st list is ${list1.next.number}`); /* Will return 2 */
console.log(`The number of the 1st elment of 2nd list is ${list2.number}`); /* Will return 3 */
console.log(`The number of the 2nd elment of 2nd list is ${list2.next.number}`); /* Will return 4 */
console.log("______________________");

// To join
console.log("Join splitted list");
list1.next.next = list2;
console.log(list1.number); /* Will return 1 */
console.log(list1.next.number); /* Will return 2 */
console.log(list1.next.next.number); /* Will return 3 */
console.log(list1.next.next.next.number); /* Will return 4 */
console.log("______________________");

// To prepend a new value, we need to update the head of the list
console.log("Add an element in the list");
list1 = {number: 6, next: list1};
printList(list1); /* Will return 6, 1, 2, 3, 4*/
console.log("______________________");

console.log("Remove an element in the list");
// To remove a value from the middle, change next of the previous one
list1.next.next = list1.next.next.next; /* We made list.next jump over 2 to value 3. The value 2 is now excluded from the chain. */
printList(list1); /* Will return 6, 1, 3, 4 */
console.log("______________________");