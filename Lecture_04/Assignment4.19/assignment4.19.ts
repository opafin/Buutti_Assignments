const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32]

// lets use our dice again!
import { diceMaker } from '../Assignment4.04/assignment4.04'

// slice and splice!
// create an array copy with slice: tempArray = array.slice()
// make a die the size of our array: diceOfArrayLength = diceMaker(tempArray.length -1)
// consume the number our die chooses from our array copy with splice(diceOfArrayLength()[0], 1)
// the dice return a number array, so the index [0] has to be used.
// add the number to the new random array
// >>>repeat>>>
// make a die the size of our array, now 1 shorter. etc...
const tempArray = array.slice()
const randomArray = array.map(() => {
  const diceOfArrayLength = diceMaker(tempArray.length - 1)
  return tempArray.splice(diceOfArrayLength()[0], 1)[0]
})
console.log(randomArray)

// BONUS: og foloop version
const tempArrayOg = array.slice()
const rndArray = []
for (let i = 0; i < array.length; i++) {
  const diceOfArrayLength = diceMaker(tempArrayOg.length - 1)
  rndArray.push(tempArrayOg.splice(diceOfArrayLength()[0], 1)[0])
}
console.log(rndArray)
