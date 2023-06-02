import express, { Request, Response } from 'express'
import { bookValidator, logger, putValidator, deleteValidator } from './middlewares'
import { books } from './books'
import { checkToken } from './jwtokens'

const bookRouter = express.Router()

bookRouter.get('/', checkToken, (req: Request, res: Response) => {
  res.send(books)
})

bookRouter.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const foundBook = books[id]
  if (!foundBook) return res.status(404).send('No book with this ID')
  res.send(foundBook)
})

bookRouter.post('/', checkToken, bookValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.body.id)
  const { name, author, read } = req.body
  if (books[id]) return res.status(400).send('Book already exists')
  else books[id] = { name: name, author: author, read: read }
  res.status(200).send('Book added!')
})

bookRouter.put('/:id', checkToken, putValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { name, author, read } = req.body
  books[id] = {
    name: name || books[id].name,
    author: author || books[id].author,
    read: read !== undefined ? read : books[id].read
  }
  res.status(200).send('Details updated!')
})

bookRouter.delete('/:id', checkToken, deleteValidator, logger, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const name = req.body.name

  delete books[id]
  res.status(200).send('Book deleted!')
})

export default bookRouter
