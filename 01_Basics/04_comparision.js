/* Note:
    Make sure to compare the values of similar datatype.
*/
// Basic conversions
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/* 2. The reason is that an equality check == and comparision > < >=
<= work differently.
Comparisions convert null to a number, treating it as 0.
That's why (3) null >= is true and (1) null > 0 is a false.
*/

/* Avoid these type of comparisions */
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // null gets converted to 0.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

console.log("2" === 2); // (===) Strict comparator, it checks datatypes of 
                        // both the values as well with the values
                        // Output: false