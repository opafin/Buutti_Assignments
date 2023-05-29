import express, { Request, Response, NextFunction } from 'express'
import { checkDataHtmlResponse } from './DataValidationHtmlResponse'

interface Student {
  name: string
  score: number
  grade?: number
}

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    console.log('No reg.body')
  } else {
    console.log(req.body)
  }

  const time = new Date()
  console.log(time.getHours().toString().padStart(2, '0'), time.getMinutes().toString().padStart(2, '0'))
  console.log(req.method)
  console.log(req.path)
  console.log(time)

  const students: Student[] = req.body
  for (const student of students) {
    if (!student.name || !student.score) return res.status(404).send(checkDataHtmlResponse(students))
  }
  next()
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'No one here' })
}

const students = [
  { name: 'Markku', score: 99 },
  { name: 'Karoliina', score: 58 },
  { name: 'Susanna', score: 69 },
  { name: 'Benjamin', score: 77 },
  { name: 'Isak', score: 49 },
  { name: 'Liisa', score: 89 }
]
