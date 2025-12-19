// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


// This code can cause error (Uncaught SyntaxError: Unexpected end of input)
function calculate(){
    // we'll use try-catch block to handel this error
    try{

        // The eval() function is like an inbuilt calcuator which calculates
        // the passed values
        display.value = eval(display.value);

    }
    catch(error){

        display.value = "Error";
    }
}