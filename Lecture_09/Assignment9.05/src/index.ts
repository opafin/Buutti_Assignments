import express from 'express'
import { middleware, unknownEndpoint } from './middlewares'
import router from './studentRouter'
import userRouter from './userRouter'

const server = express()
server.use(express.static('public'))
server.use(express.json())
server.use('/students', router)
server.use('/register', userRouter)
server.use(middleware)
server.use(unknownEndpoint)
server.listen(3000)
