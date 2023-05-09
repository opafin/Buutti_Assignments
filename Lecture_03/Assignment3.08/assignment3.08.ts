function foloopfun(n: number): number {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function whilefun(n: number): number {
  let i = 0;
  let sum = 0;

  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      i++;
    }
  }
  return sum;
}

function pyramid(n: number): void {
  let tree = "&";
  let space = "";
  let i = 1;

  while (i <= n) {
    space = " ".repeat(n - i);
    console.log(space, tree, space);
    tree += "&&";
    i++;
  }
}

function foloopPyramid(n: number): void {
  let tree = "&";
  let space = "";

  for (let i = 1; i <= n; i++) {
    space = " ".repeat(n - i);
    console.log(space, tree, space);
    tree += "&&";
  }
}

console.log(foloopfun(17));
console.log(whilefun(17));
pyramid(69);
foloopPyramid(69);
