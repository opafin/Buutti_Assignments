import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import { logger, logs, unknownEndpoint, bookValidator, putValidator, deleteValidator } from './middlewares'

const server = express()
server.use(helmet())

server.get('/api/v1/logs', (req: Request, res: Response) => {
  res.send(logs)
})

server.use(express.json())
server.use(express.static('public'))

server.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

interface Book {
  [id: number]: {
    name: string
    author: string
    read: boolean
  }
}
export let books: Book = {}

server.get('/api/v1/books', (req: Request, res: Response) => {
  res.send(books)
})

server.get('/api/v1/books/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const foundBook = books[id]
  if (!foundBook) return res.status(404).send('No book with this ID')
  res.send(foundBook)
})

server.post('/api/v1/books', bookValidator, logger, (req: Request, res: Response) => {
  const { id, name, author, read } = req.body
  books[id] = { name: name, author: author, read: read }
  res.status(200).send('Book added!')
})

server.put('/api/v1/books/:id', putValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { name, author, read } = req.body
  books[id] = {
    name: name || books[id].name,
    author: author || books[id].author,
    read: read !== undefined ? read : books[id].read
  }
  res.status(200).send('Details updated!')
})

server.delete('/api/v1/books/:id', deleteValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const name = req.body.name

  delete books[id]
  res.status(200).send('Book deleted!')
})

server.use(unknownEndpoint)

server.listen(3000)
