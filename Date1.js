"use strict";

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC
// To create a new Date object call new Date() with one of the following arguments: new Date(). Without arguments – create a Date object for the current date and time
console.log("Date - Without arguments");
let now = new Date ();
console.log(now); /* Will return current date in format Mon Feb 21 2022 11:35:14 GMT+0300 (Moscow Standard Time) */
console.log("---------------------");

// new Date(milliseconds) - Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
console.log("Date - milliseconds");
let Jan01_1970 = new Date(0); /* 0 means 01.01.1970 UTC+0 */
console.log(Jan01_1970); /* Will return Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time) */

let Jan04_1970 = new Date(49 * 3600 * 1000); /* now add 24 hours, get 02.01.1970 UTC+0 */
console.log(Jan04_1970); /* Will return San Jan 03 1970 04:00:00 GMT+0300 (Moscow Standard Time) */

let Dec30_1969 = new Date(-48 * 3600 * 1000); /* Dates before 01.01.1970 have negative timestamps */
console.log(Dec30_1969); /* Tue Dec 30 1969 03:00:00 GMT+0300 (Moscow Standard Time) */
console.log("---------------------");

// new Date(datestring) - If there is a single argument, and it’s a string, then it is parsed automatically.
console.log("datestring");
let date1 = new Date("2015-03-01");
console.log(date1); /* Will return Sun Mar 01 2015 03:00:00 GMT+0300 (Moscow Standard Time) */
console.log("---------------------");

// new Date(year, month, date, hours, minutes, seconds, ms) - Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
// The year must have 4 digits: 2013 is okay, 98 is not.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
console.log("new Date(year, month, date, hours, minutes, seconds, ms)");
let date2 = new Date(1963, 10, 15, 14, 30, 15, 1600); 
console.log(date2); /* Will return Fri Nov 15 1963 14:30:16 GMT+0300 (Moscow Standard Time) */
let date3 = new Date(1962, 4);
console.log(date3); /* Will return Tue May 01 1962 00:00:00 GMT+0300 (Moscow Standard Time) */
console.log("---------------------");

// Access date components. There are methods to access the year, month and so on from the Date object.
// getFullYear() - Get the year (4 digits) . getYear() is deprecated.
// getMonth() - Get the month, from 0 to 11.
// getDate() - Get the day of month, from 1 to 31. 
// getHours()  - Get the corresponding time components.
// getMinutes() - Get the corresponding time components.
// getSeconds() - Get the corresponding time components.
// getMilliseconds()  - Get the corresponding time components. A number, between 0 and 999, representing the milliseconds for the given date according to local time.
// getDay() - Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.
console.log("Access date components");
let date4 = new Date(1988, 4, 21, 2, 25, 11, 999); 
console.log(date4); /* Will return Sat May 21 1988 02:25:11 GMT+0400 (Moscow Summer Time) */
console.log(date4.getFullYear()); /* Will return 1988 */
console.log(date4.getMonth()); /* Will return 4 */
console.log(date4.getDate()); /* Will return 21 */
console.log(date4.getHours()); /* Will return 2 */
console.log(date4.getMinutes()); /* Will return 11 */
console.log(date4.getMilliseconds()); /* Will return 999 */
console.log(date4.getDay()); /* Will return 6 (Saturday) */
console.log("---------------------");
