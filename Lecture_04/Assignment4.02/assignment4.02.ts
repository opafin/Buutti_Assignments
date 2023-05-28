export function generateARandom(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min
}

for (let i = 0; i < 1000; i++) {
  const test: number = generateARandom(0, 100)
  if (test === 0) console.log(test)
  if (test === 100) console.log(test)
}
