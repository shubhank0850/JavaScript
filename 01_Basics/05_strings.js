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

// always use the endindex+1 while slicing the string 
// cause the endindex is exclusive thus, it does not
// get counted
// string.slice(start, end);
const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

// Useful method to extract the first/ last name as substring
let fullName = "Broseph Code";
let firstName = fullName.slice(0, fullName.indexOf(" "));
// We dont need ending index here cause we want each n' every character after the " ".
// Used +1 here to avoid " " empty space before the last name (" Code")
// It simply tell that: find the empty space the start from the index after that.
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);

const newStringOne = "   shubhu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubhank.com/shubhank%30bawankar"
console.log(url.replace('%30', '-'));

console.log(url.includes('sachin'));

const name1 = new String('Shubhank-S-Bawankar')
console.log(name1.split('-'));

let phoneNumber = "123-456-7890";
// It will pad/add "0" at the start until the string gets 15 characters long
phoneNumber1 = phoneNumber.padStart(15, "0");
console.log(phoneNumber1);

// Similar but pads at the end
phoneNumber2 = phoneNumber.padEnd(15, "0");
console.log(phoneNumber2)