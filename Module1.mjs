"use strict";
// Modules - A module is a file. Modules have several differences:
// - Deferred by default.
// - Async works on inline scripts.
// - To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
// - Duplicate external scripts are ignored.
// - Modules have their own, local top-level scope and interchange functionality via import/export.
// - Modules always use strict.
// - Module code is executed only once. Exports are created once and shared between importers.
// - When we use modules, each module implements the functionality and exports it. Then we use import to directly import it where it’s needed. The browser loads and evaluates the scripts automatically.


export class Legion {
    constructor (legionName, legionNumber, loyalty) {
        this.legionName = legionName;
        this.legionNumber = legionNumber;
        this.loyalty = loyalty;
  
    }

    showStatus(){
        console.log(`The legion name is ${this.legionName}, the legion number is ${this.legionNumber}, loyalty is ${this.loyalty}`);
    }
}

export default function checkEngine(engineStatus) {
    if (engineStatus !== true) {
        console.log("Engine is not running");
    } else {
        console.log("Engine is running");    
    } 
}

export function checkAdult(age) {
    if (age >= 18) {
        return "adult";
    } else if (age < 18) {
        return "not adult";
    } else {
        return "not defined age";
    }
}

function showObject(obj){
    for (let element in obj) {
        console.log(`${element}: ${obj[element]}`);
    }
}

function showArray(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

export {showObject as showObj, showArray as showArr};
