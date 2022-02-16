// Task 1

console.log("_______________Task 1_________________");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Task 2

console.log("_______________Task 2_________________");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

// Task 3

console.log("_______________Task 3_________________");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrTwo.concat(arrOne.reverse()).slice(arrTwo.length - true).concat(arrTwo.reverse().slice(true));

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Task 4

console.log("_______________Task 4_________________");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].substr(2)); // ZERO

// Task 5

console.log("_______________Task 5_________________");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle) === true) {
  console.log("Found");
}
if (haystack.indexOf(needle) == true) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) == true) {
  console.log("Found");
}

// Task 6

console.log("_______________Task 6_________________");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2.slice(-2).join(arr1.pop()).toLowerCase();
// allArrs

console.log(allArrs); // fxy
