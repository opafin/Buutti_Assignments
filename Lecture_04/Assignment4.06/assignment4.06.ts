function factorial(n: number): number {
  if (n > 1) return n * factorial(n - 1)
  else {
    return n
  }
}
console.log(factorial(5))
