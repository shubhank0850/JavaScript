// variable scope = where a variable is recognized
//                  and accessible (local vs global)


let x = 3; // global scope


function function1(){
    // let x = 1;       // Local scope
    console.log(x);
}

function function2(){
    // let x = 2;       // Local scope
    console.log(x);
}

function1();
function2();