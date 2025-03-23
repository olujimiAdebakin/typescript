

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animall = Bird | Horse;

function moveAnimal(animal: Animall) {
    let speed;
   switch (animal.type) {
       case 'bird':
           speed = animal.flyingSpeed;
           break;
       case 'horse':
           speed = animal.runningSpeed;
   }
   console.log('Moving at speed: ' + speed );
}

moveAnimal({type: 'bird', flyingSpeed: 10});
