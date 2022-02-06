// Task 1

console.log("_______________Task 1_________________");

// Test Case 1
let num = 9; // "009"

if (num < 10) {
  console.log(`00${num}`);
}
// Test Case 2
let num1 = 20; // "020"

if (num1 > 10 && num < 100) {
  console.log(`0${num1}`);
}
// Test Case 3
let num2 = 110; // "110"

if (num2 > 100) {
  console.log(`${num2}`);
}

// Task 2

console.log("_______________Task 2_________________");

let num3 = 9;
let str = "9";
let str2 = "20";

if (num3 == str) {
  console.log("{num3} Is The Same Value As {str}");
}
if (num3 == str && typeof num3 !== typeof str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num3 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// Task 3

console.log("_______________Task 3_________________");

let num4 = 10;
let num5 = 30;
let num6 = "30";

if (num6 > num4 && num5 !== num6) {
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
  if (num6 > num4 && num5 == num6 && typeof num5 !== typeof num6) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
    if (num6 !== num4 && typeof num5 !== typeof num6) {
      console.log("{num6} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num5}");
    }
  }
}

// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// Task 4

console.log("_______________Task 4_________________");

let n1 = 20;
let n2 = 10;
let n3 = 20;
let n4 = 51;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (n1 > n2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (n1 > n2 && n1 < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (n1 > n2 && n1 === n3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((n1 + n2) < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((n1 + n3) < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((n1 + n2 + n3) < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (n4 - (n1 + n3) + n2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
