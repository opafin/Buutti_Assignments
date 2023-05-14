import { charIndex } from './bonuspractice'

const numerizedString = process.argv[2]
  .toUpperCase()
  .split('')
  .reduce((a: string, b: string) => {
    a += String(charIndex[b])
    return a
  }, '')
console.log(numerizedString)

// jane = 101145
// tarzan = 2011826114
// monkees = 131514115519
