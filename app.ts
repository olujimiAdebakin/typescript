
// number

function add(n1: number, n2: number, typeResult: boolean, phrase: string) {
    
    let result = n1 + n2;
    if (typeResult) {
    console.log(phrase + result)
    } else{
        return result;
    }
}

const number1 = 5;
const number2 = 2.4;
const showResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, showResult, resultPhrase);
// console.log(result);

// object

const person: {
    name: string;
    age: number;
} = {
    name: "olujimi",
    age: 35,
   
};
console.log(person.name);


// array

const cloth = {
    brand: 'fendi',
    hobbies: ['sport', 'reading']
}

let favouriteSports: string[];
favouriteSports = ['football', 'basketball', 'wrestling'];
console.log(favouriteSports);

for (const hobby of cloth.hobbies) {
    console.log(hobby.toUpperCase());
}

// tuple

const personTuple: [string, number] = ['olujimi', 35];
console.log(personTuple[0]);


// enum

enum Role { ADMIN = 'ADMIN', READONLY = 100, AUTHOR = 'AUTHOR' };

const user = {
    
    name: 'John Doe',
    age: 30,
    role: Role.AUTHOR,
    // other properties
}

if (user.role === Role.AUTHOR) {
    console.log( "is an admin");
};


// Any

let anyValue: any = 10;
anyValue = 'Hello World';
anyValue = true;

console.log(anyValue);


// union types

let mixed: string | number;

function combine(input1: number | string, input2: number | string) {
    const result = input1 + input2;
    return result;
}

const combinedAges = combine(30, 20);
console.log(combinedAges);

const combinedNames = combine("Alex", "Rita");
console.log(combinedNames);


// literal type

type Color = 'red' | 'blue' | 'green';

let color: Color = 'blue';
color = 'green';
// color = 'balck'; //error


// type aliases

type Person = {
    name: string;
    age: number;
};

const person1: Person = {
    name: 'John Doe',
    age: 30,
};

type Username = string;
let user: Username = 'lekan';

type User = {
    id: number;
    name: string;
    email: string;
}

const user1: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
}

const user2: User = { 
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
}


// function Return Types

function add(n1: number, n2: number): number{
    return n1 + n2
}

// type void
// used when a function is to return nothing
function printResult(num: number): void {
    console.log('Result:' + num);
    return;
}

// type function

let combineNum: (a: number, b: number) => number;

combineNum = add; 
console.log(combineNum(10,12));


// calback function

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});


// unknown type

let userInput = unknown;
let userName = string;

userInput = 6;
userInput = "max";
if (typeof userInput === 'function'){
    userName = userInput;
};


// never type

function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}



