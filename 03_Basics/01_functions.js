// Function

// function declaration
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("Y");
}

// function calling
// sayMyName()


// function addTwoNumbers(num1, num2){ // these are called 'parameters', cause we're declaring fun definition here
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2){ // these are called 'parameters', cause we're declaring fun definition here
    // let result = num1 + num2
    // return result
    // OR
    return num1 + num2
}

// addTwoNumbers(5, 4) // these are called 'arguments', cause we're passing them while function calling

// const result = addTwoNumbers(5, 3);
// It will give O/P as 'undefined' for the first func we've created.
// It will give O/P as 'Result: 8' for the second func we've created.
// console.log("Result: ", result);

// example 2:
function loginUserMessage(username){
    return `${username} has just logged in`
}

console.log(loginUserMessage("happy"));