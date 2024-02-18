// type guards

type Id1 = number | string;

function swapIdTypes(id: Id1) {
    if (typeof id === 'string') {
        return parseInt(id);
    } else {
        return id;
    }
}

const idOne = swapIdTypes('5');
const idTwo = swapIdTypes(2);

console.log(idOne, idTwo);

// tagged interfaces

interface User1 {
    type: 'user',
    userNm: string,
    email: string,
    id: number
}

interface Person1 {
    type: 'person',
    firstNm: string,
    age: number,
    id: Id1
}

function logDetails(value: User1 | Person1): void {
    if(value.type === 'user') {
        console.log(value.email, value.userNm);
    }

    if(value.type === 'person') {
        console.log(value.firstNm, value.age);
    }
}
