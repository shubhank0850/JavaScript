// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code


// Example 1
const hello = (name, age) => {console.log(`Hello! ${name}`)
                         console.log(`You are ${age} years old`)}

hello("Shubhank", 22);


// Example 2
// setTimeout(() => console.log(`Hello!`), 3000);

// Example 3 (Using arrow function with map(), filter(), and reduce())

const numbers = [1, 2, 3, 4, 5, 6];

// Squares
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

// Cubes
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

// filter out even numbers
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

// filter out odd numbers
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

// find the total using reduce()
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
