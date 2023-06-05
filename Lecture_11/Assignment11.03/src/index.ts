import express, { Request, Response } from 'express'
import 'dotenv/config'

const port = process.env.PORT ?? 3000

const server = express()

server.get('/', (req: Request, res: Response) => {
  res.status(200).send('OK')
})

server.listen(port)
console.log(`Server listening on port ${port}`)
