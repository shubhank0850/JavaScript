const marvel_heros = ["Ironman", "Vision", "Hawkeye"]
const dc_heros = ["Suprman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const upd_mar = marvel_heros.concat(dc_heros)
// console.log(upd_mar);

//Spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// Merges all the elements of array and sub-arrays into one single array
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// Checks wheather that the given object is array or not
// console.log(Array.isArray("Shubhank"));
// Creates an array from an iterable object
// console.log(Array.from("Shubhank"));

// Interesting case for interviews
// Below if we dont specify that we either want to create a array of keys or values,
// then it will return an empty array.
// console.log(Array.from({name: "shubhank"}));

let score1 = 100
let score2 = 200
let score3 = 300
// Returns new array from set of elements
console.log(Array.of(score1, score2, score3));
