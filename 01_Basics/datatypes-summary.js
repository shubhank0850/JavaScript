// Primitive

//  7 Types
/* -----------
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt
*/

// Examples

const score = 100
const scoreValue = 100.3 // It doesn't matter if it is a int or a float or double, a number is a number.

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Undefined

const id = Symbol('123') // Unique  | type: symbol
const anotherId = Symbol('123') // Unique
// The id and anotherId both are different and unique if we compare them
// then the output will be false:
console.log(id === anotherId);

const bigNumber = 34567890123456778899n //BigInt


//Reference (Non-primitive)

//  Types
/* ----------
    Arrays
    Objects
    Functions
*/

// Examples

//Array
const cars = ["Hyundai", "Maruti", "Tata"]; // type: object

//Object
let myObj = {
    name: "Shubhank",
    age: 21,
    gender: "Male"
} // type: object

//Function
const myFunc = function(){
    console.log("Hello");
} // type: function/ object function

console.log(typeof cars);
console.log(typeof myObj);
console.log(typeof myFunc);