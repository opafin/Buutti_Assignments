const callback = (total: number) => {
  return console.log(total)
}
function sumOfJustUnderABillion(callback: (number: number) => void): void {
  let total = 0
  for (let i = 0; i < 1000000000; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      total += i
    }
  }
  callback(total)
}
sumOfJustUnderABillion(callback)
