import express, { Request, Response, NextFunction, Router } from 'express'
import argon2 from 'argon2'
import { tokenize } from './jwtokens'
import { users } from './registrationRouter'

const ADMIN = process.env.USERNAME ?? ''
const PASSWORD = process.env.PASSWORD ?? ''

export const userRouter908: Router = express.Router()

userRouter908.post('/admin', async (req: Request, res: Response) => {
  console.log('hello, we are at the admin')
  const { username, password } = req.body
  // prefer explicit comparisons in typescript
  if (!username || !password) {
    res.status(400).send({ error: 'Enter a username and a password' })
    return
  }
  if (username !== ADMIN) {
    res.status(400).send({ error: 'this is the admin login, use /login' })
    return
  }

  const isCorrectPassword = await argon2.verify(PASSWORD, password)
  // unexplicit ok for a simple boolean value
  if (!isCorrectPassword) return res.status(401).send('Unauthorized')

  const token = tokenize(username)
  res.status(201).send(token)
})

userRouter908.post('/login', async (req: Request, res: Response) => {
  console.log('Hello, we are at the login')
  const { username, password } = req.body
  // prefer explicit comparisons in typescript
  if (username === undefined || password === undefined) {
    res.status(400).send({ error: 'Enter a username and a password' })
    return
  }
  const user = users.find((user) => user.username === username)
  if (!user) {
    res.send('No user found')
    return
  }
  console.log(username, password)

  const isCorrectPassword = await argon2.verify(user.password, password)
  // unexplicit ok for a simple boolean value
  if (!isCorrectPassword) return res.status(401).send('Unauthorized')

  const token = tokenize(user.username)
  res.status(201).send(token)
})

export default userRouter908
