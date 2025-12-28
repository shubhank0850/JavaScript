// classList = Element property in JavaScript used to interact
//             with an elemnt's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage

const myButton = document.getElementById("myButton");

// // add()
// myButton.classList.add("enabled");

// // remove()
// myButton.classList.remove("enabled");

// // add and remove using event listners
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// });

// // toggle(Remove if present, Add if not)
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

// // replace(oldClass, newClass)
// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {
//     event.target.classList.replace("enabled", "disabled");
// });

// contains()
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "👎";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
});
