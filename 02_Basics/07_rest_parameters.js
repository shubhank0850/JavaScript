// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by building them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array


// Example 1 

// to build an array of elements by passing variable as no. of arguments
function openFridge(...foods){
    console.log(...foods);
}

// to stick all the elements within an array then return that array
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "taco";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

// Example 2
console.log("");
// function to sum an bunch of numbers together

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const totalSum = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${totalSum}`)

console.log("");

function getAvg(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const totalAvg = getAvg(75, 100, 85, 90, 50);
console.log(`The total average is: ${totalAvg}`)


// Example 3
console.log("")

// to combine a seperate words/chars into a string
function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);