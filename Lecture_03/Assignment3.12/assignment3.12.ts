let max = -Infinity;
let min = Infinity;
let identicals = "";

process.argv.slice(2, 5).forEach((argvElement) => {
  identicals += argvElement;
  const numero = parseInt(argvElement);
  if (numero > max) max = numero;
  max = numero;
  if (numero < min) min = numero;
  min = numero;
});

console.log("The max is: ", max);
console.log("The min is: ", min);

if (identicals === max.toString().repeat(3)) {
  console.log("they're identical!");
}
