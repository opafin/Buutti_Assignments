import express, { Request, Response } from 'express'

const server = express()

server.get('/', (req: Request, res: Response) => {
  res.status(200).send('string1')
})

server.listen(3000)

// ├─
// ├─
// │
// └─
