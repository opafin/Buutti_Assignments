import express, { Request, Response, NextFunction } from 'express'
import { middleware, unknownEndpoint } from './middlewares'

const server = express()
server.use(express.static('public'))

server.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

server.use(middleware)

interface Student {
  id: string
  name: string
  email: string
}
const students: Student[] = []

server.use(express.json())

server.get('/students', (req: Request, res: Response) => {
  const studentIDs = students.reduce((IDs: string[], student: Student) => {
    IDs.push(student.id)
    return IDs
  }, [])
  res.send(studentIDs)
})

server.get('/student/:id', (req: Request, res: Response) => {
  const id = req.params.id
  console.log(req.params.id)
  const student = students.find((student) => student.id === id)
  if (student) {
    res.send(student)
  } else {
    res.status(404).send({ error: 'No student found' })
  }
})

server.post('/student', (req: Request, res: Response) => {
  const { id, name, email } = req.body as Student
  console.log(id, name, email)
  if (!id || !name || !email) {
    res.status(400).send({ error: 'Missing parameters' })
  } else {
    students.push({ id, name, email })
    res.status(201).send()
    console.log(students)
  }
})

server.put('/student/:id', (req: Request, res: Response) => {
  const id = req.params.id
  const student = students.find((student) => student.id === id)
  if (!student) {
    res.status(404).send({ error: 'No student found' })
  } else {
    const { name, email } = req.body as Student
    if (!name && !email) {
      res.status(400).send({ error: 'Enter a name or an email' })
    } else {
      if (email) student.email = email
      if (name) student.name = name
      res.status(204).send()
    }
  }
})

server.delete('/student/:id', (req: Request, res: Response) => {
  const id = req.params.id
  let idIndexInStudents: number = 0
  const student = students.find((student, index) => {
    if (student.id === id) {
      idIndexInStudents = index
      return student
    }
  })
  if (!student) {
    res.status(404).send({ error: 'No student found' })
  } else students.splice(idIndexInStudents, 1)
  res.status(204).send()
})

server.use(unknownEndpoint)

server.listen(3000)
