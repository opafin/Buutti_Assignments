export function ifCalculator702(op: string, a: number, b: number): number | string {
  if (op === '+') return a + b
  if (op === '*') return a * b
  if (op === '-') return a - b
  if (op === '/') return b !== 0 ? a / b : `${a}/0 = NaN!`
  return 'Nou such operation!'
}
