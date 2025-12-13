// callback = a function that is passed as an argument
//            to a another function.

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases


// Example 1

// hello();
// goodbye();

// It will execute hello() function after 3 seconds
// So, the goodbye() function will get executed by that time. 

// function hello(){
//     setTimeout(function (){
//         console.log("Hello!");
//     }, 3000);
// }


/* ---- Callback ---- */

// But, we need to make sure that the goodbye() should get
// executed after hello() completes.
// For that, we need to pass function name goodbye as an argument to
// hello() while calling. And don't forget to give matching parameter
// in function decleration.

hello(wait);

function hello(callback){
    console.log("Hello!")
    callback();
}

function wait(){
    console.log("Wait...");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}


// Example 2

sum(displayConsole, 5, 20);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}