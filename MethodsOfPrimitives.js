"use strict";
// The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. They provide different sets of methods.
// Constructors String/Number/Boolean are for internal use only. Objects are always truthy in if
console.log("Constructors String/Number/Boolean");
let x = new Number(0);
if (x) {
    console.log("zero is truthy");
}
console.log("__________________");
// null/undefined have no methods

// String

// Special characters
console.log("special characters");
console.log("Hello\nWorld"); /*  \n New line. Will show string in two rows */
console.log("Hello\tWorld"); /*  \t Tab. Will add spaces between two words */
console.log("Hello \"World"); /*  \' Quotes. Will add quotes between two words */
console.log("__________________");

//String length. str.length is a numeric property, not a function. There is no need to add parenthesis after it.
console.log("String length");
console.log("Hello".length); /* Will return 5. */
console.log("Hello World".length); /* Will return 11.  Space will be considered as one symbol.*/
console.log("Hello\nWorld".length); /* \n Will return 11. Will be considered as one symbol. */
console.log("__________________");

// Accessing characters
// To get a character at position pos, use square brackets [pos] or call the method str.charAt(pos). The first character starts from the zero position
console.log("[pos] and charAt(pos)");
let str1 = "Text";
console.log(str1[0]); /* Will return T */
console.log(str1[2]); /* Will return x */
console.log(str1[4]); /* Will return undefined */
console.log(str1.charAt(0)); /* Will return T */
console.log(str1.charAt(2)); /* Will return x */
console.log(str1.charAt(4)); /* Will return empty string */
console.log("__________________");

// Strings are immutable
console.log("Strings are immutable");
let str2 = "Text";
// str2[0] = "t";  Will return error 
str2 = "t" + str2[1] + str2[2] + str2[3]; /* The usual workaround is to create a whole new string and assign it to str instead of the old one. */
console.log(str2); /* Will return text */
console.log("__________________");

// Methods toLowerCase() and toUpperCase() change the case
console.log("Changing the case");
let str3 = "Text";
console.log(str3.toLowerCase()); /* Will conver string to lower case */
console.log(str3.toUpperCase()); /* Will conver string to upper case */
console.log("__________________");

// Searching for a substring
// The indexOf(searchValue, fromIndex) method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// searchValue (Mandatory) The string value to search for
// fromIndex (Optional) An integer representing the index at which to start the search. Defaults to 0.
console.log("indexOf(searchValue, fromIndex)");
let str4 = "Sons of Horus";
console.log(str4.indexOf("o")); /* Will return 1 */
console.log(str4.indexOf("o", 1)); /* Will return 5 */
console.log(str4.indexOf("a")); /* Will return -1 */
console.log("__________________");

// The lastIndexOf(searchValue, fromIndex) method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
// searchValue (Mandatory) The string value to search for
// fromIndex (Optional) An integer representing the index at which to start the search. Defaults to 0.
console.log("lastIndexOf(searchValue, fromIndex)");
let str5 = "Sons of Horus";
console.log(str5.lastIndexOf("o")); /* Will return 9 */
console.log(str5.lastIndexOf("o", 2)); /* Will return 1 */
console.log(str5.lastIndexOf("a")); /* Will return -1 */
console.log("__________________");

// The bitwise NOT trick - the test if ( ~str.indexOf("...") ) is truthy only if the result of indexOf is not -1. In other words, when there is a match.
console.log("The bitwise NOT trick");
let str6 = "Sons of Horus";
if (~str6.lastIndexOf("o")) {
    console.log("Found!")
}
console.log("__________________");

// The includes(searchString, position Optional) method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
// searchString - A string to be searched for within str.
// position Optional - The position within the string at which to begin searching for searchString. (Defaults to 0.)
console.log("includes(searchValue, fromIndex)");
let str7 = "Sons of Horus";
console.log(str7.includes("o")); /* Will return true */
console.log(str7.includes("o", 3)); /* Will return true */
console.log(str7.includes("a")); /* Will return false */
console.log("__________________");

// The startsWith(searchString, position Optional) method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// searchString - A string to be searched for within str.
// position Optional - The position within the string at which to begin searching for searchString. (Defaults to 0.)
console.log("startsWith(searchValue, fromIndex)");
let str8 = "Sons of Horus";
console.log(str8.startsWith("Sons")); /* Will return true */
console.log(str8.startsWith("of", 4)); /* Will return false */
console.log(str8.startsWith("of", 5)); /* Will return true */
console.log(str8.startsWith("Ultra")); /* Will return false */
console.log("__________________");

// The endsWith(searchString, length) method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
// searchString - A string to be searched for within str.
// length - if provided, it is used as the length of str. Defaults to str.length.
console.log("endsWith(searchValue, length)");
let str9 = "Sons of Horus";
console.log(str9.endsWith("Horus")); /* Will return true */
console.log(str9.endsWith("of", 6)); /* Will return false */
console.log(str9.endsWith("of", 7)); /* Will return true */
console.log(str9.endsWith("Ultra")); /* Will return false */
console.log("__________________");

// Getting a substring
// The slice(start [, end]) - Returns the part of the string from start to (but not including) end
// beginIndex - The zero-based index at which to begin extraction
// endIndex (Optional) - The zero-based index before which to end extraction. The character at this index will not be included.
console.log("endsWith(slice(start [, end])");
let str10 = "Thousand Sons";
console.log(str10.slice(9)); /* Will return "Sons" */
console.log(str10.slice(5, 8)); /* Will return "and" */
console.log(str10.slice(14)); /* If beginIndex is greater than or equal to str.length, an empty string is returned. */
console.log(str10.slice()); /* If beginIndex is omitted, undefined, or cannot be converted to a number, slice() begins extraction from the beginning of the string. */
console.log(str10.slice(-6)); /* Negative arguments are supported. Will return "d Sons" */
console.log("__________________");

// The substring(start [, end]) - Returns the part of the string between start and end.
// beginIndex - The index of the first character to include in the returned substring.
// endIndex (Optional) - The index of the first character to exclude from the returned substring.
console.log("substring(start [, end])");
let str11 = "Night Lords";
console.log(str11.substring(6)); /* Will return "Lords" */
console.log(str11.substring(4, 7)); /* Will return "t L" */
console.log(str11.substring(12)); /* Will return empty string because if an argument value that is greater than stringName.length is treated as if it were stringName.length*/
console.log(str11.substring()); /* If indexStart is omitted, undefined, or cannot be converted to a number, the method begins extraction from the beginning of the string. */
console.log(str11.substring(-6, 1)); /* Negative arguments will be considered as 0.  Will return "N" */
console.log(str11.substring(7, 4)); /* If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped. Will return "t L" */
console.log("__________________");

// The substr(start [, length]) - Returns the part of the string from start, with the given length.
// start - The index of the first character to include in the returned substring.
// length (Optional) - The number of characters to extract.
// Formally, substr has a minor drawback: it is described not in the core JavaScript specification, but in Annex B, which covers browser-only features that exist mainly for historical reasons. So, non-browser environments may fail to support it. But in practice it works everywhere.
console.log("substr(start, length)");
let str12 = "Word Bearers";
console.log(str12.substr(4)); /* Will return " Bearers". If length is omitted, substr() extracts characters to the end of the string. */
console.log(str12.substr(5, 4)); /* Will return "Bear". */
console.log(str12.substr(12)); /* Will return empty string because if start argument is more than length */
console.log(str12.substr()); /* If length is omitted or undefined, substr() extracts characters to the end of the string. */
console.log(str12.substr(-6, 1)); /* Negative start argument will be considered as 0.  Will return "e". */
console.log(str12.substr(1, -4)); /* If length is a negative number, it is treated as 0. Will return empty string. */
console.log("__________________");

// The codePointAt(pos) - Returns the code for the character at position pos
let str13 = "Zz"
console.log("codePointAt(pos)");
console.log(str13.codePointAt(1)); // 122
console.log(str13.codePointAt(0)); // 90
// A lowercase letter is always greater than the uppercase
console.log("__________________");

// The String.fromCodePoint(code) - Creates a character by its numeric code
console.log("fromCodePoint(code)");
console.log(String.fromCodePoint(122)); // Will return "z"
console.log(String.fromCodePoint(90)); // Will return "Z"
console.log("__________________");

// The localeCompare(compareString, locales, options) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:
// - Returns a negative number if str is less than str2.
// - Returns a positive number if str is greater than str2.
// - Returns 0 if they are equivalent.
// compareString - The string against which the referenceStr is compared.
// locales and options - These arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. 
// In implementations which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation-dependent.
console.log("localeCompare(compareString, locales, options)");
let str14 = "Za";
let str15 = "za";
let str16 = "Za";
console.log(str14.localeCompare(str15)); /* Will return 1 */
console.log(str15.localeCompare(str14)); /* Will return -1 */
console.log(str14.localeCompare(str16)); /* Will return 0 */
console.log("__________________");