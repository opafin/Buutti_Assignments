
function fib(start = [0, 1]) {
  console.log(start[0])
  let step = start[0] + start[1]
  start[0] = start[1]
  start[1] = step
  setTimeout(() => {
    fib(start)
  }, 1000)
}
fib()
