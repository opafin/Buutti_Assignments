const generateDice = (sides: number) => {
  const beautifulDice = (throwsCount: number): number => {
    let total = 0
    for (let i = 0; i < throwsCount; i++) {
      const multiplier = Math.random()
      const range = sides - 1
      const result = Math.floor(range * multiplier) + 1
      console.log('one die with', sides, 'sides:', result)
      total += result
    }
    console.log('dice with', sides, 'sides total', total)
    return total
  }
  return beautifulDice
}

const sixSidedDie = generateDice(6)
const eigthSidedDie = generateDice(8)

sixSidedDie(2)
eigthSidedDie(2)
console.log(sixSidedDie(2) + eigthSidedDie(2))

//logs to see what's going on
// one die with 6 sides: 2
// one die with 6 sides: 5
// dice with 6 sides total 7
// one die with 8 sides: 1
// one die with 8 sides: 6
// dice with 8 sides total 7

// incredible damage 14
