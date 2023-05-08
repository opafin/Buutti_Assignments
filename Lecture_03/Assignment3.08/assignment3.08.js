function foloopfun(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
function whilefun(n) {
  var i = 0;
  var sum = 0;
  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      i++;
    }
  }
  return sum;
}
function fizzBuzz(n) {
  var i = 0;
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
console.log(foloopfun(17));
console.log(whilefun(17));
console.log(fizzBuzz(20));
fizzBuzz(20);
