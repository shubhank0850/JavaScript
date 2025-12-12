// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)


// With Arrays
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

// With Strings
console.log("");
let username = "Bro Code";
let letters = [...username];
console.log(letters);

// Creating identical shallow copy of an array
// using spread operator
console.log("");
let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
console.log(fruits);
console.log(newFruits);

// Combining two arrays using spread operator
console.log("")
let vegetables = ["carrots", "celery", "potatoes"];

// We can directly add extra elements while combining arrays
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);