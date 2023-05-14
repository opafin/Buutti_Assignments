import fs from 'fs'
import bson from 'bson'
import { primeChecker } from './assignment4.21'

// lets generate a larger set of prime numbers with the tested primeChecker
// say all the primes from range 0 to 1 million
let totalfound = 0
const primeTable: number[] = []
for (let i = 0; i <= 1000000; i++) {
  if (primeChecker(i) === 'a prime numba!') {
    primeTable.push(i)
    totalfound++
  }
}
fs.writeFileSync('primeTable.json', JSON.stringify(primeTable))
const serializedData = bson.serialize({ primeTable })
fs.writeFileSync('primeTableSet.bson', serializedData)

console.log(totalfound)
// result: 78498 found, saved as primeTable .json and .bson

// checking reference:
// According to Wolfram Alpha, there are 78,498 prime numbers below one million.
// should be cörrect!
