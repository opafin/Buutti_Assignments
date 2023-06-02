import express from 'express'
import { unknownEndpoint } from './middlewares'
import helmet from 'helmet'
import bookRouter from './bookRouter'
import logsRouter from './logsRouter'
import dadJoke from './dadjoke'
import userRouter from './userRouter'
import fingerpori from './fingerpori'

const server = express()
server.use(helmet())
server.use(express.json())
server.use('/', dadJoke)
server.use('/fingerpori', fingerpori)
server.use('/user', userRouter)
server.use('/books', bookRouter)
server.use('/logs', logsRouter)
server.use(unknownEndpoint)

export default server
