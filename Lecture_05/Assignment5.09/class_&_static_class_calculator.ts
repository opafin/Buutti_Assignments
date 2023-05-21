import { tester509 } from './tester5.09'

// #SOLUTION 3
// ClassCalculator
// requires initialization, dot syntax and bind() for testing
// because otherwise the context of the class intance is lost when input into another function
class ClassCalculator {
  private operations: { [key: string]: (a: number, b: number) => number | string }
  constructor() {
    this.operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => (b === 0 ? 'NaN!' : a / b)
    }
  }
  methodCalculator(op: string, a: number, b: number): number | string {
    if (op in this.operations) {
      return this.operations[op](a, b)
    } else return 'Nou such operation!'
  }
}

const classCalculator = new ClassCalculator()
tester509(classCalculator.methodCalculator.bind(classCalculator))
// bound methodCalculator  0 / 0 = 0/0 = NaN!
// bound methodCalculator  1 & 1 = Nou such operation!
// bound methodCalculator  2 * 2 = 4
// bound methodCalculator  1 + 1 = 2
// bound methodCalculator  2 / 2 = 1

// #SOLUTION 4
// StaticClassCalculator
// easier to use if object instances are not required.
// Carries around its associated context to testing without .bind, and needs no initialization
class StaticClassCalculator {
  private static operations: { [key: string]: (a: number, b: number) => number | string } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? 'NaN!' : a / b)
  }

  static methodCalculator(op: string, a: number, b: number): number | string {
    if (op in StaticClassCalculator.operations) return StaticClassCalculator.operations[op](a, b)
    else return 'Nou such operation!'
  }
}
tester509(StaticClassCalculator.methodCalculator)

// methodCalculator  0 / 0 = 0/0 = NaN!
// methodCalculator  1 & 1 = Nou such operation!
// methodCalculator  2 * 2 = 4
// methodCalculator  1 + 1 = 2
// methodCalculator  2 / 2 = 1
