// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ------------- .firstElementChild -----------

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// If we use querySelectorAll(), we'll select all unordered lists
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })


// ------------- .lastElementChild ------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// If we use querySelectorAll(), we'll select all unordered lists
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "lightgreen";
// })


// ------------ .nextElementSibling ---------------

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightblue";


// ----------- .previousElementSibling ------------

// const element = document.getElementById("orange");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "pink";


// ---------- .parentElement ----------

// const element = document.getElementById("banana");
// const parent = element.parentElement;
// parent.style.backgroundColor = "red";


// ------------ .children -------------

const element = document.getElementById("fruits");
const children = element.children;

children[0].style.backgroundColor = "orange";

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "orange";
// })