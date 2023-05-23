const amount = Number(process.argv[2])
const source: string = process.argv[3].toLowerCase()
const target: string = process.argv[4].toLowerCase()
interface ConversionTable {
  [key: string]: number
}

const conversionTable: ConversionTable = {
  dl: 0.1,
  l: 1,
  oz: 0.0295735,
  c: 0.236588,
  pt: 0.473176
}

const literAmount = amount * conversionTable[source]
const targetAmount = literAmount / conversionTable[target]

console.log(`${amount} ${source} = ${targetAmount.toFixed(2)} ${target}`)

export {}
