// Arrays

// Declaration
// 1
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
// Access elements through indexes
// console.log(myArr[3]);

// 2
const myNewArr = new Array(1, 2, 3, 4, 5)

// Array methods

// to add element
// myArr.push(6)
// console.log(myArr);

// to remove the value/element (last element)
// myArr.pop()

// Inserts new element at the start of array
// myArr.unshift(9)

// Removes the first element from array and returns it (with no argument)
// removes value given in the argument including duplicate value too.
// myArr.shift()

// Checks wheather the element exists in array or not.
// console.log(myArr.includes(9));

// Returns the index of given element
// console.log(myArr.indexOf(9));

// Add all the elements of array into a string
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice & splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


