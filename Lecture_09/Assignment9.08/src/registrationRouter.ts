import express, { Request, Response, NextFunction, Router } from 'express'
import argon2 from 'argon2'
import 'dotenv/config'
import { tokenize } from './jwtokens'

const registrationRouter: Router = express.Router()

interface Users {
  username: string
  password: string
}
export const users: Users[] = []

// the async keyword is necessary here for the argon2.hash to return
registrationRouter.post('/', async (req: Request, res: Response) => {
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
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Error hashing password' })
  }
  const token = tokenize(username)
  res.status(201).send(token)
})

export default registrationRouter
