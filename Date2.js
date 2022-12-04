"use strict";
// Setting date components
// The following methods allow to set date/time components:
// - setFullYear(year, [month], [date])
// - setMonth(month, [date])
// - setDate(date)
// - setHours(hour, [min], [sec], [ms])
// - setMinutes(min, [sec], [ms])
// - setSeconds(sec, [ms])
// - setMilliseconds(ms)
// - setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
// Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().
console.log("Setting date components");
let date = new Date ();
console.log(date); /*  Will return today date */

date.setFullYear(1988, 0, 23);
console.log(date); /*  Will return Sat Jan 23 1988 10:37:06 GMT+0300 (Moscow Standard Time) */

date.setMonth(1);
console.log(date); /*  Will return Tue Feb 23 1988 10:37:06 GMT+0300 (Moscow Standard Time) */

date.setDate(21);
console.log(date); /* Will return Sun Feb 21 1988 10:39:17 GMT+0300 (Moscow Standard Time) */

date.setHours(11, 1, 5, 3);
console.log(date.getMilliseconds()); /* Will return 3 */
console.log(date); /* Will return Sun Feb 21 1988 11:01:05 GMT+0300 (Moscow Standard Time) */

date.setMinutes(21, 25, 23);
console.log(date.getMilliseconds()); /* Will return 23 */
console.log(date); /* Will return Sun Feb 21 1988 11:21:25 GMT+0300 (Moscow Standard Time) */

date.setSeconds(28, 25);
console.log(date.getMilliseconds()); /* Will return 25 */
console.log(date); /* Will return Sun Feb 21 1988 11:21:28 GMT+0300 (Moscow Standard Time) */

date.setMilliseconds(999);
console.log(date.getMilliseconds()); /* Will return 999 */
console.log(date); /* Will return Sun Feb 21 1988 11:21:28 GMT+0300 (Moscow Standard Time) */

date.setTime(72 * 3600 * 1000);
console.log(date); /* Will return Sun Jan 04 1970 03:00:00 GMT+0300 (Moscow Standard Time)*/

let date2 = new Date();
date2.setUTCFullYear(1988, 0, 23);
date2.setUTCHours(11, 1, 5, 3);
console.log(date2.getMilliseconds()); /* Will return 3 */
console.log(date2);  /* Will return Sat Jan 23 1988 14:01:05 GMT+0300 (Moscow Standard Time) */
console.log("------------------------");

// Autocorrection. The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.
console.log("Autocorrection");
let date3 = new Date(1988, 12, 25);
console.log(date3); /* Will return Wed Jan 25 1989 00:00:00 GMT+0300 (Moscow Standard Time) */
date3.setHours(date3.getHours() + 25);
console.log(date3); /* Will return Thu Jan 26 1989 01:00:00 GMT+0300 (Moscow Standard Time) */
console.log("------------------------");

// Date to number, date diff. When a Date object is converted to number, it becomes the timestamp same as date.getTime().
console.log("Date to number, date diff");
let date4 = new Date();
console.log(+date4); /* Will return anount of milliseconds */

// The important side effect: dates can be subtracted, the result is their difference in ms. That can be used for time measurements.
let start = new Date ();
for (let i = 0; i < 1000000; i++){
    let doSomething  = i * i * i;
}
let end = new Date ();
console.log(`The difference is ${end - start}`);
console.log("------------------------");

// Date.now(). If we only want to measure time, we don’t need the Date object. There’s a special method Date.now() that returns the current timestamp.
console.log("Date.now()");
let date5 = Date.now();
console.log(date5); /* Will return current timestemp */
console.log("------------------------");

// Benchmarking. 
// If we want a reliable benchmark of CPU-hungry function, we should be careful. For instance, let’s measure two functions that calculate the difference between two dates: which one is faster?
// Such performance measurements are often called “benchmarks”.
console.log("Benchmarking");
function diffSubtract(d1, d2) {
    return d2 - d1;
  }
  
  function diffGetTime(d1, d2) {
    return d2.getTime() - d1.getTime();
  }
  
  function bench(f) {
    let d1 = new Date(0);
    let d2 = new Date();
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(d1, d2);
    return Date.now() - start;
  }
  
  console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
  console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');
  console.log("------------------------");
// For more reliable benchmarking, the whole pack of benchmarks should be rerun multiple times.

// Date.parse from a string. The method Date.parse(str) can read a date from a string.
// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:
// -YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.
console.log("Date.parse from a string");
let date6 = Date.parse("2012-01-26T13:51:50.417-05:00");
console.log(date6); /* Will return the timestamp */
let date7 = new Date(Date.parse("2012-01-26"));
console.log(date7); /* Will return Thu Jan 26 2012 04:00:00 GMT+0400 (Moscow Standard Time) */
let date8 = Date.parse("2012-01-2613:51:50.417-05:00"); /* String is invalid format */
console.log(date8); /* Will return NaN */
console.log("------------------------");