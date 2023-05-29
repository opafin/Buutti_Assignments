import jwt from 'jsonwebtoken'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdvbGx1bSIsImlhdCI6MTY4NTM2MzExOCwiZXhwIjoxNjg1MzY2NzE4fQ.abnnxDmJf5Ps8A_ojbTnEsl6edEr68znwSWrRMe9aBM'

try {
  const data = jwt.verify(token, 'gollum')
  console.log(data)
} catch (error) {
  console.log('incorrect secret')
}
