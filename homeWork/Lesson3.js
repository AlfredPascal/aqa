let str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str1 = str.charAt();
console.log(str1); //или с[0]
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str2 = str.charAt(str.length -1);
console.log(str2);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str3 = str.substring(1, 4);
console.log(str3);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str4 = str.substr(1, 3);
console.log(str4);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str5 = str.slice(-3);
console.log(str5);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str6 = str.indexOf("l");
console.log(str6);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str7 = str.lastIndexOf("l");
console.log(str7);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str8 = str.split("of");
console.log(str8);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str9 = str.replace("l", "L");
console.log(str9);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str10 = str.replaceAll("l", "L");
console.log(str10);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str11 = str.toUpperCase();
console.log(str11);
str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
str12 = str.toLowerCase();
console.log(str12);

/////////////////////////////////////////////////////////////////////

const arr = [1,2,3,"a","b","c"];
arr.at()
arr.push()
arr.unshift()
arr.pop()
arr.shift()
arr.join()
arr.indexOf()
arr.lastIndexOf()
arr.includes()
arr.flat()
arr.concat()
arr.reverse()
arr.slice()
arr.splice()
arr.copyWithin()
//////////////////////////////////////////////////////////////////////

const testerPositions = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];

testerPositions.push("SDET");
testerPositions.push("Lead SDET");
console.log(testerPositions);

//////////////////////////////////////////////////////

let day = "monday";
let message;

if (day.toUpperCase() === "Monday".toUpperCase()) {
     message = "It's Monday!";
} 
else if (day.toUpperCase() === "TUesday".toUpperCase()) {
     message = "It's Tuesday!";
} 
else if (day.toUpperCase() === "Wednesday".toUpperCase()) {
     message = "It's Wednesday!";
} 
else if (day.toUpperCase() === "thursday".toUpperCase()) {
     message = "It's Thursday!";
} 
else if (day.toUpperCase() === "Friday".toUpperCase()) {
     message = "It's Friday!";
} 
else if (day.toUpperCase() === "Saturday".toUpperCase()) {
     message = "Its Sunday!";
} 
else if (day.toUpperCase() === "Sunday".toUpperCase()) {
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message);

///////////////////////////////////////////


const monthNumber = 1;
let result3 = "";

switch (monthNumber) {
     case 1:
          results3 = "January";
          break;
     case 2:
          results3 = "February";
          break;
     case 3:
          results3 = "March";
          break;
     case 4:
          results3 = "April";
          break;
     case 5:
          results3 = "May";
          break;
     case 6:
          results3 = "June";
          break;
    default: results3 = "None";
}

console.log(results3);

///////////////////////////////////////////

const dayNumber = 1;
let result = "";

switch (dayNumber) {
     case 1:
          result = "Monday";
          break;
     case 2:
          result = "Thuesday";
          break;
     case 3:
          result = "Wednesday";
          break;
     case 4:
          result = "Thursday";
          break;
     case 5:
          result = "Friday";
          break;
     case 6:
          result = "Saturday";
          break;
     case 7:
          result = "Sunday";
          break;
    default: result = "None";
}
console.log(result);

///////////////////////////////////////

let vacationMonth = "May";
console.log(vacationMonth === "August" || vacationMonth === "June" ? "Approved" : "Denied");

////////////////////////////////////////

