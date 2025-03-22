"use strict";
// // Function with number type parameters and a boolean flag to determine output
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   let result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }
// const number1 = 5;
// const number2 = 2.4;
// const showResult = true;
// const resultPhrase = "Result is: ";
// add(number1, number2, showResult, resultPhrase);
// // Object type definition
// const personn: { name: string; age: number } = {
//   name: "Olujimi",
//   age: 35,
// };
// console.log(personn.name);
// // Array with type annotation
// const cloth = {
//   brand: "Fendi",
//   hobbies: ["sport", "reading"],
// };
// let favouriteSports: string[] = ["football", "basketball", "wrestling"];
// console.log(favouriteSports);
// for (const hobby of cloth.hobbies) {
//   console.log(hobby.toUpperCase()); // Ensures all hobbies are printed in uppercase
// }
// // Tuple type - fixed-length array with specific types
// const personTuple: [string, number] = ["Olujimi", 35];
// console.log(personTuple[0]);
// // Enum - Assigning predefined constant values
// enum Role {
//   ADMIN = "ADMIN",
//   READONLY = 100,
//   AUTHOR = "AUTHOR",
// }
// const user = {
//   name: "John Doe",
//   age: 30,
//   role: Role.AUTHOR,
// };
// if (user.role === Role.AUTHOR) {
//   console.log("User is an author");
// }
// // Any type - Allows assignment of any value type
// let anyValue: any = 10;
// anyValue = "Hello World";
// anyValue = true;
// console.log(anyValue);
// // Union types - Allows multiple types for a variable
// let mixed: string | number;
// function combine(input1: number | string, input2: number | string) {
//   return input1.toString() + input2.toString(); // Ensures string concatenation
// }
// console.log(combine(30, 20));
// console.log(combine("Alex", "Rita"));
// // Literal types - Restricts values to specific strings
// type Color = "red" | "blue" | "green";
// let color: Color = "blue";
// color = "green";
// // color = 'black'; // Error: Not a valid Color type
// // Type Aliases - Creating reusable types
// type Person = {
//   name: string;
//   age: number;
// };
// const person1: Person = {
//   name: "John Doe",
//   age: 30,
// };
// type Username = string;
// let username: Username = "lekan";
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// const user1: User = {
//   id: 1,
//   name: "John Doe",
//   email: "john.doe@example.com",
// };
// const user2: User = {
//   id: 2,
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
// };
// // Function return types
// function addNumbers(n1: number, n2: number): number {
//   return n1 + n2;
// }
// // Void type - When a function returns nothing
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }
// // Function type - Specifying function signatures
// let combineNum: (a: number, b: number) => number;
// combineNum = addNumbers;
// console.log(combineNum(10, 12));
// // Callback function - Passing a function as an argument
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
// // Unknown type - More restrictive than 'any', requires type checking
// let userInput: unknown;
// let userName: string;
// userInput = 6;
// userInput = "Max";
// if (typeof userInput === "string") {
//   userName = userInput;
// }
// // Never type - Used when a function never returns
// function error(message: string): never {
//   throw new Error(message);
// }
// function infiniteLoop(): never {
//   while (true) {}
// }
