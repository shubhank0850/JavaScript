// Singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const User = {
    name: "Shubhank",
    "full name": "Shubhank Bawankar",
    // to access it as a symbol put it inside []
    [mySym]: "mykey1",
    age: 18,
    location: "Nagpur",
    email: "shubhu@google.com",
    isLoggedIn: false,
    latLoginDays: ["Monday", "Wednesday"]
}

// Access the values of object
// console.log(User.email)
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[mySym]); // here also need to put it inside []


// Change the values of object
User.email = "shubhub5@google.com"
// You can freeze the object so the it cannot get changed afterwards
// Object.freeze(User)
User.email = "shubhu@microsoft.com"
// console.log(User);

User.greeting = function(){
    console.log("Hello JS user!");
    
}

User.greeting2 = function(){
    console.log(`Hello JS user ${this["full name"]}`);
    
}

console.log(User.greeting());
console.log(User.greeting2());