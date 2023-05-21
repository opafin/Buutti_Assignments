export const diceMaker = (sides: number) => {
  const beautifulDice = (throwsCount = 1): number[] => {
    const throws = []
    for (let i = 0; i < throwsCount; i++) {
      const multiplier = Math.random()
      const range = sides
      const result = Math.floor(range * multiplier) + 1
      throws.push(result)
    }
    return throws
  }
  return beautifulDice
}

const sixSidedDie = diceMaker(6)
// const eigthSidedDie = diceMaker(8)

console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())
console.log(sixSidedDie())

// sixSidedDie(2)
// eigthSidedDie(2)

// since now the dice take a count of throws,
// lets have it return an array with all the throws
// e.g 100-sided die thrown 100 times -> array
// [
//   3, 10, 90, 56, 16, 25, 20, 49, 10, 44, 13,  7,
//   2,  9, 36, 36, 66, 37, 36, 64, 35, 60, 70, 55,
//  12, 74, 98,  9, 52, 51, 10, 46,  2, 39, 91, 70,
//  54,  2, 50, 77, 94, 15, 18, 50, 90, 34,  7,  6,
//  72, 81, 36, 34, 56, 16, 74, 29, 19, 41, 23, 72,
//  98, 76, 88, 25, 62, 55, 42, 61, 82, 65, 94, 90,
//  88, 97, 17, 34, 75,  1, 89, 80, 67, 42, 97, 75,
//  27, 28, 63, 10, 75, 81, 43, 66, 21, 26, 64, 52,
//  63, 85, 23, 22
// ]
// some damage! 4802
