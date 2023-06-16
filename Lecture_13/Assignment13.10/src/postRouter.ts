import express, { Request, Response, Router } from 'express'
import { addPost, readPosts, readPost, updatePost, deletePost } from './postDao'
export const posts: Router = express.Router()

posts.post('/', async (req: Request, res: Response) => {
  const { username, title, content } = req.body
  const result = await addPost(username, title, content)
  console.log(result)
  res.send(result)
})

posts.get('/', async (req: Request, res: Response) => {
  const result = await readPosts()
  res.json(result)
})

posts.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await readPost(Number(id))
  res.json(result)
})

posts.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, content } = req.body
  await updatePost(Number(id), title, content)
  res.send('Post updated')
})

posts.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  await deletePost(Number(id))
  res.send('Post deleted')
})
