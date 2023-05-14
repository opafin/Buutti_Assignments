function fibonacciMaker(length: number, array: number[] = [0, 1]) {
  array.push(array[array.length - 1] + array[array.length - 2])
  if (length > 3) fibonacciMaker((length -= 1), array)
  return array
}
// takes a length
console.log(fibonacciMaker(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
// or a length and a starting point
console.log(fibonacciMaker(8, [55, 89])) // [21, 34, 55, 89, 144, 233, 377, 610]
