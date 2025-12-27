// eventListner = Listen for specific events to create interactive web pages
//                events: click, mouseover, mouseout
//                .addEventListner(event, callback/ anonymous func/ arrow function);

const myBox = document.getElementById("myBox");

const myButton = document.getElementById("myButton");

// 1. Click

// Using Callback
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😬";
// }
// myBox.addEventListener("click", changeColor);


// Using Anonymous function
// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😬";
// });

// Using Arrow Function
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😬";
// });


// // 2. Mouseover

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 👎";
// });


// // 3. Mouseout

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😃";
// })

// On Buttons

// 1. Click

myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😬";
});


// 2. Mouseover

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 👎";
});


// 3. Mouseout

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃";
})