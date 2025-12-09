// console.log(`Hello`)

// window.alert(`This is an alert!`)

// document.getElementById("myH1").textContent = 'Hello';
// document.getElementById("myP").textContent = 'I like coffee!'

// How to accept user input? 
// 1. Easy way = window prompt

/*
let username;

username = window.prompt("What is your name?");

console.log(username);
*/

// 2. Professional way = HTML Textbox
/*
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("radius").value;
    console.log(username);
}
*/

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle: ");
// radius = Number(radius);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    document.getElementById("myRes").textContent = circumference;
    console.log(circumference);
}



