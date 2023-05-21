const competitors = ['Julia', 'Mark', 'Spencer', 'Ann', 'John', 'Joe']
const ordinals = ['st', 'nd', 'rd', 'th']

console.log(
  competitors.map((name, index) => {
    if (index <= 3) return `${index + 1}${ordinals[index]} competitor was ${name}`
    else return `${index + 1}th competitor was ${name}`
  })
)
