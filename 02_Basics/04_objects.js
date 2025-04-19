// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: { // You can create nested objects
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//Combining 2 objects
// 1. assign(target, source) method
// const obj3 = { obj1, obj2 } // this will create problem i.e. instead of combining there will be 2 objects in a object
//Good Practice: passing target as a empty array, because eventually the source will be getting stored in a new array.
const obj3 = Object.assign({}/*target*/, obj1, obj2/*Source*/)
// console.log(obj3);

// 2. Spread Operator
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// Many objects inside a array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
// Accessing keys of Object
// console.log(Object.keys(tinderUser));
// Accessing values of object
// console.log(Object.values(tinderUser));

// Creating arrays of key value pairs using entries()
// console.log(Object.entries(tinderUser));

// Checking if the object has any specific property
console.log(tinderUser.hasOwnProperty('isLogged'));

