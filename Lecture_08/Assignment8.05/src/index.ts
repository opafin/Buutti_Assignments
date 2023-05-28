import express, { Request, Response, NextFunction } from 'express'

const server = express()

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const time = new Date()
  console.log(time.getHours().toString().padStart(2, '0'), time.getMinutes().toString().padStart(2, '0'))
  console.log(req.method)
  console.log(req.path)
  console.log(time)
  res.send("I'm a middleware")
  next()
}

server.use(middleware)

server.get('/students', (req: Request, res: Response) => {
  res.send([])
})

server.listen(3000)
