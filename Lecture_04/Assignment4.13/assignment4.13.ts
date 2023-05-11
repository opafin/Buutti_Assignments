// Assignment 4.13: Count Sheep
// Create a program that takes in a number from the command line, for example npm start 3 and prints a string "1 sheep...2 sheep...3 sheep..."

const fluffySheep = [Number(process.argv[2])]

fluffySheep.reduce((a, b, c, d) => {
  for (let i = 0; i < b; i++) {
    d.push(i)
  }
  return a + c + ' sheep...'
}, 0)

console.log(fluffySheep)
