// Task 1

console.log("_______________Task 1_________________");

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let n = true
while (counter < friends.length) {
  if (friends[counter][index] != "A" && typeof friends[counter] != 'number') {
    console.log(`${n++} => ${friends[counter]}`);
  }
  counter++;
}

/* Output
"1 => Sayed"
"2 => Mahmoud"
*/
