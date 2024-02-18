// functions

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b;
}

console.log(addTwoNumbers(3, 7));
console.log(subtractTwoNumbers(4, 2));

function addAllNumbers(items: number[]) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}

addAllNumbers([5, 7, 8, 2, 4]);

// return type inference

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`;
}

const result = formatGreeting('Mario', 'Hello!');