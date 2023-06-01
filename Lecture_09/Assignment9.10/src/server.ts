import express from 'express'
import helmet from 'helmet'
import logsBase from './logsRouter'
import booker from './booksRouter'
import { unknownEndpoint } from './middlewares'

const server = express()
server.use(express.json())
server.use(helmet())
server.use(express.static('public'))
server.use('/logs', logsBase)
server.use('/book', booker)
server.use(unknownEndpoint)

export default server
