// eventListner = Listen for specific events to create interactive web pages
//                events: keydown, keyup, keypress (avoid using it cause: it isn't compatible with all web browsers)
//                document.addEventListner(event, callback/ anonymous func/ arrow function);

// // 1. Keydown
// document.addEventListener("keydown", event => {
//     console.log(`Key down = ${event.key}`);
// })

// // 2. Keyup
// document.addEventListener("keyup", event => {
//     console.log(`Key up = ${event.key}`);
// })


// Usage: 

const myBox = document.getElementById("myBox");

// To move the element
const moveAmount = 10;
let x = 0;
let y = 0;

// 1. Keydown
document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
})

// 2. Keyup
document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightblue";
})

// To move element
// 1. Keydown
document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){

        // to avoid scrolling with element, it will disappear
        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break; 
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;               
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

// 2. Keyup
document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightblue";
})

