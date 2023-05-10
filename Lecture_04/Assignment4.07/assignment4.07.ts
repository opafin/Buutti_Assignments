//Array Methods

//Map, Filter, File, Reduce

//forEach

const names = ['rauni', 'matias', 'Kimmo', 'Heimo', 'isko', 'Sulevi', 'Mikko', 'daavid', 'otso', 'herkko']

//mutates the list
names.forEach((name) => {
  names[names.indexOf(name)] = name[0].toLocaleUpperCase() + name.slice(1)
})
console.log(...names)

//or a version that doesn't mutate the list (
names.forEach((name) => {
  console.log(name[0].toLowerCase() + name.slice(1))
})
