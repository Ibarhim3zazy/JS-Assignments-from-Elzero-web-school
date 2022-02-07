// Task 1

console.log("_______________Task 1_________________");

let day = "    friday  ";
let daytrim = day.trim()
let f_char = daytrim.charAt(0).toUpperCase();
let dayvar = f_char + daytrim.slice(1);

if (dayvar === "Friday" || dayvar === "Saturday" || dayvar === "Sunday") {
  console.log("No Appointments Available");
} else if (dayvar === "Monday" || dayvar === "Thursday") {
  console.log("From 10:00 AM To 5:00 PM");
} else if (dayvar === "Tuesday") {
  console.log("From 10:00 AM To 6:00 PM");
} else if (dayvar === "Wednesday") {
  console.log("From 10:00 AM To 7:00 PM");
} else {
  console.log("Its Not A Valid Day");
}
