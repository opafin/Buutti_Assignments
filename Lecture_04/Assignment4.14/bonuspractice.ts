// Assignment 4.14: Indexed Alphabet
// Create a program that turns any given word into charIndex version of the word

// oh noes where are half of the letters, i have to get them from somewhere
export let charIndex: AbcIndex = { a: 1, b: 2, c: 3, d: 4, e: 5, y: 25, z: 26 }

import * as papa from 'papaparse'
const fs = require('fs')
const csvFile = fs.readFileSync('alphabet.csv', 'utf8')
const alphabet: any = papa.parse(csvFile).data[0]
console.log(alphabet)

// making the letter : index pairs
interface AbcIndex {
  [key: string]: number
}
const numerizedAlphabet = alphabet.reduce((a: AbcIndex, letter = '', index = 0): AbcIndex => {
  a[letter] = index + 1
  return a
}, {})

// using JSON.stringify to render the lateral format, normal console.log prints out as a vertically shown obj. The logical structure would've been the same.
console.log(JSON.stringify(numerizedAlphabet))

// here we go! hyphens removed by saving with prettier
const charIndexhyphenated = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26} //prettier-ignore
charIndex = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26 }

// trying this out i noticed
// running the other script where this script is required will execute all the console.logs of this script

// when you require a file, all top-level code in that file is executed.
// It's best practice to keep module exports clean and free of side effects.
