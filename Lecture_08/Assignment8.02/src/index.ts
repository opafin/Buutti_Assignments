import express, { Request, Response } from 'express'

const server = express() // server is of type "Express"

server.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!')
})

server.get('/endpoint2', (_req: Request, res: Response) => {
  res.send('Hello team!')
})

server.listen(3000, () => {
  console.log('listening on port 3000')
})
