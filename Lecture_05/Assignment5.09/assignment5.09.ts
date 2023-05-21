import { tester509 } from './tester5.09'

// #SOLUTION 1
// ifCalculator
function ifCalculator(op: string, a: number, b: number): number | string {
  if (op === '+') return a + b
  if (op === '*') return a * b
  if (op === '-') return a - b
  if (op === '/') return b !== 0 ? a / b : `${a}/0 = NaN!`
  return 'Nou such operation!'
}
tester509(ifCalculator)
// ifCalculator 0 / 0 = 0/0 = NaN!
// ifCalculator 1 & 1 = Nou such operation!
// ifCalculator 2 * 2 = 4
// ifCalculator 1 + 1 = 2
// ifCalculator 2 / 2 = 1

// #SOLUTION 2
// switchCalculator
//prettier-ignore
function switchCalculator(op: string, a: number, b: number): number | string {
   switch(op){
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return b !== 0 ? a / b : `${a}/0 = NaN!`   
} 
return 'Nou such operation!'
}
tester509(switchCalculator)
// switchCalculator  0 / 0 = 0/0 = NaN!
// switchCalculator  1 & 1 = Nou such operation!
// switchCalculator  2 * 2 = 4
// switchCalculator  1 + 1 = 2
// switchCalculator  2 / 2 = 1
