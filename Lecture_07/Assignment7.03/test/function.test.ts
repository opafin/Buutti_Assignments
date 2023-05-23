import { ifCalculator702 } from '../assignment7.02'

ifCalculator702('*', 2, 2)

test('4 is 4 bro', () => {
  expect(4).toBe(4)
})

test('double should be double', () => {
  const result = ifCalculator702('*', 2, 2)
  expect(result).toBe(4)
})

test('division by zero should return NaN message', () => {
  expect(ifCalculator702('/', 5, 0)).toBe('5/0 = NaN!')
})
// test/functions.test.js
// import { round } from '../src/functions.js'

// test('rounded 0 should be 0', () => {
//     expect(round(0)).toBe(0)
// })
// test('rounded 1 should be 1', () => {
//     expect(round(1)).toBe(1)
// })
// test('Small remainder should round down', () => {
//     expect(round(5.499)).toBe(5)
// })
// test('Large remainder should round up', () => {
//     expect(round(5.5)).toBe(6)
// })
// test('Invalid input should return NaN', () => {
//     expect(round('zero')).toBe(NaN)
// })
// // ^ The last test doesn't work with TypeScript!
