import express, { Request, Response } from 'express'
import { logs } from './logs'

const logsRouter = express.Router()

logsRouter.get('/api/v1/logs', (req: Request, res: Response) => {
  res.send(logs)
})

export default logsRouter
