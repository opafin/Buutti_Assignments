function fun(n: number): number {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}

function whileSolution(n: number): number {
  let i = 1;
  let sum = 0;

  while (i < n) {
    sum += i;
    i++;
  }

  return sum;
}

console.log(fun(10));
console.log(whileSolution(10));
