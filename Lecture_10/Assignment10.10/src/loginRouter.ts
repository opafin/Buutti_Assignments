import express, { Request, Response, Router } from 'express'
import argon2 from 'argon2'
import 'dotenv/config'
import { tokenize } from './jwtokens'

const PASSWORD = process.env.PASSWORD ?? ''

export const userRouter1010: Router = express.Router()

userRouter1010.post('/', async (req: Request, res: Response) => {
  const password = req.body.password

  if (!password) {
    res.status(400).send({ error: 'Enter a valid password' })
    return
  }

  const isCorrectPassword = await argon2.verify(PASSWORD, password)
  if (!isCorrectPassword) return res.status(401).send('Unauthorized')

  const token = tokenize('admin')
  res.status(201).send(token)
})

export default userRouter1010
