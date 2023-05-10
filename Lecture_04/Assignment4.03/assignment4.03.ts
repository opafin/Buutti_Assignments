function addThese(a: number, b: number) {
  return a + b
}

const addTheseAnonymous = function (a: number, b: number) {
  return a + b
}

const arrowPlus = (a: number, b: number) => {
  return a + b
}

addThese(2, 2)
addTheseAnonymous(2, 2)
arrowPlus(2, 2)
