"use strict";
// type guards
function swapIdTypes(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id;
    }
}
const idOne = swapIdTypes('5');
const idTwo = swapIdTypes(2);
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.userNm);
    }
    if (value.type === 'person') {
        console.log(value.firstNm, value.age);
    }
}
