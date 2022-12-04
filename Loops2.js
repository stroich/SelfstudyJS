"use strict";

// The do...while loop
/* Structure: do {
    loop body
  } while (condition); */

let x1 = 5;
do {
    console.log(x1);
    x1--;
} while (x1 > 1); /* The loop will be run once until while statement is false. Will return 5, 4, 3, 2. */
console.log("Finished!");

let x2 = 3;
do {
    console.log(x2);
    x2++;
} while (x2 > 10); /* The loop will be run once because while statement is false. Will return 3.  */
console.log("Run!");