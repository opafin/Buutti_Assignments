function fun(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
function whileSolution(n) {
  var i = 1;
  var sum = 0;
  while (i < n) {
    sum += i;
    i++;
  }
  return sum;
}
console.log(fun(10));
console.log(whileSolution(10));
