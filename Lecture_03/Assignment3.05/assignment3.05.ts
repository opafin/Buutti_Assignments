const arr = ['banaani', 'omena', 'mandariini', 'appelsiini', 'kurkku', 'tomaatti', 'peruna']

console.log(arr[2], arr[3], arr.length)
arr.sort()
console.log(arr)
arr.push('sipuli')
console.log(arr)
arr.shift()
console.log(arr)

arr.forEach((element) => {
  console.log(element)
})

console.log()
arr.forEach((element) => {
  if (element.includes('r')) {
    console.log(element)
  }
})

// fixed!
