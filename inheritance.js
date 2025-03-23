"use strict";
// basic inheritance type
// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method that can be inherited by child classes
    makeSound() {
        console.log("Some generic sound...");
    }
}
// Child class that extends Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }
    // New method specific to Dog
    bark() {
        console.log(`${this.name} is barking!`);
    }
}
// Creating an instance of Dog
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // Outputs: Buddy
myDog.makeSound(); // Outputs: Some generic sound... (inherited method)
myDog.bark(); // Outputs: Buddy is barking!
// access modifiers
// Parent class
class PersonClass {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    // Public method accessible anywhere
    introduce() {
        console.log(`Hi, my name is ${this.firstName}.`);
    }
}
// Child class
class Employeee extends PersonClass {
    constructor(firstName, age, role) {
        super(firstName, age); // Calls the constructor of the parent class
        this.role = role;
    }
    // Public method to display details
    showDetails() {
        console.log(`${this.firstName} is an ${this.role}.`);
        // console.log(this.age); ❌ Error: 'age' is private and cannot be accessed here
    }
}
// Creating an instance of Employee
const emp = new Employeee("John", 30, "Engineer");
emp.introduce(); // Outputs: Hi, my name is John.
emp.showDetails(); // Outputs: John is an Engineer.
// Method Overriding
// Parent class
class Vehicle {
    // Method that will be overridden
    drive() {
        console.log("The vehicle is moving.");
    }
}
// Child class
class Carr extends Vehicle {
    // Overriding the drive method
    drive() {
        console.log("The car is driving fast!");
    }
}
// Creating an instance of Car
const myCar = new Carr();
myCar.drive(); // Outputs: The car is driving fast! (overridden method)
