// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (millioseconds)
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay);

// clearTimeout(timeoutId) = can cancle a timeout before it triggers

// function sayHello(){
//     window.alert("Hello 3s");
// }

// clearTimeout() example
// const timeoutId = setTimeout(sayHello, 3000);
// clearTimeout(timeoutId);

// using anonymous function
// setTimeout(function(){window.alert("Hello 5s")}, 5000);

// using arrow function
// setTimeout(() => window.alert("Hello 7s"), 7000);


let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED")
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}