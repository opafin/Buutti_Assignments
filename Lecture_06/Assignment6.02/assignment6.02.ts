function delay(text: string, time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, time)
  })
}

console.log('3')

delay('2', 1000)
  .then((val) => {
    console.log(val)
    return delay('1', 1000)
  })
  .then((val) => {
    console.log(val)
    return delay('GO!', 1000)
  })
  .then((val) => {
    console.log(val)
  })
