const competitors = ['Julia', 'Mark', 'Spencer', 'Ann', 'John', 'Joe']
const ordinals = ['st', 'nd', 'rd', 'th']

console.log(
  competitors.map((name, index) => {
    index < 3 ? index : (index = 3)
    return index + 1 + ordinals[index] + ' competitor was ' + name
  })
)
