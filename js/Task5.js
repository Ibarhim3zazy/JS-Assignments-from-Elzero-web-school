// Task 1

console.log("_______________Task 1_________________");

let userName = "Elzero";
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

// Task 2

console.log("_______________Task 2_________________");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ,0)); // True
console.log(word.startsWith(letterE.toUpperCase(),0)); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
