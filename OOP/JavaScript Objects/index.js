// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {
//                      key:value,
//                      function()
//                   };

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log(`Hi! I am ${person1.firstName}!`),
    sayBye: () => console.log("Goodbye!")
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hi! I am Patrick!"),
    sayBye: () => console.log("Bye...")
};

// person 1
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();

console.log(person1);
console.log("");

// person 2
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();

console.log(person2);