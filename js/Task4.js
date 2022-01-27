// Task 1

console.log("_______________Task 1_________________");
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(5e4 * 2); // 100000
console.log(Math.pow(1e2, 2) * 10); // 100000
console.log(200_000 / 2); // 100000
console.log(1e6 / 1e1); // 100000
console.log(Math.max(5165, 54613, 1e5, 1e4) * 1); // 100000
console.log(Math.floor(50_000.9) * 2); // 100000
console.log(1e6 - 9e5); // 100000
console.log(parseInt(100_000.646541)); // 100000
console.log(Math.ceil(99_999.1485)); // 100000
console.log(Math.trunc(100_000.999999999)); // 100000

// Task 2
console.log("_______________Task 2_________________");

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Task 3
console.log("_______________Task 3_________________");

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// Task 4
console.log("_______________Task 4_________________");

let myVar = "100.56789 Views";

console.log(parseInt(myVar) + " Is My Type a Number? A: " + Number.isInteger(parseInt(myVar))); // 100

console.log(parseFloat(myVar).toFixed(2) + " Is My Type Not a Number? A: " + Number.isNaN(parseFloat(myVar).toFixed(2))); // 100.57

// Task 5
console.log("_______________Task 5_________________");

let num = 10;
let r = Number.isInteger(num);
console.log(++r); // 2

// Task 6
console.log("_______________Task 6_________________");

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseInt(flt.toFixed(0))); // 10

// Task 7
console.log("_______________Task 7_________________");

console.log(Math.floor(Math.random() * 5) + 0); // 0 || 1 || 2 || 3 || 4
