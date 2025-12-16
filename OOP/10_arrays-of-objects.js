
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


// console.log(fruits[4].calories);

fruits.push({name: "grapes", color: "purple", calories: 62});

// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// removes elements in crretain range
// fruits.splice(1, 2);
// console.log(fruits);

// looping through the elements
// ----- forEach() -----

fruits.forEach(fruit => console.log(fruit));

// ----- map() -----
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// ----- filter() -----
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ----- reduce() -----

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(`name: ${maxFruit.name}, cal: ${maxFruit.calories}`);

console.log(`name: ${minFruit.name}, cal: ${minFruit.calories}`);