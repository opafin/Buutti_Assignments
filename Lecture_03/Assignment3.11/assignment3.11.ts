const [node, assignment311, numOne, numTwo, password] = process.argv;

console.log(`${node}, ${assignment311}, ${numOne}, ${numTwo}, ${password}`);

if (numOne === numTwo && password === "hello world") {
  console.log("you guessed the password!");
} else if (numOne === numTwo) {
  console.log("they're equal");
} else if (numOne > numTwo) {
  console.log("the first number is bigger");
} else {
  console.log("the second number is bigger");
}

// "hello world" needs to be added with ""
// else what is after the space will be interpreted as a new argument
