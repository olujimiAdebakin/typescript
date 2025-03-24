"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('Logging....');
    console.log(constructor);
}
let Person = class Person {
    constructor(name) {
        this.name = 'Max';
        this.name = name;
        console.log('Creating new person.....');
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person('Maxwell'); //maxwell
console.log(pers.name, 'is a boy'); //maxwell
function Logging(constructor) {
    console.log("Logging....");
    console.log(constructor);
}
let Robot = class Robot {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        console.log("A new robot is built!");
    }
};
Robot = __decorate([
    Logging
], Robot);
const robot1 = new Robot("RoboMax", "Red");
console.log(robot1.name); // "RoboMax"
console.log(robot1.color); // "Red"
