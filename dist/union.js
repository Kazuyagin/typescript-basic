"use strict";
// union types
let someId;
someId = 1;
someId = '2';
let email;
email = null;
email = 'mario@gmail.com';
let anotherId;
anotherId = 'abcd';
anotherId = 12;
console.log(anotherId);
// union type pitfall
function swapIdType(id) {
    // can only use props and methods common to
    // only number and string
    // parseInt(id) not -> not allowed
    return id;
}
swapIdType('5');
