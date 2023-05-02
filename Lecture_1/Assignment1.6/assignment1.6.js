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

console.log(pickyProcessifier("this is a string"));
