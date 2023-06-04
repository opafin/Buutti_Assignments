import express, { Request, Response, NextFunction } from 'express'
import { notes } from './notes'

export const noteValidator = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) return
  const { id, name, content } = req.body
  if (notes[id]) {
    res.send('a note with this id already exists, use PUT to edit')
    return
  }
  if (!id || !name || !content) {
    res.status(200).send('include an ID: number, name: string, content: string')
    return
  }
  next()
}

export const putValidator = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  const { name, content } = req.body
  if (!notes[id]) {
    res.status(404).send('No note with this id')
    return
  }
  if (!name && !content) {
    res.status(404).send('name-, or content required to modify a note, did you mean to use GET instead of PUT?')
    return
  }
  next()
}

export const deleteValidator = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  const name = req.body.name
  if (!notes[id]) {
    res.status(404).send('No note with this id')
    return
  }
  if (name !== notes[id].name) {
    res.status(400).send('Include the name of the note in the request body to confirm deletion')
    return
  }
  next()
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'No one here' })
}
