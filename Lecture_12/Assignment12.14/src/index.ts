import express from 'express'
import { users } from './userRouter'
import { posts } from './postRouter'
import { comments } from './commentRouter'
import dotenv from 'dotenv'

const server = express()
server.use(express.json())

server.use('/users', users)
server.use('/posts', posts)
server.use('/comments', comments)

const PORT = process.env.port || 3000
server.listen(PORT, () => {
  console.log('Forum API listening to port', PORT)
})
