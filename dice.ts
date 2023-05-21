/**
 * A factory function that creates a common die in range 1 -> {sides}
 * This was done as a part of an assignment to create a common game die.
 */
export const dieMaker = (sides: number) => {
  /**
   * Throws a common die a specified number of times.
   * returns an array of results
   * in range 1 -> ${dieMaker("sides")}
   * @param throwCount: number of times to throw the die
   */
  const beautifulDie = (throwCount = 1): number[] => {
    const throws = []
    for (let i = 0; i < throwCount; i++) {
      const multiplier = Math.random()
      const range = sides
      const result = Math.floor(range * multiplier) + 1
      throws.push(result)
    }
    return throws
  }
  return beautifulDie
}

interface indexDie {
  (sides: number): number
}
/**
 * Throws a 0-indexed die in  range 0 -> {sides} -1 and returns the resulting number.
 * This is a wrapper and helper function to turn our common die into a programmer's tool!
 */
export function indexDie(sides: number): number {
  const sizeXDie = dieMaker(sides)
  const result: number[] = sizeXDie()
  return result[0] - 1
}
