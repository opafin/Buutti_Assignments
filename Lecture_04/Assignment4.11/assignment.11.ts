// #SOLUTION 1
function joinator(stringit: string[], stringi: string) {
  const newString = stringit.reduce((accumulator, element, index) => {
    if (index < stringit.length - 1) {
      return accumulator + element + stringi
    } else return accumulator + element
  }, '')
  return newString
}
console.log(joinator(['tarzan', 'monkees', 'friends'], 'jane'))

// #UNNECESSARY EXCITED EXPLANATION
// Using the forEachLoop to explain reduce
// Instead of having to declare a variable outside the loop
// reduce provides us with the (accumulator) within it in addition to (element, index, array) that forEach also provides
// reduce also returns the accumulator each loop, and in the end, unlike forEach, where instead of return, we can use assignment to the variable outside.

// #SOLUTION 2
function forEachJoinator(stringit: string[], stringi: string) {
  let newString = ''
  stringit.forEach((element, index) => {
    if (index < stringit.length - 1) {
      newString += element + stringi
    } else newString += element
  }, '')
  return newString
}
console.log(forEachJoinator(['tarzan', 'monkees', 'friends'], 'jane'))
