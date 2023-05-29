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

//prettier-ignore
export function createStudentTableHtmlResponse(data: StudentsSuperTable) {
  return `
      <html>
        <head>
          <style>
            body {
              font-family: Calibri, sans-serif;
            }
            .container {
              max-width: 800px;
              margin: auto;
              padding: 20px;
              text-align: center;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 10px;
            }
            .green {
              background-color: #90ee90;
            }
            .blue {
              background-color: #add8e6;
            }
            .red {
              background-color: #ffcccb;
            }
             mark {
      background-color: black;
      color: yellow;
    }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Students</h1>
            <table>
              <tr>
                <th>Student</th>
                <th>Score</th>
                <th>Average Plus</th>
                <th>Pro</th>
                <th>Noob</th>
              </tr>
              ${data.allGraded
                .map(
                  (student) => `
                <tr>
                  <td>${student.name}</td>
                  <td>${student.score}</td>
                  <td ${data.avgPlus.some((avgPlusStudent) => avgPlusStudent.name === student.name) ? 'class="green"' : ''}></td>
                  <td ${data.pro.name === student.name ? 'class="blue"' : ''}></td>
                  <td ${data.noob.name === student.name ? 'class="red"' : ''}></td>
                </tr>
              `
                )
                .join('')}
            </table>
            <div class="summary">
              <h1>Summary</h1>
              <p>Total Score: ${data.totalScore}</p>
              <p>Student Count: ${data.studentCount}</p>
              <p>Average Score: ${data.avgScore}</p>
            </div>
          </div>
        </body>
      </html>
    `
}
