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

function fizzBuzz(n: number): void {
  let i = 0;

  while (i <= n) {
    i++;

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
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

fizzBuzz(20);
console.log(foloopfun(17));
console.log(whilefun(17));
pyramid(69);
foloopPyramid(69);
