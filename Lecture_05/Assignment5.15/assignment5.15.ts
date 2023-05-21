// Example:
// 1: 3 is odd, so we multiply by three and add one. n1 = n0 * 3 + 1 = 10
// 2: 10 is even, so we divide by two. n2 = n1 / 2 = 5

function collatzConjecture(n: number) {
  let steps = 0
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2
    } else {
      n = n * 3 + 1
    }
    steps++
  }
  return steps
}
console.log(collatzConjecture(42))
