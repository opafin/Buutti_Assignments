function joinator(stringit: string[], stringi: string) {
  const newString = stringit.reduce((accumulator, element, index) => {
    if (index < stringit.length - 1) {
      return accumulator + element + stringi
    } else return accumulator + element
  }, '')
  return newString
}
console.log(joinator(['tarzan', 'monkees', 'friends'], 'jane'))

// Using the forEachLoop to explain reduce
// Instead of having to declare a variable outside the loop,
// Reduce provides us with the accumulator, in addition to element and index (and array)

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
