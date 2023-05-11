const arrArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

const modulo3 = arrArray.filter((a) => a % 3 === 0)
console.log(modulo3)

const multipliedBy2 = modulo3.map((a) => a * 2)
console.log(multipliedBy2)

const sumOf = multipliedBy2.reduce((a, b) => a + b)
console.log(sumOf)
