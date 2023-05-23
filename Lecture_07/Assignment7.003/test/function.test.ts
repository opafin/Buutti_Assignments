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
