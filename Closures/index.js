// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintainance
//           Used frequently in JS frameworks: React, Vue, Angular

// Example 1
function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

message = "Goodbye"; // It won't work

outer();


// Example 2

// We can declare the count variable outside the function
// let count = 0;
// It will maintain a state but it's not private which is not secure
// anyone can access it or can change it

function createCounter(){ // Closure

    let count = 0;

    function increment(){
        // let count = 0;
        count++;
        console.log(`Count increased to ${count}`);
    }

    // Closures can have more than one functions
    // We'll use getCount function to get and return our count 
    // if we need access to it
    function getCount(){
        return count;
    }

    // Here we're returning an object
    // that's why we need to give our unner function names
    // as an reference inside curly braces
    return {increment, getCount};

}

const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// It will return undefined as this variable is hidden/private.

console.log(`The current count is: ${counter.getCount()}`);

// increment();
// increment();
// increment();
// increment();
// increment();

// Example 3

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}


const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);