// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM.

// 1. document.getElementById()           // ELEMENT OR NULL
// 2. document.getElementsByClassName()     // HTML COLLECTION
// 3. document.getElementByTagName()      // HTML COLLECTION
// 4. document.querySelector()            // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()         // NODELIST


// Example - 1 (.getElementById())

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

//Example - 2 (.getElementsByClassName())

// const fruits = document.getElementsByClassName("fruits");

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// Html Collections does not have forEach() method.
// fruits.forEach(); //TypeError: fruits.forEach is not a function

// But we can use it by typecasting our html collection into an array
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// Example - 3 (.getElementByTagName())

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// we can use forEach() by typecasting our html collection into an array
// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// Example - 4 (.querySelector())

// It will only select the first match if found else return null
// We can select a tag or a class name as (.classname)
// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";


// Example - 5 (.querySelectorAll())
// It returns nodelist
// const fruits = document.querySelectorAll(".fruits");

// fruits[1].style.backgroundColor = "yellow";

// we can use forEach() without typecasting as lists has this method
const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})
