// Lets generate a case where we use the main features of reduce()
// *** a bug in the game! ***
// ***Däm! Mr Dandelion's rested bonus should have increased his xp-generation, but it didn't!***
// ***Turns out we have the data for Mr. Dandelion's daily rest level and his gained xp!***
// ***Find out Mr. Dandelion's XP adjusted by his rest levels***

// we don't actually have a dataset
// so lets use the diceMaker from assignment 4.04 to make some dice and generate some numbers!
import { diceMaker } from './../Assignment4.04/assignment4.04'
// ... and to make a 100 sided die. Lets be glad we're in a simulation because
// a 100 sided in real life would still be rolling it's first roll.
const hundredSidedDie = diceMaker(100)

// With our die lets generate a list of rest levels
const restLevels = hundredSidedDie(100)
// and also generate a list of random xp amounts
const randomDailyXp = hundredSidedDie(100)

//e.g
// [
//   33, 25, 99, 39, 58, 75, 88, 16, 51, 27, 78, 99,
//   29, 67, 53, 90,  8, 18, 97, 21, 59, 32,  3,  4,
//   30, 16, 85,  1, 48, 90, 48, 56, 13, 36, 59, 12,
//   83, 63, 49, 55, 28, 16, 99, 88, 91, 24, 60, 55,
//   65, 91, 26, 54, 19, 70, 44, 20, 28, 65,  5,  1,
//    6, 18, 63, 78, 20, 58, 53, 10, 26, 44, 30, 57,
//   72, 52, 79, 85, 96,  4, 33, 40, 17, 50, 54, 54,
//    2, 52,  6, 59, 40, 91, 45, 16,  9, 69, 85, 33,
//   29,  1, 96, 14
// ]

// [
//   33, 25, 99, 39, 58, 75, 88, 16, 51, 27, 78, 99,
//   29, 67, 53, 90,  8, 18, 97, 21, 59, 32,  3,  4,
//   30, 16, 85,  1, 48, 90, 48, 56, 13, 36, 59, 12,
//   83, 63, 49, 55, 28, 16, 99, 88, 91, 24, 60, 55,
//   65, 91, 26, 54, 19, 70, 44, 20, 28, 65,  5,  1,
//    6, 18, 63, 78, 20, 58, 53, 10, 26, 44, 30, 57,
//   72, 52, 79, 85, 96,  4, 33, 40, 17, 50, 54, 54,
//    2, 52,  6, 59, 40, 91, 45, 16,  9, 69, 85, 33,
//   29,  1, 96, 14
// ]

console.log(randomDailyXp.reduce((a: number, b: number) => a + b) * 100, 0)
//e.g 460800 XP without considering rest!

// lets combine and convert these rolls into a dataset with map()
// creating a game data set with
// "day numbers"
// "fatigue modifiers"
// "experience gained"
type DayData = { [key: string]: { fatigue: number; dailyXp: number } }
const dayData: DayData[] = restLevels.map((element: number, index: number) => {
  return {
    ['day ' + (index + 1)]: { fatigue: Number((element / 100 + 1).toFixed(2)), dailyXp: randomDailyXp[index] * 100 }
  }
})
console.log(dayData)

// { 'day 1': { fatigue: 1.22, dailyXp: 3600 } },
// { 'day 2': { fatigue: 1.78, dailyXp: 3900 } },
// { 'day 3': { fatigue: 1.72, dailyXp: 7700 } },
// { 'day 4': { fatigue: 1.27, dailyXp: 1000 } },
// { 'day 5': { fatigue: 1.74, dailyXp: 5800 } },
// { 'day 6': { fatigue: 1.48, dailyXp: 8000 } },
// { 'day 7': { fatigue: 1.18, dailyXp: 2300 } },
// { 'day 8': { fatigue: 1.47, dailyXp: 9500 } },
// { 'day 9': { fatigue: 1.23, dailyXp: 4400 } },
// etc.

// Lets use reduce to see the adjusted XP for Mr. Dandelion
const xp = dayData.reduce((accumulator: number, element: DayData, index: number) => {
  const key = 'day ' + (index + 1)
  const adjustedXp = element[key]['fatigue'] * element[key]['dailyXp']
  return accumulator + adjustedXp
}, 0)
console.log(xp)

// result: XP bumped to 760716 by all the good rest !
