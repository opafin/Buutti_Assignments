// importing promptSync for console-program style input
// (e.g C# ReadLine() or Python Input())
import promptSync from "prompt-sync";
const prompt = promptSync();

// use npm run start to run
// it'll run "npx ts-node assignment3.18.ts"

function letterReplacer() {
  // collects your wisdom
  console.log("write a string of wisdom");
  const deepWisdom = prompt("");
  const beautifulGraphics = "-".repeat(deepWisdom.length);
  console.log(beautifulGraphics);

  // collects a dictionary of characters and their replacements untill stopped.
  const lettersToReplace: { [key: string]: string } = {};

  console.log("which letter to replace with which e.g");
  console.log("x with y");
  console.log(beautifulGraphics);

  let more = "y";
  while (more === "y") {
    const input = prompt("").split(" ");

    const letterToReplace = input[0];
    const replacementLetter = input[2];
    lettersToReplace[letterToReplace] = replacementLetter;

    more = prompt("want replace another letter? y/n ");

    if (more === "n") {
      break;
    }
  }
  // split into individual characters
  const charArray = deepWisdom.split("");

  // forEach goes through each letter, and it also sees the index of the current letter.
  charArray.forEach((letter, index) => {
    // it checks if the replacement dictionary's keys contain the current letter
    if (letter in lettersToReplace) {
      // when found we use the letter as a key to check which value (replacement character) is associated with that key
      charArray[index] = lettersToReplace[letter];
      // the index read by forEach allows us to change the particular instance of the key letter to the replacement character value.
    }
  });
  console.log(beautifulGraphics);
  console.log(charArray.join(""));
  console.log(beautifulGraphics);
}

letterReplacer();

// example use:
// write a string of wisdom
// tarzan loves his friendly friend monkees and jane
// -------------------------------------------------
// which letter to replace with which e.g: x with y
// -------------------------------------------------
// z with f
// want replace another letter? y/n y
// e with r
// want replace another letter? y/n n
// -------------------------------------------------
// tarfan lovrs his frirndly frirnd monkrrs and janr
// -------------------------------------------------
