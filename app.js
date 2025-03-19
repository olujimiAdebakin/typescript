// number
function add(n1, n2, typeResult, phrase) {
    var result = n1 + n2;
    if (typeResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.4;
var showResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, showResult, resultPhrase);
// console.log(result);
// object
var person = {
    name: "olujimi",
    age: 35,
};
console.log(person.name);
// array
var cloth = {
    brand: 'fendi',
    hobbies: ['sport', 'reading']
};
var favouriteSports;
favouriteSports = ['football', 'basketball', 'wrestling'];
console.log(favouriteSports);
for (var _i = 0, _a = cloth.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// tuple
var personTuple = ['olujimi', 35];
console.log(personTuple[0]);
// enum
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READONLY"] = 100] = "READONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var user = {
    name: 'John Doe',
    age: 30,
    role: Role.AUTHOR,
    // other properties
};
if (user.role === Role.AUTHOR) {
    console.log("is an admin");
}
;
// Any
var anyValue = 10;
anyValue = 'Hello World';
anyValue = true;
console.log(anyValue);
// union types
var mixed;
function combine(input1, input2) {
    var result = input1 + input2;
    return result;
}
var combinedAges = combine(30, 20);
console.log(combinedAges);
var combinedNames = combine("Alex", "Rita");
console.log(combinedNames);
var color = 'blue';
color = 'green';
var person1 = {
    name: 'John Doe',
    age: 30,
};
var user = 'lekan';
var user1 = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
};
var user2 = {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
};
// function Return Types
function add(n1, n2) {
    return n1 + n2;
}
// type void
// used when a function is to return nothing
function printResult(num) {
    console.log('Result:' + num);
    return;
}
// type function
var combineNum;
combineNum = add;
console.log(combineNum(10, 12));
// calback function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// unknown type
var userInput = unknown;
var userName = string;
userInput = 6;
userInput = "max";
if (typeof userInput === 'function') {
    userName = userInput;
}
;
// never type
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
