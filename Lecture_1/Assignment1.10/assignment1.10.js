// Write a program that has four values:
// lastName, age, isDoctor, sender.
// The name parameters should be strings,
// age a number and isDoctor a boolean.

let lastName = "Avallach";
let age = 68;
//tested with 60, 61, 62, 63
let isDoctor = true;
let sender = "Geralt";

function nextAge(age) {
  return age + 1;
}

age = nextAge(age);

const ending = ["st", "nd", "rd", "th"];
let choice;

if (age % 10 === 1) {
  choice = 0;
} else if (age % 10 === 2) {
  choice = 1;
} else if (age % 10 === 3) {
  choice = 2;
} else {
  choice = 3;
}

if (isDoctor) {
  console.log("Dear Dr.", lastName);
} else {
  console.log("Dear Mx. ", lastName);
}
console.log();
console.log(
  "Congratulations on your",
  age + ending[choice],
  "birthday! Many happy returns!"
);

//testing: this doesn't work, even if all spaces are removed by ignoring formatter
console.log("Sincerely,\n",sender); //prettier-ignore
//this works
console.log("Sincerely,\n" + sender);
//and this
console.log(`Sincerely,\n${sender}`);
