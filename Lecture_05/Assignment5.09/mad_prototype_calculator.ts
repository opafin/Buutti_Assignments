import { tester509 } from './tester5.09'

// #SOLUTION 5
// The PROTO1TYPE3CALCU3LA3TOR7
interface ICalculator509 {
  operations: string[]
  add: (a: number, b: number) => number
  multiply: (a: number, b: number) => number
  divide: (a: number, b: number) => number | string
  difference: (a: number, b: number) => number
  prototypeCalculator: (op: string, a: number, b: number) => number | string
}

interface ICalculator509Constructor {
  new (): ICalculator509
  prototype: ICalculator509
}

// This Calculator509(this:ICalculator509) param is like Python self param! :D
const Calculator509: ICalculator509Constructor = function Calculator509(this: ICalculator509) {
  /* Eventhough this function is empty, it has to be defined along with the constructor interface 
    to be able to construct the class with new (). Thank ba jeez for class syntax */
} as any //eslint-disable-line

Calculator509.prototype.add = function (a: number, b: number) {
  return a + b
}
Calculator509.prototype.multiply = function (a: number, b: number) {
  return a * b
}
Calculator509.prototype.difference = function (a: number, b: number) {
  return a - b
}

Calculator509.prototype.divide = function (a: number, b: number) {
  if (b === 0) return 'NaN!'
  return a / b
}

Calculator509.prototype.prototypeCalculator = function prototypeCalculator(
  op: string,
  a: number,
  b: number
): number | string {
  switch (op) {
    case '+':
      return this.add(a, b)
    case '-':
      return this.difference(a, b)
    case '*':
      return this.multiply(a, b)
    case '/':
      return this.divide(a, b)
  }
  return 'Nou such operation!'
}

const calc = new Calculator509()

tester509(calc.prototypeCalculator.bind(calc))

// bound prototypeCalculator 0 / 0 = 0/0 = NaN!
// bound prototypeCalculator 1 & 1 = Nou such operation!
// bound prototypeCalculator 2 * 2 = 4
// bound prototypeCalculator 1 + 1 = 2
// bound prototypeCalculator 2 / 2 = 1
