import express from 'express'
import { middleware, unknownEndpoint } from './middlewares'
import router from './studentRouter'

const server = express()
server.use(express.static('public'))
server.use(express.json())
server.use('/students', router)
server.use(middleware)
server.use(unknownEndpoint)
server.listen(3000)
