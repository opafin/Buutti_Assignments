import express, { Request, Response } from 'express'
import { users } from './userRouter'
import { posts } from './postRouter'
import { comments } from './commentRouter'

export function createServer() {
  const server = express()
  server.use(express.json())
  server.use('/users', users)
  server.use('/posts', posts)
  server.use('/comments', comments)
  server.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the forum!')
  })
  return server
}
