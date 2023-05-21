function generateARandom(min: number, max: number): number {
  const multiplier = Math.random()
  const range = max + min + 1
  const randomInteger = Math.floor(range * multiplier) + min
  return randomInteger
}

for (let i = 0; i < 1000; i++) {
  const test: number = generateARandom(0, 100)
  if (test === 0) console.log(test)
  if (test === 100) console.log(test)
}
