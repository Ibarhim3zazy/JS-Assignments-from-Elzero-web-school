// Task 1

console.log("_______________Task 1_________________");

function sayHello(theName, theGender) {
  let Gender = (theGender == "Male") ? "Mr " : (theGender == "Female") ? "Miss " : "";
  console.log(`Hello ${Gender}${theName}`);
}

sayHello("Ibrahim", "Male");

/* Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

// Task 2

console.log("_______________Task 2_________________");


function calculate(firstNum, secondNum, operation) {
  let result;
  if (secondNum === undefined) {
    result = "Second Number Not Found";
  }else if (operation === undefined && secondNum != undefined || operation == 'add') {
    result = firstNum + secondNum;
  }else {
    if (operation == 'subtract') {
      result = firstNum - secondNum;
    }else if (operation == 'multiply') {
      result = firstNum * secondNum;
    }
  }
  console.log(result);
}

calculate(20); // Second Number Not Found

/* Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
*/

// Task 3

console.log("_______________Task 3_________________");

function ageInTime(theAge) {
  let age, months, weeks, days, hours, minutes, seconds;
  if (theAge < 11 || theAge > 100) {
    age = "Age Out Of Range";
  }else {
    months = theAge * 12;
    weeks = months * 4;
    days = months * 30;
    hours = days * 24;
    minutes = hours * 60;
    seconds = minutes * 60;
  }
  console.log(age || "Your Age Is: " + theAge);
  if (age === undefined) {
    console.log("Months Example => " + months + " Months");
    console.log(`Weeks Example => ${weeks} Weeks`);
    console.log(`Days Example => ${days} Days`);
    console.log(`Hours Example => ${hours} Hours`);
    console.log(`Minutes Example => ${minutes} Minutes`);
    console.log(`Seconds Example => ${seconds} Seconds`);
  }
}

ageInTime(38); // Months Example => 456 Months

/* Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/

// Task 4

console.log("_______________Task 4_________________");

function checkStatus(a, b, c) {
  let Name = (typeof a === 'string') ? a : (typeof b === 'string') ? b : (typeof c === 'string') ? c : "Unknown";
  let age = (typeof a === 'number') ? a : (typeof b === 'number') ? b : (typeof c === 'number') ? c : 0;
  let status = (typeof a === 'boolean') ? a : (typeof b === 'boolean') ? b : (typeof c === 'boolean') ? c : "Unknown";
  if (status === true) {
    status = "You Are Availabe For Hire";
  }else {
    status = "You Are Not Availabe For Hire";
  }
  console.log(`Hello ${Name}, Your Age IS ${age},  ${status}`);
}

checkStatus("Ibrahim",true, 22); // "Hello Ibrahim, Your Age IS 22, You Are Availabe For Hire"

/* Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

// Task 5

console.log("_______________Task 5_________________");
console.log("\nSolution Shows in browser not console\n");
function createSelectBox(startYear, endYear) {
  document.write(`<hr><select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`<select>`);
}
createSelectBox(2000, 2021);

// Task 6

console.log("_______________Task 6_________________");

function multiply(...value) {
  let result = 1;
  for (var i = 0; i < value.length; i++) {
    if (typeof value[i] === 'string') {
      continue;
    }else {
      result *= parseInt(value[i]);;
    }
  }
  console.log(result);
}

multiply(100.5, 10, "B"); // 1000

/* multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/
