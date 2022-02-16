// Task 1

console.log("_______________Task 1_________________");

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}
/* Output
10
20
30
50
60
70
80
90
100
*/

// Task 2

console.log("_______________Task 2_________________");

let start1 = 10;
let end1 = 0;
let stop = 3;

for (let i = start1; i >= end1; i--) {
  if (i < stop) break;
  if (i < 10) {
    console.log(`${end1}${i}`);
  } else {
    console.log(i);
  }
}
/* Output
10
09
08
07
06
05
04
03
*/

// Task 3

console.log("_______________Task 3_________________");

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
  console.log(i);
  for (let n = breaker; n < end2; n += breaker) {
    console.log(`-- ${n}`);
  }
}
/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

// Task 4

console.log("_______________Task 4_________________");

let index = 10;
let jump = 2;
let end3 = 0;

for (;;) {
  if (index != jump) {
    console.log(index);
  }
  index -= jump;
  if (index === end3) break;
}

/* Output
10
8
6
4
*/

// Task 5

console.log("_______________Task 5_________________");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let n = +false;
for (let i = +false; i < friends.length; i++) {
  if (friends[i][friends[i].indexOf("A")] === letter.toUpperCase()) continue;
  console.log(`${++n} => ${friends[i]}`);
}
console.log();
/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

// Task 6

console.log("_______________Task 6_________________");

let start4 = 0;
let swappedName = "elZerO";
let r ='';
for (let i = start4; i < swappedName.length; i++) {
  if (swappedName.charAt(i).toUpperCase() === swappedName.charAt(i)) {
    r += swappedName.charAt(i).toLowerCase();
  } else {
    r += swappedName.charAt(i).toUpperCase();
  }
}
console.log(r);
/* Output
"ELzERo"
*/

// Task 7

console.log("_______________Task 7_________________");


let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start5; i < mix.length; i++) {
  if (typeof mix[i] == 'string' || mix[i] < 2) continue;
    console.log(mix[i]);
}

/* Output
2
3
4
*/
