import express, { Request, Response, NextFunction, Router } from 'express'
import { checkToken } from './jwtokens'

interface Student {
  id: string
  name: string
  email: string
}
const students: Student[] = []

const studentRouter908: Router = express.Router()

studentRouter908.get('/', checkToken, (req: Request, res: Response) => {
  const studentIDs = students.reduce((IDs: string[], student: Student) => {
    IDs.push(student.id)
    return IDs
  }, [])
  res.send(studentIDs)
})

studentRouter908.post('/', checkToken, (req: Request, res: Response) => {
  const { id, name, email } = req.body as Student
  console.log(id, name, email)
  if (!id || !name || !email) {
    return res.status(400).send({ error: 'Missing parameters' })
  }

  students.push({ id, name, email })
  console.log(students)
  res.status(200).send('A new Student added!')
})

studentRouter908.get('/:id', checkToken, (req: Request, res: Response) => {
  const id = req.params.id
  console.log(req.params.id)
  const student = students.find((student) => student.id === id)
  if (student) {
    res.send(student)
  } else {
    res.status(404).send({ error: 'No student found' })
  }
})

studentRouter908.put('/:id', checkToken, (req: Request, res: Response) => {
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

studentRouter908.delete('/:id', checkToken, (req: Request, res: Response) => {
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

export default studentRouter908
