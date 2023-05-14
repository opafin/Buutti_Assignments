import { primeChecker } from './assignment4.21'
import { logSuccess } from './logRedAndGreen'
import { logError } from './logRedAndGreen'

// testing the primeChecker before using it to generate a primeTable!

//
// a prime-list 2-100 first result from googl
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])

// testing the primeChecker with the primes
// and logging the results in red and green
for (let testNumba = 0; testNumba <= 100; testNumba++) {
  if (primeChecker(testNumba) === 'Not a prime numba' && primes.has(testNumba) === false) {
    console.log(testNumba, 'Not a prime numba', logSuccess('Cörrect!'))
  } else if (primeChecker(testNumba) === 'a prime numba!' && primes.has(testNumba)) {
    console.log(testNumba, 'a prime numba!', logSuccess('Cörrect'))
  } else console.log(testNumba, logError('Däm!'))
}

// 0 Däm!   <- in red, fails to report if prime or not!
// 1 Däm!
// 2 a prime numba! Cörrect!   <- green
// 3 a prime numba! Cörrect!
// 4 Not a prime numba Cörrect!
// 5 a prime numba! Cörrect!
// 6 Not a prime numba Cörrect!
// 7 a prime numba! Cörrect!
