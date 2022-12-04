"use strict";

// The while loop
/* Structure: while (condition) {
    code
    "loop body"
  } */
let x1 = 5;
while(x1 < 9){ /* The loop will be excuted untill value in brackets is false */
    console.log(x1);
    x1++;
} /* Will return 5, 6, 7, 8 */

let x2 = 4;
while(x2){ /* while(x2) is the same as while(x2 !=0) */
    console.log(x2);
    x2--; /* Will return 4, 3, 2, 1 */
}

let x3 = 3;
while(x3 > 1) console.log(`The value is ${x3--}`); /* Brackets are not required not required for a single-line body. Will return 3 and 2. */

// Breaking the loop
let x4 = 5;
while(true) {
    if (x4 == 7) {
        break; /* Break will stop execution of the loop */
    }
    console.log(x4); /* Will return 5, 6 */
    x4++;   
}
console.log(`The final value is ${x4}`);  /* Will return 7 */

// Continue to the next iteration
let x5 = 0;
while (x5 < 12) {
    x5++;
    if (x5 % 2 == 0) {
        continue; /* Continue will go back to the top of the loop - including checking the condition. */  
    }
    console.log(`${x5} is uneven value`); /* Will return 1, 3, 5, 7, 9, 11 */
}

// Labels for break
let x6 = 6;
let y6 = 5;
stopLoop : while (x6 < 10) {   
    while(y6 < 10){
        console.log("x = " + x6 + "; y = " + y6);
        x6++;
        y6++;       
        if (y6 === 9) {
            break stopLoop; // Both loops will be stopped
        }      
    }     
}
console.log("Completed!");

// Labels for continue
let x7 = 11;
let y7 = 10;
stopLoop : while (x7 < 15) {   
    console.log("x = " + x7 + "; y = " + y7);
    while(y7 < 15){       
        x7++;
        y7++;       
        if (y7 < 14) {
            continue stopLoop; // Code execution jumps to the 1st loop
        }      
    }     
}
console.log("Done!");

/* No break/continue to the right side of ‘?’  
(i > 5) ? alert(i) : continue; Stops working: there’s a syntax error. */