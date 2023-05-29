import express, { Request, Response, NextFunction } from 'express'
import { middleware, unknownEndpoint } from './middlewares'
import { createStudentTable } from './tableCreator'
import { createStudentTableHtmlResponse } from './StudentTableHtmlResponse'

const server = express()
server.use(express.static('public'))

server.get('/', (req: Request, res: Response) => {
  res.send('send an array of students for processing')
})

server.use(express.json())
server.use(middleware)

interface Student {
  name: string
  score: number
  grade?: number
}

server.post('/students', (req: Request, res: Response) => {
  const students: Student[] = req.body

  const table = createStudentTable(students)

  console.log(table)
  res.status(200).send(createStudentTableHtmlResponse(table))
})

server.use(unknownEndpoint)

server.listen(3000)
