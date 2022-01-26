// Task 1
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

// Task 2
let num = 3;
let bool = true;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num++ * ++bool); // 6

// Soultion Three
console.log(++num + --bool); // 6

// Soultion Four
console.log(++num); // 6

// Solution Five
console.log(num + +false); // 6

// Solution Six
console.log(num * bool); // 6

// Task 3
let Num = "10";
let Bool = true;

// Solution One
console.log(+Num + +Num); // 20

// Solution Two
console.log(Num++ * ++Bool); // 20

// Solution Three
console.log(--Num * Bool++); // 20

// Solution Four
console.log(Num * Bool - Num); // 20

// Solution Five
console.log(Num * +false + Num * --Bool); // 20
