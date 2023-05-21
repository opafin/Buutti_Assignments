function getVowelCount(str: string) {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  for (const char of str) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count
}
console.log(getVowelCount('hejsan bågen!'))
