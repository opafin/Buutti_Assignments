import express, { Request, Response } from 'express'
import { logs } from './middlewares'

const logsBase = express.Router()

logsBase.get('/', (req: Request, res: Response) => {
  res.send(logs)
})

export default logsBase
