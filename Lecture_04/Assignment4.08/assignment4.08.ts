const words = [
  'city',
  'distribute',
  'battlefield',
  'relationship',
  'spread',
  'orchestra',
  'directory',
  'copy',
  'raise',
  'ice'
]
function reverseStrings(inputArray: string[]) {
  const reversedArray = inputArray.map((str) => str.split('').reverse().join(''))
  return reversedArray
}
console.log(reverseStrings(words))
