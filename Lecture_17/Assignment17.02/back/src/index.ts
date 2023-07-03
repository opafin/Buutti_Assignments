import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())
app.use(express.static('./dist/client/'))

app.get('/', (req: Request, res: Response) => {})

app.get('/version', (req: Request, res: Response) => {
  res.send('Version 1.0')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000!')
})
