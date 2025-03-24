"use strict";
// const names: Array<string> = [];  //string[]
// // name[0].split('');
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });
// promise.then(data => {
//     data.split('')
// })
// // Creating a generic function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ make: 'Toyota' }, 'make'));
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'Manu' });
console.log(objStorage.getItems());
