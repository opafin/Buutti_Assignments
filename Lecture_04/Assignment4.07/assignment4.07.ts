const names = ['rauni', 'matias', 'Kimmo', 'Heimo', 'isko', 'Sulevi', 'Mikko', 'daavid', 'otso', 'herkko']

// #SOLUTION 1
// mutates the list
names.forEach((name) => {
  names[names.indexOf(name)] = name[0].toLocaleUpperCase() + name.slice(1)
})
console.log(...names)

// #SOLUTION 2
// or a version that doesn't mutate the list (
names.forEach((name) => {
  console.log(name[0].toLowerCase() + name.slice(1))
})
