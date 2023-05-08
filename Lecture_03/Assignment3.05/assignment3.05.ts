const arr = ["banaani", "omena", "mandariini", "appelsiini", "kurkku", "tomaatti", "peruna"];

console.log(arr[2], arr[3], arr.length);
const sortedArray = arr.sort((a, b) => a.localeCompare(b));
console.log(sortedArray);
arr.push("sipuli");
console.log(arr);
arr.shift();
console.log(arr);

arr.forEach((element) => {
  console.log(element);
});

console.log();
arr.forEach((element) => {
  if (element.includes("r")) {
    console.log(element);
  }
});
