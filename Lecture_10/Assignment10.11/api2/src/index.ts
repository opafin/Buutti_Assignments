import express, { Request, Response } from 'express'
import fetch from 'axios'

const server = express()

interface input {
  data: string
}
server.get('/', async (req: Request, res: Response) => {
  const data: input = await fetch('http://assignment1011-api1-1:3000')
  console.log(data)
  const combineData = data.data + 'string2'
  res.status(200).send(combineData)
})

server.listen(3001)

//string1string2
