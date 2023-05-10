const numbers = [749385, 498654, 234534, 345467, 956876, 365457, 235667, 464534, 346436, 873453]

const newArray = numbers.filter((number) => {
  if (number % 3 === 0 || number % 5 === 0) {
    if (number % 5 !== 0 || number % 3 !== 0) {
      return number
    }
  }
})
console.log(newArray)
