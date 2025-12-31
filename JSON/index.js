// JSON = (JavaScript Object Notation) data-interchange format.
//        Used for exchanging data between a server and a web application.
//        JSON files {key:value} OR [value1, value2, value3].

//        JSON.stringify() = converts a JS Object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// };

// const people = [{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
// },
// {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
// },
// {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
// }];

// .stringify()
// const jsonString = JSON.stringify(people);

/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;

// const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
//                  {"name": "Patrick", "age": 34, "isEmployed": false},
//                  {"name": "Squidward", "age": 50, "isEmployed": true},
//                  {"name": "Sandy", "age": 27, "isEmployed": false}]`;

// // .parse()
// const parsedData = JSON.parse(jsonNames);

// console.log(parsedData);

/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/

// fetch("names.json")
//     .then(response => response.json())
//     .then(value => console.log(value))

// to iterate through all the names
// fetch("nmaes.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value)))
//     .catch(error => console.error(error));

// fetch("person.json")
//     .then(response => response.json())
//     .then(value => console.log(value))
    
// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value))  

// to iterate through all the objects
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));