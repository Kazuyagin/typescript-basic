// union types

let someId: number | string

someId = 1;
someId = '2';

let email: string | null

email = null;
email = 'mario@gmail.com';

type Id = number | string;
let anotherId: Id;

anotherId = 'abcd';
anotherId = 12

console.log(anotherId);

// union type pitfall

function swapIdType(id: Id):Id {
    // can only use props and methods common to
    // only number and string
    // parseInt(id) not -> not allowed
    return id;
}

swapIdType('5');