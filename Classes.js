"use strict";
// Class basic syntax - Class is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype.
console.log("Class basic syntax");

class Legion {
    constructor (name, number, loyalty) {
        this.name = name;
        this.number = number;
        this.loyalty = loyalty;
  
    } 

    get name () {
        return this._name;
    }
    
    set name (value) {
        if (value.length < 1) {
            console.log("Name is not accurate");
            return;
        } else {
            this._name = value;
        }
    }

    showStatus(){
        console.log(`The legion name is ${this.name}, the legion number is ${this.number}, loyalty is ${this.loyalty}`);
    }
}

let legion1 = new Legion("Luna Wolves", "XVI", "Traitor");
legion1.showStatus(); /* Will return Luna Wolves, XVI, Traitor */
legion1.name = "Sons of Horus"; 
console.log(legion1.name); /* Will return "Sons of Horus" */
console.log(legion1.name); /* Will return "Sons of Horus" */
console.log(legion1.number); /* Will return "I" */
console.log(legion1.loyalty); /* Will return "Traitor" */

let legion2 = new Legion("", "I", "Loyalist"); /* Will return "Name is not accurate" */
legion2.showStatus(); /* Will return "undefined", "I", "Loyalist" */
console.log("_____________________________");

// Class Expression - Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
// Similar to Named Function Expressions, class expressions may have a name. If a class expression has a name, it’s visible inside the class only.
console.log("Class Expression");
let Primarch = class myPrimarch {
    constructor (name) {
        this.name = name;
    }

    showPrimarchClass() {
        console.log(myPrimarch);
    }
}

new Primarch("Ahgron").showPrimarchClass(); /* Will return code of class */
console.log(new Primarch("Angron").name); /* Will return "Angron" */
/* console.log(myPrimarch);  Will return Uncaught ReferenceError ReferenceError: myPrimarch is not defined */

// We can even make classes dynamically “on-demand”
function makeCatClass(catName) {
    // declare a class and return it
    return class {
      catSay() {
        console.log(`${catName} says meow`);
      }
    };
  }

let Cat = makeCatClass("Barsik");
new Cat().catSay(); /* Will show "Barsik says meow" */
console.log("_____________________________");

// Class inheritance
// To extend a class: class Child extends Parent:
// - That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
// When overriding a constructor:
// - We must call parent constructor as super() in Child constructor before using this.
// When overriding another method:
// - We can use super.method() in a Child method to call Parent method.
// Internals:
// - Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.
// - So it’s not safe to copy a method with super from one object to another.
console.log("Class inheritance");
class Chapter extends Legion {
    constructor (name, number, loyalty, chapter){
        super(name, number, loyalty); /* Use super() to inherit variables from the parrent class */
        this.chapter = chapter;
    }

    showChapterStatus(){
        super.showStatus(); /* Use super.method() to inherit method from the parrent class */
        console.log(`Chapter Name is ${this.chapter}`);
    }

}

class Warband extends Legion {
   loyalty = "Traitor"; /* Define property */
    constructor (name, number, warband){
        super(name, number);
        this.warband = warband;
    }

    showStatus(){
        console.log(`The legion name is ${this.name}, the legion number is ${this.number}, The warband name is ${this.warband}, loyalty is ${this.loyalty}`);
    }

}

let chapter1 = new Chapter("Ultremarines", "XIII", "Loyalist", "Novamarines");
chapter1.showChapterStatus(); /* Will show 2 responces: "The legion name is Ultremarines, the legion number is XIII, loyalty is Loyalist", "Chapter Name is Novamarines". */
let warband1 = new Warband("Word Bearers", "XVII", "Ark of Testimony");
warband1.showStatus(); /* Will show 1 responce: "The legion name is Word Bearers, the legion number is XVII, The warband name is Ark of Testimony, loyalty is Traitor" */
console.log("___________________________");

// Class checking: "instanceof" - It returns true if obj belongs to the Class or a class inheriting from it.
console.log("instanceof");
console.log(chapter1 instanceof Chapter); /* Will return true */
console.log(chapter1 instanceof Warband); /* Will return false */
console.log(chapter1 instanceof Legion); /* Will return true */
console.log("___________________________");

// Static properties and methods
// Static methods are used for the functionality that belongs to the class “as a whole”. It doesn’t relate to a concrete class instance.
// Static properties are used when we’d like to store class-level data, also not bound to an instance.
// They are labeled by the word static in class declaration.
console.log("Static properties and methods");
class Car {
    static isDriverLicenceRequired = true;
    
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    static compareCarPrices(car1, car2){
        if (car1.price > car2.price) {
            console.log (`${car1.name} is more expansive then ${car2.name}`);
        } else if (car1.price < car2.price){
            console.log (`${car1.name} is less expansive then ${car2.name}`);
        } else {
            console.log (`${car1.name} has the same price as ${car2.name}`);
        }
    }
    showCar() {
        console.log(`Car name is ${this.name}, Car pice is ${this.price}`);
    }
}

let car1 = new Car ("BMW", 50000);
car1.showCar();
let car2 = new Car ("FW", 10000);
car2.showCar();
console.log(Car.isDriverLicenceRequired); /* Will return true */
console.log(car1.isDriverLicenceRequired); /* Will return undefined */
console.log(car2.isDriverLicenceRequired); /* Will return undefined */
/* car1.compareCarPrices(car1, car2);  Will show error "car1.compareCarPrices is not a function"  */
Car.compareCarPrices(car1, car2); /* Method will be run */

class Bus extends Car {
    constructor (name, price, sections){
        super(name, price);
        this.sections = sections 
    }
    
    showBus() {
        console.log(`Bus name is ${this.name}, Bus pice is ${this.price}, Amount of sections is ${this.sections}`);
    }
}

let bus1 = new Bus ("MAZ", 60000, 2);
bus1.showBus();
let bus2 = new Bus ("PAZ", 30000, 1);
bus2.showBus();
console.log(Bus.isDriverLicenceRequired); /* Will return true */
Bus.compareCarPrices(bus1, bus2); /* Method will be run */
console.log("__________________________________");

// Private - Privates should start with #. They are only accessible from inside the class.
console.log("Private");
class Animal {
    #legs = 4;
    
    get legs (){
        return this.#legs;
    }

    set legs(value) {
        if (value === 2 || value === 4){
            this.#legs = value;
        } else {
            console.log("This is not an animal");
        }
    }
    
    #showAnimalLegs(){
        console.log(`The animal has ${this.#legs}`);
    }
}

let animal1 = new Animal();
/* animal1.#showAnimal();  It is not accessable  */
/* console.log(animal1.#legs); It is not accessable */
console.log(animal1.legs); /* We can get access to private field via getter: Will return 4 */
animal1.legs = 2; /* Setter can be used to update private fields: legs = 2 */
console.log(animal1.legs); /* Getter can be used to receive private fields: legs = 2 */
animal1.legs = 3; /* Will return "This is not an animal". Legs value will not be updated */
console.log(animal1.legs);/*  Will return 2 */

class Predator extends Animal {
    // showAnimalLegs(){
    //     console.log(`The animal has ${this.#legs}`); 
    //     if we inherit from Animal, then we’ll have no direct access to #legs. We’ll need to rely on legs getter/setter
    // }
}

let predator1 = new Predator();
/* console.log(predator1.#legs); It is not accessable */
console.log(predator1.legs); /* We can get access to private field via getter: Will return 4 */
predator1.legs = 2; /* Setter can be used to update private fields: legs = 2 */
console.log(predator1.legs); /* Getter can be used to receive private fields: legs = 2 */
predator1.legs = 3; /* Will return "This is not an animal". Legs value will not be updated */
console.log(predator1.legs); /*  Will return 2 */
console.log("__________________________________");


