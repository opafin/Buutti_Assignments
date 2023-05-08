for (let i = 0; i < 11; i++) {
  console.log(i * 100);
}

let numberOne = 1;
for (let i = 0; i < 8; i++) {
  console.log(numberOne);
  numberOne = numberOne * 2;
}

let numberTwo = 1;
for (let i = 0; i < 5; i++) {
  console.log(numberTwo);
  numberTwo = numberTwo + 3;
}

console.log("hello");
let numberthree = 9;
for (let i = 0; i < 10; i++) {
  console.log(numberthree);
  numberthree = numberthree - 1;
}
console.log("hello");

let taskfive = "";
for (let i = 1; i < 5; i++) {
  taskfive += `${i}, ${i}, ${i}, `;
}
console.log(taskfive.substring(0, taskfive.length - 2));

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    console.log(i, "\n");
  }
}
