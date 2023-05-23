import { execSync } from 'child_process'

describe('Assignment 7.7: Command Line Converter', () => {
  it('can convert 6 dl to oz', () => {
    const result = execSync('npx ts-node assignment7.07.ts 6 dl oz')
    expect(result.toString().trim()).toBe('6 dl = 20.29 oz')
  })

  it('can convert 1 l to pt', () => {
    const result = execSync('npx ts-node assignment7.07.ts 1 l pt')
    expect(result.toString().trim()).toBe('1 l = 2.11 pt')
  })

  it('can convert 5 c to l', () => {
    const result = execSync('npx ts-node assignment7.07.ts 5 c l')
    expect(result.toString().trim()).toBe('5 c = 1.18 l')
  })

  it('can convert 16 oz to c', () => {
    const result = execSync('npx ts-node assignment7.07.ts 16 oz c')
    expect(result.toString().trim()).toBe('16 oz = 2.00 c')
  })

  it('can convert 1 pt to dl', () => {
    const result = execSync('npx ts-node assignment7.07.ts 1 pt dl')
    expect(result.toString().trim()).toBe('1 pt = 4.73 dl')
  })
})
