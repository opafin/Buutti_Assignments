var foo = 1;
console.log(foo);
var bar = 1;
var baz = 123;
function test(baz) {
  console.log(baz);
}
test(baz);
test(bar);
//tried with different formatting rules. using eslint and prettier, or eslint only
