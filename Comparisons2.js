"use strict";

// Strict conparasion 
console.log(1 == "1");  /* Return true */
console.log(1 === "1"); /* Return false */
console.log(1 !== "1"); /* Return true */

// Comparison with null and undefined
console.log(null === undefined); /* Return false because operands have different data types */
console.log(null == undefined); /* Return true because this is the special rule */

console.log(null > 0);  /* Return false because comparisons convert null to a number, treating it as 0 */
console.log(null >= 0);  /* Return true because comparisons convert null to a number, treating it as 0 */
console.log(null == 0);  /* Return false because equality check does not convert null to a number */

console.log(undefined > 0); /* Return false because comparisons convert undefined to NaN */
console.log(undefined < 0); /* Return false because comparisons convert undefined to NaN */
console.log(undefined == 0); /* Return false because equality check does not convert undefined to a number */