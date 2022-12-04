"use strict";
import {Legion} from "./Module1.mjs";
import {showObj,showArr} from "./Module1.mjs";
import checkEngine from "./Module1.mjs";
import {checkAdult as checkAdd} from "./Module1.mjs";

let legion1 = new Legion("Luna Wolves", "XVI", "Traitor");
legion1.showStatus();
let obj1 = {
    name: "OBJ1",
    number: 1,
}
showObj(obj1);
let arr1 = [1, 3, 5];
showArr(arr1);
checkEngine(false);
console.log(checkAdd(19));

