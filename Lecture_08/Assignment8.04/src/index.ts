import express, {Request, Response} from 'express'

const server = express()

const data = [
  {
    name : 'Jane',
    counter: 0
  },
  {
    name : 'Tarzan',
    counter: 0
  }
]

server.get('/counter/:name', (req: Request, res: Response) => {
  const name = req.params.name

  data.find(item => {
    if(item.name === name )
    {
      item.counter++
      res.send(item.name + ': ' + item.counter.toString())
    } 
  }) 
})

server.listen(3000)