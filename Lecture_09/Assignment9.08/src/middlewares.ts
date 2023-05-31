import express, { Request, Response, NextFunction } from 'express'

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    console.log('No reg.body')
  } else {
    console.log(req.body)
  }
  const time = new Date()
  console.log(req.method)
  console.log(req.path)
  console.log(time)
  next()
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'No one here' })
}
