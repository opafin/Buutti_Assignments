// Assignment 3.17: Annoying substring
// Create a program that takes in a string and drops off the last word

import promptSync from "prompt-sync";
const prompt = promptSync();

// use npm run start to run
// it'll run "npx ts-node assignment3.17.ts"

function annoyifier() {
  console.log("input a string to get annoyed");
  const input = prompt("").split(" ");

  if (!input) {
    console.log("dare to add a string!");
  }
  const lostWord = input.pop() || "undefined";

  console.log(...input);

  // extra annoyance code below:

  for (const word of input) {
    console.log(...word.toLocaleUpperCase());
  }

  let lastWord = "";
  for (const letter of lostWord) {
    if (lostWord.indexOf(letter) % 2 === 0) {
      lastWord += letter.toLocaleLowerCase();
    } else {
      lastWord += letter.toLocaleUpperCase();
    }
    console.log(lastWord);
  }
}

annoyifier();

// example output

// input a string to get annoyed
// how very annoying
// how very
// H O W
// V E R Y
// a
// aN
// aNN
// aNNO
// aNNOy
// aNNOyI
// aNNOyIN
// aNNOyING
