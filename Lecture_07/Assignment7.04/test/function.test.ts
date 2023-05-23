import { ifCalculator702 } from '../assignment7.02'

describe('4 bro', () => {
  it('4 is 4 bro', () => {
    expect(4).toBe(4)
  })
})

describe('double', () => {
  it('double should be double', () => {
    const result = ifCalculator702('*', 2, 2)
    expect(result).toBe(4)
  })
  it('division by zero should return NaN message', () => {
    expect(ifCalculator702('/', 5, 0)).toBe('5/0 = NaN!')
  })
})
