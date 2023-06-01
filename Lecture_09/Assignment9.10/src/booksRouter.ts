import express, { Request, Response } from 'express'
import { bookValidator, logger, putValidator, deleteValidator } from './middlewares'

const booker = express.Router()

interface Book {
  [id: number]: {
    name: string
    author: string
    read: boolean
  }
}

export let books: Book = {}

booker.get('/', (req: Request, res: Response) => {
  res.send(books)
})

booker.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const foundBook = books[id]
  if (!foundBook) return res.status(404).send('No book with this ID')
  res.send(foundBook)
})

booker.post('/', bookValidator, logger, (req: Request, res: Response) => {
  const { id, name, author, read } = req.body
  books[id] = { name: name, author: author, read: read }
  res.status(200).send('Book added!')
})

booker.put('/:id', putValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { name, author, read } = req.body
  books[id] = {
    name: name || books[id].name,
    author: author || books[id].author,
    read: read !== undefined ? read : books[id].read
  }
  res.status(200).send('Details updated!')
})

booker.delete('/:id', deleteValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const name = req.body.name

  delete books[id]
  res.status(200).send('Book deleted!')
})

export default booker
