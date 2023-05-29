interface Student {
  name: string
  score: number
  grade?: number
}

export function checkDataHtmlResponse(students: Student[]) {
  return `
      <html>
        <head>
        <style>
        body {
          font-family: 'Calibri', sans-serif;
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
          font-family: 'Arial Black', Gadget, sans-serif;
        }
      </style>
    </head>
    <body>
      <div class="container">
            <h1>Missing Data!</h1>
                <table>
                <tr>
                  <th>Student</th>
                  <th>Score</th>
                </tr>
                ${students
                  .map(
                    (student) => `
                  <tr>
                    <td>${student.name || 'MISSING'}</td>
                    <td>${student.score || '<mark>MISSING</mark>'}</td>
                  </tr>
                `
                  )
                  .join('')}
              </table>
          </div>
        </body>
      </html>
    `
}
