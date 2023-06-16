import express, { Request, Response, Router } from 'express'
import { addUser, readUsers, readUser, updateUser, deleteUser } from './userDao'
export const users: Router = express.Router()

users.post('/', async (req: Request, res: Response) => {
  const { username, fullName, email } = req.body
  const result = await addUser(username, fullName, email)
  res.send(result)
})

users.get('/', async (req: Request, res: Response) => {
  res.json(await readUsers())
})

users.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await readUser(Number(id))
  res.json(result)
})

users.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { new_username, email } = req.body
  await updateUser(Number(id), new_username, email)
  res.send('User updated')
})

users.delete('/:username', async (req: Request, res: Response) => {
  const { username } = req.params
  await deleteUser(username)
  res.send('User deleted')
})
