// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {console.log(`Hi! I am ${this.firstName}`)},
    sayBye: () => console.log("Goodbye!")
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();
