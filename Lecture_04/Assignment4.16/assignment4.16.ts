let [start, staph] = process.argv.slice(2).map(Number)

const numberArray = []
if (start > staph) {
  for (start; start + 1 > staph; start--) {
    numberArray.push(start)
  }
} else {
  for (start; start < staph + 1; start++) {
    numberArray.push(start)
  }
}
console.log(numberArray)

// npx ts-node .\assignment4.16.ts 1 5  >>> [ 1, 2, 3, 4, 5 ]
// npx ts-node .\assignment4.16.ts -5 -1 >>> [ -5, -4, -3, -2, -1 ]
// npx ts-node .\assignment4.16.ts 9 5 >>> [ 9, 8, 7, 6, 5 ]

// works with ts-node
