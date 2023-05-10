function capitalizer(stringi: string): void {
  let words = stringi.split(' ')
  words.forEach((word, index) => {
    words[index] = word[0].toLocaleUpperCase() + word.slice(1)
  })
  console.log(...words)
}
capitalizer('this is a very nice string')

var kalle = 'stringi'
