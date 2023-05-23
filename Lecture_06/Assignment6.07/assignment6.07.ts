import '../../extension_test'

const students = [
  { name: 'Markku', score: 99 },
  { name: 'Karoliina', score: 58 },
  { name: 'Susanna', score: 69 },
  { name: 'Benjamin', score: 77 },
  { name: 'Isak', score: 49 },
  { name: 'Liisa', score: 89 }
]

interface StudentsSuperTable {
  allGraded: Student[]
  avgPlus: Student[]
  noob: Student
  pro: Student
  totalScore: number
  studentCount: number
  avgScore: number
}
interface Student {
  name: string
  score: number
  grade?: number
}

function createStudentTable(students: Student[]) {
  let sTable: StudentsSuperTable = {
    allGraded: [],
    avgPlus: [],
    pro: { name: 'Jane', score: -Infinity, grade: 5 },
    noob: { name: 'Tarzan', score: Infinity, grade: 5 },
    totalScore: 0,
    studentCount: 0,
    avgScore: 0
  }

  sTable = students.reduce((sTable, student, index, array) => {
    // Pro'est student
    if (student.score > sTable.pro.score) {
      sTable.pro = student
    }
    // Noob'est student
    if (student.score < sTable.noob.score) {
      sTable.noob = student
    }
    // Avg-Score
    sTable.totalScore += student.score
    sTable.studentCount += 1
    if (index === array.lastIndex()) {
      //if it seems like there's something suspicious going on here, yes there is! All the prototype practice resulted in this blasphemous JS-Array-extension method lastIndex() Returns the last index of the array. Alternate to ${Array.length -1}
      sTable.avgScore = sTable.totalScore / sTable.studentCount
      // Using a for to iterate over the array again after the average score has been found.
      for (const niceStudent of array) {
        // Students with avg+ score
        if (niceStudent.score > sTable.avgScore) {
          sTable.avgPlus.push(niceStudent)
        }
        // Grading
        let grade = 5
        if (niceStudent.score < 40) {
          grade = 1
        } else if (niceStudent.score < 60) {
          grade = 2
        } else if (niceStudent.score < 80) {
          grade = 3
        } else if (niceStudent.score < 95) {
          grade = 4
        } else grade = 5

        const gradedStudent = { name: niceStudent.name, score: niceStudent.score, grade: grade }
        sTable.allGraded.push(gradedStudent)
      }
      return sTable
    }
    return sTable
  }, sTable)

  return sTable
}

console.log(createStudentTable(students))

// {
//     allGraded: [
//       { name: 'Markku', score: 99, grade: 5 },
//       { name: 'Karoliina', score: 58, grade: 2 },
//       { name: 'Susanna', score: 69, grade: 3 },
//       { name: 'Benjamin', score: 77, grade: 3 },
//       { name: 'Isak', score: 49, grade: 2 },
//       { name: 'Liisa', score: 89, grade: 4 }
//     ],
//     avgPlus: [
//       { name: 'Markku', score: 99 },
//       { name: 'Benjamin', score: 77 },
//       { name: 'Liisa', score: 89 }
//     ],
//     pro: { name: 'Markku', score: 99 },
//     noob: { name: 'Isak', score: 49 },
//     totalScore: 441,
//     studentCount: 6,
//     avgScore: 73.5
//   }

// this approach is not modular at all, it could be cut at each comment
// but it's a common way to process a {student, score} -table
// and it was fun to make a big reduce()!

// there is something a little bit clacky about it, is there?
