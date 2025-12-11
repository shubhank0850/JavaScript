// while loop = repeat some code WHILE some condition is true
// do-while loop = do the code first then check the condition

//while
// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid credentials! Please try again");
//     }

// }

// do-while
let loggedIn = true;
let username;
let password;

do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }

}while(!loggedIn);