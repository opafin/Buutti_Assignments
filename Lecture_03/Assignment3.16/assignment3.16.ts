import promptSync from "prompt-sync";
const prompt = promptSync();

// use npm run start to run
// it'll run "npx ts-node assignment3.16.ts"

function caseChanger() {
  console.log("input format: string, upper/lower");
  const input = prompt("").toLocaleLowerCase();
  const inputSplit = input.split(", ");
  if (inputSplit[1] === "upper") {
    console.log(inputSplit[0].toLocaleUpperCase());
  } else if (inputSplit[1] === "lower") {
    console.log(inputSplit[0].toLocaleLowerCase());
  }
}
caseChanger();
