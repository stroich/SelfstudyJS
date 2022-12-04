"use strict";

// The for loop
/* Structure:
for (begin; condition; step) {
    loop body
  } */
  
let x1;
for(x1 = 10; x1 > 7; x1--){
    console.log(x1); /* Will return 10, 9, 8 */
}
console.log("Done!");

for(let x2 = 0; x2 < 5; x2++){ /* User can declare variable in the begin of a loop */
    console.log(x2); /* Will return 0, 1, 2, 3, 4 */
}
console.log("Completed!");

let x3 = 20;
for(; x3 < 23; x3++){ /* User can skip the begin part of a loop */
    console.log(x3); /* Will return 20, 21, 22 */
}
console.log("Finished!");

let x4 = 30;
for(; x4 > 27;){ /* User can skip the step part of a loop */
    console.log(x4--); /* Will return 30, 29, 28 */
}
console.log("End!");
