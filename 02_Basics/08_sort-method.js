// sort() = method used to sort elements of array in place
//          Sorts elementsas strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.sort();

// console.log(fruits);


let numbers = [1, 10, 2, 9, 3, 8, 6, 5, 4, 7];

numbers.sort((a, b) => a - b);

// console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}
            ]


people.sort((a, b) => a.gpa - b.gpa); // ASC
people.sort((a, b) => b.gpa - a.gpa); // DESC

// To sort by any property that is string
people.sort((a, b) => a.name.localeCompare(b.name)); // ASC
people.sort((a, b) => b.name.localeCompare(a.name)); // DESC

// console.log(people);