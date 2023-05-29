import express, { Request, Response, NextFunction } from 'express'
import argon2 from 'argon2'
import { clearLine } from 'readline'

const userRouter = express.Router()

interface Users {
  username: string
  password: string
}
const users: Users[] = []

// the async keyword is necessary here for the argon2.hash to return
userRouter.post('/', async (req: Request, res: Response) => {
  console.log('hello we are at the root')
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).send({ error: 'Missing parameters' })
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
    res.status(201).send(users)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Error hashing password' })
  }
})

userRouter.post('/login', async (req: Request, res: Response) => {
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

  res.status(204).send()
})

export default userRouter
