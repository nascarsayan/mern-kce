// es6 arrow function
let add = (a, b) => a + b;

// equivalent to

function add2(a, b) {
    return a + b;
}

const x = add(1, 2);
let y = add(3, 4);

// check if two strings are equal

const isEqual = (a, b) => a === b;

// check if two arrays are equal
// prefer === over ==
// prefer !== over !=
const isEqualArray = (a, b) => {
    const lenA = a.length;
    const lenB = b.length;
    if (lenA !== lenB) {
        return false;
    }
    for (let i = 0; i < lenA; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// use let instead of var 
// for declaring variables.

// !IMPORTANT
// when you are developing a frontend app,
// please check out the native APIs
// available first before using any 3rd 
// party libraries (from npm for eg.)

// reduce 3rd party dependencies (from npm)
// Why?
// 1. reduce the size of your bundled app
// 2. reduce the security vulnerabilities
//   - your app is deployed on a server machine.
//   - by taking advantage of the vulnerabilities,
//     hackers can potentially take 
//     control of the server machine.
// 3. reduce breaking changes
// 4. you understand about WEb APIs better.

// a function that runs another function
// every period of time 
// setInterval(() => {
//     console.log('Hello, World!');
// }, 4000)

// // it will call another function after a delay.
// setTimeout(() => console.log(isEqualArray([1], [1])), 2000);

// Template literals
// string interpolation
// javascript inside a string

const personName = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
console.log(`Hello, my name is ${personName} and I am ${age} years old. I work as a ${job} in ${city}. 2 + 2 = ${add(2, 2)}`);

// destructuring
// array destructuring

const numbers = [1, 2, 3];
const [v1, v2, v3] = numbers;
const [v4, ...rest] = numbers;

console.log(v1, v2, v3, v4, rest);

// object destructuring
const person = {
    name: 'John',
    age: 30,
    job: 'Web Developer',
    city: 'Miami'
}

// const { name, age, job, city } = person;

// similar to
// const name = person.name;
// const age = person.age;
// const job = person.job;
// const city = person.city;

const { 
    // name attribute of the object
    // p1Name is the variable name
    name: p1Name,
    age: p1Age,
    job: p1Job,
    city: p1City 
} = person;

console.log(`${[p1Name, p1Age, p1Job, p1City]}`);

// spread operator (...)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 3];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = {
    name: 'John',
    age: 30
}
const obj2 = {
    job: {
        current: 'Web Developer',
        previous: 'UI Designer'
    },
    city: 'Miami'
}
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// default parameters
const greet = (name = 'John') => `Hello, ${name}!`;
console.log(greet());
console.log(greet('Tom'));

// map, reduce, filter

// map

// initial array
const numbers2 = [1, 2, 3, 4, 5];
// function to apply to each element
const doubleFunc = (num) => num * 2;
// new array
const newNumbers = numbers2.map(doubleFunc);
console.log(newNumbers);

const obj4 = {a: 1, b: 2, c: 3};
const obj5 = Object.keys(obj4).map(key => obj4[key] * 2);
console.log(obj5);

// reduce

// reduce reduces an array to a single value.

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// example: let's get the average of cartesian coordinate points

const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 }
];

const total = points
    .reduce(
    (accumulator, currentValue) => {
        accumulator.x += currentValue.x;
        accumulator.y += currentValue.y;
        return accumulator;
    }, { x: 0, y: 0 });

console.log(total);
const avg = {
    x: total.x / points.length,
    y: total.y / points.length
}
console.log(avg);

const acc2 = points
    .reduce(
    (accumulator, currentValue) => {
        accumulator[0].x += currentValue.x;
        accumulator[0].y += currentValue.y;
        return accumulator;
    }, [{ x: 0, y: 0 }])
    .map((value) => {
        return {
            x: value.x / points.length,
            y: value.y / points.length
        }
    });

// diving an object by a number will result in NaN
const acc3 = (points
    .reduce(
    (accumulator, currentValue) => {
        accumulator.x += currentValue.x;
        accumulator.y += currentValue.y;
        return accumulator;
    }, { x: 0, y: 0 })) / points.length;

console.log(acc3);

// filter
const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter(
    (num) => num % 2 === 0);
console.log(evenNumbers);
