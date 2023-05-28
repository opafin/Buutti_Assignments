import express, { Request, Response, NextFunction } from 'express'
import { middleware, unknownEndpoint } from './middlewares'

const server = express()

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

server.use(unknownEndpoint)

server.listen(3000)
