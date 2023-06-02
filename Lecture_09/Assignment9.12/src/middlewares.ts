import express, { Request, Response, NextFunction } from 'express'
import { books } from './books'
import { logs, Logs } from './logs'

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const time = new Date()
  const fullTime = `${time}`
  const logTime = `${fullTime.split(' ').slice(0, 5).join(' ')}:${time.getMilliseconds()}`
  let log: Logs = {
    time: logTime,
    method: req.method,
    path: req.path,
    params: req.params,
    body: req.body,
    difference: ''
  }
  if (JSON.stringify(req.params) === '{}') {
    delete log.params
  }
  if (JSON.stringify(req.body) === '{}') {
    delete log.body
    delete log.difference
    logs.push(log)
    next()
  }

  const id = Number(req.params.id)
  const name = String(req.body.name)
  if (req.method === 'POST') log.difference = `*BOOK ADDED*`
  if (req.method === 'DELETE') log.difference = `*BOOK DELETED*`
  if (req.method === 'PUT' && name !== books[id].name) {
    log.difference = `'*NAME CHANGED* ${books[id].name} --> ${name}`
  }
  logs.push(log)
  next()
}

export const bookValidator = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) return
  const { id, name, author, read } = req.body
  if (books[id]) {
    res.send('a book with this id already exists, use PUT to edit')
    return
  }
  if (!id || !name || !author || read === undefined) {
    res.status(200).send('include an ID: number, name: string, author: string and read: boolean`')
    return
  }
  next()
}

export const putValidator = (req: Request, res: Response, next: NextFunction) => {
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
  next()
}

export const deleteValidator = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  const name = req.body.name
  if (!books[id]) {
    res.status(404).send('No book with this id')
    return
  }
  if (name !== books[id].name) {
    res.status(400).send('Include the name of the book in the request body to confirm deletion')
    return
  }
  next()
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'No one here' })
}
