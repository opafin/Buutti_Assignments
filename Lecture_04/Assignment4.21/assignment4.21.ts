export function primeChecker(number: number) {
  if (number === 0 || number === 1) {
    return 'Not a prime numba'
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'Not a prime numba'
    }
  }
  return 'a prime numba!'
}

// bonus solution!
// the bakedPrimeChecker(), made with the og primeChecker()
// it's really fast after the initial loading
// it reads prime-numbers from a bson-file and generates a 'hash'Set() for fast look up
// we could have all the 78000 numbers in this file as well, but that would make the code
// slightly less readable
// promptSync allows the program to stay open and operate quickly on a given number
import fs from 'fs'
import bson from 'bson'
import promptSync from 'prompt-sync'
const serializedData = fs.readFileSync('primeTableSet.bson')
const primeTableSet = new Set(bson.deserialize(serializedData).data)
const prompt = promptSync()

// the bakedPrimeChecker checks any number from 0 to 1 million
// there are 78498 prime numbers in this range
function bakedPrimeChecker(number: number) {
  if (primeTableSet.has(number)) {
    console.log('a prime numba!')
  } else {
    console.log('Not a prime numba')
  }
}

// allocating the memory for the hashtable takes some time
// but then checking for the numbers is instantaneous
function bakedPrimeCheckerUserInterface() {
  const checkPrime = 'y'
  while (checkPrime === 'y') {
    const answer = prompt('wanna check a prime, add a numba ')
    if (answer === 'help') {
      break
    } else {
      bakedPrimeChecker(Number(answer))
    }
  }
}
bakedPrimeCheckerUserInterface()

// bonus nerdness
// it seems reading from .bson or .json doesn't effect the speed in this situation
// apparently calculating hashes for these numbers doesn't take that long either
// the bottleneck is the memory allocation for the hashset.
// but once it's in memory, it's fast! boom!
