import express, { Request, Response, NextFunction } from 'express'
import { middleware, unknownEndpoint } from './middlewares'

const server = express()
server.use(express.static('public'))

server.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

server.use(middleware)

interface Book {
  [id: number]: {
    name: string
    author: string
    read: boolean
  }
}

let books: Book = {}

server.use(express.json())

server.get('/api/v1/books', (req: Request, res: Response) => {
  res.send(books)
})

server.get('/api/v1/books/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const foundBook = books[id]
  if (!foundBook) return res.status(404).send('No book with this ID')
  res.send(foundBook)
})

server.post('/api/v1/books', (req: Request, res: Response) => {
  const { id, name, author, read } = req.body
  if (!id || !name || !author || read === undefined) {
    res.status(200).send('include an ID, name, author and read: boolean`')
    return
  }
  if (books[id]) {
    res.send('a book with this id already exists, use PUT to edit')
    return
  }
  books[id] = { name: name, author: author, read: read }
  res.status(200).send('Book added!')
})

server.put('/api/v1/books/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { name, author, read } = req.body

  if (!books[id]) {
    res.status(404).send('No book with this id')
    return
  }
  if (!name && !author && !read) {
    res
      .status(404)
      .send('name-, author- or read-value required to modify a book, did you mean to use GET instead of PUT?')
    return
  }

  books[id] = {
    name: name || books[id].name,
    author: author || books[id].author,
    read: read !== undefined ? read : books[id].read
  }
  res.status(200).send('Details updated!')
})

server.delete('/api/v1/books/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  if (!books[id]) {
    res.status(404).send('No book with this id')
    return
  }
  delete books[id]
  res.status(200).send('Book deleted!')
})

server.use(unknownEndpoint)

server.listen(3000)
