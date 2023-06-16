import express, { Request, Response, Router } from 'express'
import { addComment, listComments, listUsersComments, updateComment, deleteComment } from './commentDao'
export const comments: Router = express.Router()

comments.post('/', async (req: Request, res: Response) => {
  const { username, post_id, content } = req.body
  const result = await addComment(username, post_id, content)
  res.send(result)
})

comments.get('/', async (req: Request, res: Response) => {
  res.json(await listComments())
})

comments.get('/:username', async (req: Request, res: Response) => {
  const { username } = req.params
  const result = await listUsersComments(username)
  res.json(result)
})

comments.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { content } = req.body
  await updateComment(Number(id), content)
  res.send('Comment updated')
})

comments.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  await deleteComment(Number(id))
  res.send('Comment deleted')
})
