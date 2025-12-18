// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch() { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

// Example 1
// try{

//     console.log(x);
//     // NETWORK ISSUES
//     // PROMIDE REJECTION
//     // SECURITY ERROES
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }

// console.log("You have reached the end");


// Example 2

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    // We can intentionally throw an error
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("Reached end");
