import promptSync from "prompt-sync";
const prompt = promptSync();

// to run the ATM type "npm run start"
// it'll run "npx ts-node assignment3.14.ts"
// and take commands from the console
// reports minus balance in red and plus in green
// or reports if account is inactive

function ATM(balance: number, isActive: boolean): void {
  console.clear();
  let answer = prompt("Unisex Hello! Want to check your balance? yes/no ");
  answer = answer.toLocaleLowerCase();

  if (answer !== "yes" && answer !== "no") {
    console.log("please give an input");
  }
  if (answer.toLocaleLowerCase() === "no") {
    console.clear();
    console.log("-----------");
    console.log("Exiting ATM");
    console.log("-----------");
    console.log("Have a nice day!");
    console.log("-----------");
  } else if (answer === "yes") {
    console.log("Ok lets see!");
    if (isActive === true && balance > 0) {
      console.log("Account balance: ", logPlusBalance(balance.toString()));
    } else if (isActive === false) {
      console.log("Your account is not active");
    } else if (balance === 0) {
      console.log("Your account is full of empty");
    } else {
      console.log("Account balance: ", logMinusBalance(balance.toString()));
      console.log("däm!");
    }
  }
}

function logMinusBalance(balance: string) {
  const red = "\x1b[31m";
  const reset = "\x1b[0m";
  return red + balance + reset;
}

function logPlusBalance(balance: string) {
  //eslint-disable-line
  const green = "\x1b[32m";
  const reset = "\x1b[0m";
  return green + balance + reset;
}

ATM(69, true);
