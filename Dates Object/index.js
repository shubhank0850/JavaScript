// Date Objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted
//                Date is an Interface.

// Creatinf new date object
const date = new Date();

// Date(year, month, day, hour, minute, second, ms)
const customDate = new Date(2024, 0, 1, 2, 3, 4, 5);

// Passing a string representation of date and time is also valid
const stringRepCustomDate = new Date("2023-01-02T12:00:00Z");

// Passing a given amount of time in milliseconds since epic
// epic => the day/ date my computer thinks time began
const timeInMilliSecCustomDate = new Date(1700000000000);

// console.log(date);
// console.log(customDate);
// console.log(stringRepCustomDate);
// console.log(timeInMilliSecCustomDate);

// we can get the current date and time using the getter methods of date interface
// get the year
const year = date.getFullYear();

// get month
const month = (date.getMonth() + 1); // 0 -> January, 1-> Feb,.....

// get date
const day = date.getDate(); // don't use .getDay() => cause it will give you the day of the week
                            // like sunday, monday,... but in mumbers like 
                            // today is Wed for me, so it will give me 3.

// get hour
const hour = date.getHours();

// get minutes
const minutes = date.getMinutes();

// get seconds
const seconds = date.getSeconds();

// get milliseconds
const milliseconds = date.getMilliseconds();

// get day of week
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);

console.log("");
// We can also set the date using setter methods of Date Interface
const setteledDate = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(3);
date.setMilliseconds(3);

console.log(setteledDate);


// We can also compare the dates
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy New Year!");
}