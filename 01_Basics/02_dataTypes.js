"use strict"; // treat all JS code as newer version

/* alert(3 + 3) // we are using nodejs, not browser */

// Data Types

/*

Type         ||   Range
----------------------------------
number      =>  2^53
bigint      =>  
string      => ""
boolean     => true/false
null        => standalone value
undefined   => value not assigned
symbol      => unique

*/

let name = "Shubhank"
let age = 21
let isLoggedIn = false
let state;
let value = null

console.log(typeof age) // used to check type of the given value
console.log(typeof undefined) //type: undefined
console.log(typeof null) // type: object