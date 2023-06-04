import express, { Request, Response } from 'express'
import { noteValidator, putValidator } from './middlewares'
import { notes } from './notes'

const notesRouter = express.Router()

notesRouter.get('/', (req: Request, res: Response) => {
  res.send(notes)
})

notesRouter.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const foundNote = notes[id]
  if (!foundNote) return res.status(404).send('No note with this ID')
  res.send(foundNote)
})

notesRouter.post('/', noteValidator, (req: Request, res: Response) => {
  const id = Number(req.body.id)
  const { name, content } = req.body
  if (notes[id]) return res.status(400).send('Note already exists')
  else notes[id] = { name: name, content: content }
  res.status(200).send('Note added!')
})

notesRouter.put('/:id', putValidator, (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { name, content } = req.body
  notes[id] = {
    name: name || notes[id].name,
    content: content !== undefined ? content : notes[id].content
  }
  res.status(200).send('Details updated!')
})

notesRouter.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  delete notes[id]
  res.status(200).send('Note deleted!')
})

export default notesRouter
