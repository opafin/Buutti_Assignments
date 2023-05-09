import promptSync from "prompt-sync";
const prompt = promptSync();

// use npm run start to run
// it'll run "npx ts-node assignment3.15.ts"
// if at least 3 names are not given in the function call
// you'll be asked for any amount of names over 3

function initials(nameOne?: string, nameTwo?: string, nameThree?: string) {
  if (!nameOne || !nameTwo || !nameThree) {
    const nameList = prompt("input at least 3 names separated by spaces ");
    const names = nameList.split(" ");

    let initialsWithDots = "";
    names.forEach((line) => {
      initialsWithDots += line[0] + ".";
    });
    console.log(initialsWithDots);
  } else console.log(nameOne[0] + "." + nameTwo[0] + "." + nameThree[0] + ".");
}

function lengthComparison(nameOne?: string, nameTwo?: string, nameThree?: string) {
  let names: string[];
  if (!nameOne || !nameTwo || !nameThree) {
    const nameList = prompt("input at least 3 names separated by spaces ");
    names = nameList.split(" ");
  } else {
    names = [nameOne, nameTwo, nameThree];
  }

  // "tarzan" - "jane" = 1, no switch
  // "tarzan" - "monkeee" = -1, switch
  // "jane" - "monkeee" = -3, switch
  names.sort((a, b) => {
    return b.length - a.length;
  });

  names.forEach((name) => {
    console.log(name, name.length);
  });
}

initials("tarzan", "jane", "monkee");
lengthComparison("tarzan", "jane", "monkeee");
