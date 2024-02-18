// arrays
let names: string[] = ['Mario', 'Luigi', 'Peach']
let ages: number[] = [25, 28, 24]

names.push('bowser')
ages.push(30)

let fruits = ['apple', 'orange', 'banana', 'mango']
fruits.push('peach')

const f =   fruits[3]

let things = [1, true, 'hello'] //union type of array

const t = things[0]

// object literals

let user: {firstName: string, age: number, id: number} = {
    firstName : 'Mario',
    age : 30,
    id : 1
}

user.firstName = 'Peach'
user.id = 2

// type inference with object literals

let person = {
    name : 'Luigi',
    score : 35
}

person.name = 'bowser'
person.score = 60

const score =   person.score