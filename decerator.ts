function Logger(constructor: Function) {
    console.log('Logging....');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Max';

    constructor(name: string) {
         this.name = name;
        console.log('Creating new person.....')
    }
}

const pers = new Person('Maxwell');//maxwell
console.log(pers.name, 'is a boy');//maxwell


function Logging(constructor: Function) {
  console.log("Logging....");
  console.log(constructor);
}

@Logging
class Robot {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    console.log("A new robot is built!");
  }
}

const robot1 = new Robot("RoboMax", "Red");
console.log(robot1.name); // "RoboMax"
console.log(robot1.color); // "Red"
