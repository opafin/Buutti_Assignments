const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32]

// lets use our dice again!
const makeDice = require('../Assignment4.04/assignment4.04')

// slice and splice!
// create an array copy with slice,
// roll a die the size of our array. here 10
// consume the number our die chooses from our array copy with splice(x, 1)
// and add it to the new array
// >>>repeat>>> roll a die the size of our array copy, now 9
// works with different sizes of arrays as well
const tempArray = array.slice()
const randomArray = array.map(() => {
  const diceOfArrayLength = makeDice(tempArray.length - 1)
  return tempArray.splice(diceOfArrayLength()[0], 1)[0]
})
console.log(randomArray)

// og foloop version
const tempArrayOg = array.slice()
const rndArray = []
for (let i = 0; i < array.length; i++) {
  const diceOfArrayLength = makeDice(tempArrayOg.length - 1)
  rndArray.push(tempArrayOg.splice(diceOfArrayLength()[0], 1)[0])
}
console.log(rndArray)
