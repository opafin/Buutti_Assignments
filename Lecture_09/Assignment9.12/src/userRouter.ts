import express, { Request, Response, Router } from 'express'
import argon2 from 'argon2'
import { tokenize } from './jwtokens'
import { CustomRequest } from './jwtokens'
import { users, Users } from './users'

const ADMIN = process.env.ADMIN ?? ''
const PASSWORD = process.env.ADMINPASSWORD ?? ''

export const userRouter910: Router = express.Router()

userRouter910.post('/admin', async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).send({ error: 'Enter a username and a password' })
    return
  }
  if (username !== ADMIN) {
    res.status(400).send({ error: 'this is the admin login, use /login' })
    return
  }

  const isCorrectPassword = await argon2.verify(PASSWORD, password)
  if (!isCorrectPassword) return res.status(401).send('Unauthorized')

  const token = tokenize(username)
  res.status(201).send(token)
})

userRouter910.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (username === undefined || password === undefined) {
    res.status(400).send({ error: 'Enter a username and a password' })
    return
  }
  const user = users.find((user) => user.username === username)
  if (!user) {
    res.status(400).send('No user found')
    return
  }
  console.log(username, password)

  const isCorrectPassword = await argon2.verify(user.password, password)

  if (!isCorrectPassword) return res.status(401).send('Unauthorized')

  const token = tokenize(user.username)
  res.status(201).send(token)
})

userRouter910.post('/register', async (req: CustomRequest, res: Response) => {
  const { username, password } = req.body

  if (username === 'admin') {
    res.status(400).send({ error: 'Cannot register as admin' })
    return
  }

  if (!username || !password) {
    res.status(400).send({ error: 'Missing username or password' })
    return
  }

  if (users.find((user) => user.username === username)) {
    res.status(400).send({ error: 'Username already exists' })
    return
  }
  try {
    const hashedPassword = await argon2.hash(password)

    const newUser: Users = {
      password: hashedPassword,
      username: username
    }
    users.push(newUser)
    console.log(users)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Error hashing password' })
  }
  const token = tokenize(username)
  res.status(201).send(token)
})

export default userRouter910
