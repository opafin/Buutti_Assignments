//I'll use at least the process.argv array for all of these so lets grab it!
const argv = process.argv

// // OG/Gangsta foloop
let foloopString = ''
for (let i = 1; i < Number(argv[2]) + 1; i++) {
  foloopString += i + ' sheep...'
}
console.log(foloopString)

// 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...
// 7 sheep...8 sheep...9 sheep...10 sheep...11 sheep...12 sheep...
// 13 sheep...14 sheep...15 sheep...16 sheep...17 sheep...18 sheep...

// recursion edition
function sheepCount(n: number, i = 0, countString = ''): string {
  if (n > 0) {
    n -= 1
    i += 1
    countString += `${i} sheep...`
    return sheepCount(n, i, countString)
  } else {
    return countString
  }
}
console.log(sheepCount(Number(argv[2])))

// a very fabulous reduce() edition, (argv is an array and reduce() works straight on it kjeh!)
console.log(
  argv.reduce((a: string, b, c, d: string[]) => {
    d.splice(0, 1)
    for (let i = 1; i <= Number(d[0]); i++) {
      a += i + ' sheep...'
    }
    return a
  }, '')
)

// OG/gangsta foloop is the best, and does the job without the fabulous reduce()
// but diversity leads to innovations

// if the initial value of '' wasn't used
// reduce() would always pick the folderpath at array[0] before the lovely sheep.
// Making this taught me that among other things like

// can't skip b and c in the callbkfn call() if d is to be used
// array-mutation ruined the recursive version and forloop versions, if i put the reduce() version at first

// etc, ps I'm not bored, i'm learning!
