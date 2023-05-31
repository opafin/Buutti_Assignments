import express from 'express'
import { middleware, unknownEndpoint } from './middlewares'
import studentRouter from './studentRouter'
import registrationRouter from './registrationRouter'
import userRouter from './userRouter'

const server = express()
server.use(express.static('public'))
server.use(express.json())
server.use('/students', studentRouter)
server.use('/register', registrationRouter)
server.use('/user/', userRouter)
server.use(middleware)
server.use(unknownEndpoint)
server.listen(3000)
