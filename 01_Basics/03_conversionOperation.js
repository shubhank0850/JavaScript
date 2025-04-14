let score = "33"

let score_1 = "33abc"

//console.log(typeof score); // can use 'typeOf' directly
//console.log(typeof(score)); // or as a method

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// Example 2
// console.log(typeof(score_1));

let valueInNumber_1 = Number(score_1)
// console.log(typeof valueInNumber_1);
// console.log(valueInNumber_1); // NaN

/* Notes: [Conversoin to Number]
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = "shubhu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* Notes: [Conversoin to Boolean]
1 => true; 0 => false
"" => false; "shubhu" => true
*/