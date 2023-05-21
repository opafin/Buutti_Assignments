export function tester509(calculator: (op: string, a: number, b: number) => number | string): string {
  const operations = ['+', '-', '*', '/', '&']

  for (const operation of operations) {
    operation
    for (let i = 0; i < 3; i++) {
      console.log(`${calculator.name} ${i} ${operation} ${i} = ${calculator(operation, i, i)}`)
    }
  }
  return 'Tests tested!'
}
