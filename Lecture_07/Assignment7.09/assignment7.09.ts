// this is min and max inclusive
// boolean is optional, and defaults to false

// also maybe i should've used javascript instead of typescript for this assignment

export function generateARandom(min: number, max: number, integer: boolean): number {
  if (integer) return Math.floor(Math.random() * (max - min + 1) + min)
  else return Math.random() * (max - min + 1) + min
}
