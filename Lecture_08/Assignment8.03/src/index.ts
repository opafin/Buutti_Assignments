import express, {Request, Response} from 'express'

const server = express()

const data = {
 counter: 0
}

server.get('/:counter', (req: Request, res: Response) => {
  data.counter++
  res.send(data.counter.toString())
    }
)
server.listen(3000)