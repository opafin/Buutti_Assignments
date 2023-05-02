const { argv } = require("process");

function processifier(anyString) {
  processedAnyString =
    anyString.trim().charAt(0).toLowerCase() + anyString.trim().slice(1);
  return processedAnyString;
}
console.log(processifier("   ThIs is A StRiNG   "));

function pickyProcessifier(anyString) {
  if (anyString.trim() !== anyString) return "error!";
  if (anyString[0] !== anyString[0].toLowerCase()) return "error!";
  if (anyString.length > 20) return "error!";
  return anyString;
}

//it works!
console.log(pickyProcessifier("this is a string"));
//test cases
console.log(pickyProcessifier(" this is a string"));
console.log(pickyProcessifier("This is a string"));
console.log(pickyProcessifier("this is a string  "));
console.log(
  pickyProcessifier(
    "This is a loooooooooooooooooooooooooooooooooooooooooooooooooooooong string"
    //appropriately results in error
  )
);

//for inputting parameters after the file name in the terminal
console.log(processifier.argv[2]);
console.log(pickyProcessifier(process.argv[2]));
