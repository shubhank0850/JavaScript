// function declaration = define a reusable block of code
//                        that performs a specific task



// function expression = a way to define functions as
//                       values or variables

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

// define function() as variable
const hello = function(){
    console.log("Hello!");
}

// Can pass a function name as a callback value
setTimeout(hello, 3000);

// Can pass a whole function as an argument
setTimeout(function(){
    console.log("Hello!");
}, 5000)


// Example 2
// passing function expression as an value/ argument
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);