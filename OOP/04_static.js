// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created from
//          that class (class owns anything static, not the objects)


// Example 1
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));


// Example 2
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(user1.userCount); // This line of code will retuen undefined
// because the class User dosen't have the userCount as a property, it's static.
// that means it belongs to the class not any objects created by the class.

// To access user count we have to type name of the class
// console.log(User.userCount);
User.getUserCount();