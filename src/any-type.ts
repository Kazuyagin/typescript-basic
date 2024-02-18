// any type

let age1: any;
let title;

age1 = 30;
age1 = false;

title = {
    hello: 'world'
}

// any type in array

let thingsArr: any[] = ['hello', 10, true, null];
thingsArr.push({id : 12})

// functions and any

function addTogether(value: any) : any {
    return value + value;
}

const resultOne = addTogether(5);
const resultTwo = addTogether('Yo ');

// useful when migrating from js to ts
// because using any won't cause errors initially