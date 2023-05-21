const getValue = function (): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random())
    }, Math.random() * 1500)
  })
}

const promiseArray = [getValue(), getValue()]

Promise.all(promiseArray).then((values) => {
  console.log(values)
})

const asyncPromises = async (numbers: number) => {
  const array: Promise<number>[] = []
  for (let i = 0; i < numbers; i++) {
    array.push(getValue())
  }
  const numbas = await Promise.all(array)
  console.log(numbas)
}
asyncPromises(2)

const asyncAll = async () => {
  const array: Promise<number>[] = []
  array.push(getValue())
  array.push(getValue())
  const numbas = await Promise.all(array)
  console.log(numbas)
}
asyncAll()

const asyncTest = async () => {
  const a = await getValue()
  const b = await getValue()
  console.log('async\t', a, b)
}
asyncTest()
