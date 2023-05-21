import { diceMaker } from './assignment4.04'

const basicTests = () => {
  const sixSidedDie = diceMaker(6)

  for (let i = 0; i < 1000; i++) {
    const test: number = sixSidedDie()[0]
    if (test === 1) console.log(test)
    if (test === 6) console.log(test)
  }
}
basicTests()
