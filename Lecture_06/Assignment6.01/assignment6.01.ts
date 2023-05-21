function callbackDelay(text: string, time: number, callback: (text: string) => void) {
  setTimeout(() => {
    callback(text)
  }, time)
}

console.log('3')

callbackDelay('2', 1000, (val) => {
  console.log(val)
  callbackDelay('1', 1000, (val) => {
    console.log(val)
    callbackDelay('GO!', 1000, (val) => {
      console.log(val)
    })
  })
})
