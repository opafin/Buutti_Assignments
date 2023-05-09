// Create a program that takes in a number from command line that represents a length of a squares sides.
// Calculate the area of the square with given number.
// A square with sides of length 5m is 25 square meters in area.
// So in this assignment if you would run the program with 5 as the parameter node area_of_a_square.js 5, the program would print 25.

// I'll go with prompt() instead of process.argv in this one
const prompt = require("prompt-sync")(); //eslint-disable-line

let side = prompt("Enter the length of a square's side in kilometers: ");

console.log("The area of the square is", side * side, "square kilometers.");

// could also use process.argv
// process.argv
// const a = process.argv[2];
// const b = process.argv[3];
// node filename.js kilometers
