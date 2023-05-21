function checkExam(key: string[], answers: string[]) {
  let score = 0
  for (let i = 0; i < key.length; i++) {
    if (answers[i] === '') {
      score += 0
    } else if (answers[i] === key[i]) {
      score += 4
    } else {
      score -= 1
    }
  }
  if (score < 0) {
    return 0
  } else {
    return score
  }
}
console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']))
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']))
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']))
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']))

// 6
// 7
// 16
// 0
