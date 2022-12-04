"use strict";
import checkEngine from "./Module1.mjs";
import * as module1 from "./Module1.mjs";

let legion1 = new module1.Legion("Luna Wolves", "XVI", "Traitor");
legion1.showStatus();
let obj1 = {
    name: "OBJ1",
    number: 1,
}
module1.showObj(obj1);
let arr1 = [1, 3, 5];
module1.showArr(arr1);
checkEngine(false);
console.log(module1.checkAdult(19));