/********* Numbers *********/

const score = 300

const balance = new Number(100)
// console.log(balance);

// Converting number to string
// By converting the num to string we can get some additional properties that are helpful
// for examole
// console.log(balance.toString().length);


// toFixed() method:
// Returns a string representing a number in fixed-point notation.
// fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20
// console.log(balance.toFixed(2));

// toPrecision() method:
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// precision — Number of significant digits. Must be in the range 1 - 21.
const num = 123.8966
const num1 = 1123.8966
const num2 = 23.8966
// console.log(num.toPrecision(3));
// console.log(num1.toPrecision(4));
// console.log(num2.toPrecision(2));

// If we use precision value of 3 on 4 digit decimal number
// It gives precision value - 1.12 and other part - e+3 is of some exponential value.
// Output: 1.12e+3
// console.log(num1.toPrecision(3));


// toLocaleString() method:
// Converts a number to a string by using the current or specified locale.
// Output: 1,000,000
// By default: US-Locale || customizable, for example:
// Output: 10,00,000
const hundreds = 1000000
// By default: US-Locale || customizable, for example:
// console.log(hundreds.toLocaleString('en-IN'));

// You get many functions to use with numbers a/c to need.
// For example:
Number
Number.MAX_VALUE
Number.MIN_VALUE
Number.isFinite


/********** Maths ***********/
/* Built-in Object that provides a collection of properties and methods. */

console.log(Math);
// Returns absolute values.
// console.log(Math.abs(-123));
// Rounds off the decimal number
// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// Returns the smallest integer greater than or equal to its argument.
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.8));
// Returns the greatest integer less than or equal to its argument.
// console.log(Math.floor(4.8));
// console.log(Math.floor(4.2));

// Returns the square root of the number
console.log(Math.sqrt(25));

// Returns the Logarithmic value of a number
console.log(Math.log(8));

// Returns the number by removing the decimalpoint numbers
console.log(Math.trunc(3.25))

// Returns the power of the number
let x = 2;
let y = 3;

console.log(Math.pow(x, y)) // x^y


// random() function:
// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log((Math.floor(Math.random()*10) + 1));

// example 2:
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
