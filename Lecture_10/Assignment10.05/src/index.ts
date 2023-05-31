import express, { Request, Response } from 'express'

const server = express() // server is of type "Express"

server.get('/', (_req: Request, res: Response) => {
  res.send('Hello from Dööger!')
})

server.listen(3000, () => {})
