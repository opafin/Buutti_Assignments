export const array419 = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32]

// lets use our dice again!
import { diceMaker } from '../Assignment4.04/assignment4.04'

// #UNNECESSARY EXCITED EXPLANATION
// slice and splice!
// create an array copy with slice -> tempArray = array.slice()
// make a die the size of our array: diceOfArrayLength = diceMaker(tempArray.length -1)
// consume the number our die chooses from our array copy with splice(diceOfArrayLength()[0], 1)
// ((the dice return a number array, so the indexer [0] has to be used.))
// add the number to the new random array
// >>>repeat>>>
// make a die the size of our array, now 1 shorter. etc...

// #SOLUTION 1
export function ArrayRandomizer(array: any[]) {
  const tempArray = array.slice()
  const randomArray = array.map(() => {
    const diceOfArrayLength = diceMaker(tempArray.length - 1)
    return tempArray.splice(diceOfArrayLength()[0] - 1, 1)[0]
  })
  return randomArray
}

// #SOLUTION 2 og foloop edition
function foloopArrayRandomizer(array: number[]) {
  const tempArrayOg = array.slice()
  const rndArray = []
  for (let i = 0; i < array.length; i++) {
    const diceOfArrayLength = diceMaker(tempArrayOg.length - 1)
    rndArray.push(tempArrayOg.splice(diceOfArrayLength()[0] - 1, 1)[0])
  }
  return rndArray
}
