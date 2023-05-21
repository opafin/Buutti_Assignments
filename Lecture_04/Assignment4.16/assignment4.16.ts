let start = Number(process.argv[2])
const end = Number(process.argv[3])

const numberArray = []
if (start > end) {
  for (start; start + 1 > end; start--) {
    numberArray.push(start)
  }
} else {
  for (start; start < end + 1; start++) {
    numberArray.push(start)
  }
}
console.log(numberArray)

// npx ts-node .\assignment4.16.ts 1 5  >>> [ 1, 2, 3, 4, 5 ]
// npx ts-node .\assignment4.16.ts -5 -1 >>> [ -5, -4, -3, -2, -1 ]
// npx ts-node .\assignment4.16.ts 9 5 >>> [ 9, 8, 7, 6, 5 ]

// works with ts-node
