import express, { Request, Response, NextFunction } from 'express'
import { middleware, unknownEndpoint } from './middlewares'

const server = express()

server.use(middleware)

server.get('/students', (req: Request, res: Response) => {
  res.send([])
})

server.use(unknownEndpoint)

server.listen(3000)
