function overTheMidline(numbers: number[]) {
  let total = 0
  for (const num of numbers) {
    total += num
  }
  const average = total / numbers.length
  const overTheMidline = []
  for (const num of numbers) {
    if (num > average) {
      overTheMidline.push(num)
    }
  }
  return overTheMidline
}

console.log(overTheMidline([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
