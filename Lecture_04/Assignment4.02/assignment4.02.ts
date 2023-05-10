function generateARandom(min: number, max: number): number {
  const multiplier = Math.random()
  const range = max + min - 1
  const randomInteger = Math.floor(range * multiplier) + 1
  return randomInteger
}
console.log(generateARandom(1, 100))
