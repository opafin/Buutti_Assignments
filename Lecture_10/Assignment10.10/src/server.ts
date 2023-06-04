import express from 'express'
import { unknownEndpoint } from './middlewares'
import helmet from 'helmet'
import notesRouter from './notesRouter'
import loginRouter from './loginRouter'

const server = express()
server.use(helmet())
server.use(express.json())
server.use('/login', loginRouter)
server.use('/notes', notesRouter)
server.use(unknownEndpoint)

export default server
