let fruits = ["apple", "orange", "banana", "coconut"];

// Print all elements throught loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);    
}

// print by incrementing by 2
console.log("");
for (let i = 0; i < fruits.length; i+= 2) {
    console.log(fruits[i]);    
}

// print from the 1st element by inc by 2
// print by incrementing by 2
console.log("");
for (let i = 1; i < fruits.length; i+= 2) {
    console.log(fruits[i]);    
}

// print elements in reverse / from last
// print by incrementing by 2
console.log("");
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);    
}

// Enhanced for loop 
console.log("");
let meats = ["chicken", "goat", "fish", "crab", "prawn"];

for(let meat of meats){
    console.log(meat);
}

// Sort an array
console.log("");
console.log(meats.sort());

// Sort in reverse
console.log("");
console.log(meats.sort().reverse());
