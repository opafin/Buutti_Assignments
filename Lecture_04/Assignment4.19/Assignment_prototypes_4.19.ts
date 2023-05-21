import { array419 } from './assignment4.19'
import { diceMaker } from '../Assignment4.04/assignment4.04'
import '../../extension_test'
// #SOLUTION 3
// Wrapper & helper functions
// Lets fix this: "splice(diceOfArrayLength()[0] - 1, 1)[0])"
// Alhough in reality we'd just redo the code for our die entirely
// .. and really not extend the Array.prototype :D
// But lets use our newly found prototype skills

/**
 * Throws a die in range 0 -> {sides} and returns the resulting number.
 * This is a wrapper and helper function to turn our real life die into a coder's tool!
 */
interface indexDie {
  (sides: number): number
}
function indexDie(sides: number): number {
  const sizeXDice = diceMaker(sides)
  const result: number[] = sizeXDice()
  return result[0] - 1
}

declare global {
  interface Array<T> {
    /**
     * Splices an array at a given index and returns the value at that index, rather than an array.
     */
    precisionSplicer(index: number): T | undefined
  }
}
Array.prototype.precisionSplicer = function <T>(this: T[], index: number): T | undefined {
  if (index >= 0 && index < this.length) {
    const result = this.splice(index, 1)[0]
    return result || undefined
  }
}

const temporaryArray = array419.slice()
const randomizedArray = array419.map(() => {
  return temporaryArray.precisionSplicer(indexDie(temporaryArray.lastIndex()))
})
console.log(randomizedArray)
