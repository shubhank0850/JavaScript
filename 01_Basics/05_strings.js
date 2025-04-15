const name = "Shubhank"
const repoCount = 50

// injecting variables using 'bactics' (`---`) | ${varName}
// console.log(`Hello my name is ${name}, I have repo count of ${repoCount}.`);

// Anothe way to declare a string
const gameName = new String('shubhankVR')

// To access keys in a string
// console.log(gameName[0]);

// Access Prototype
// console.log(gameName.__proto__);

// Some other functions
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "   shubhu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubhank.com/shubhank%30bawankar"
console.log(url.replace('%30', '-'));

console.log(url.includes('sachin'));

const name1 = new String('Shubhank-S-Bawankar')
console.log(name1.split('-'));

