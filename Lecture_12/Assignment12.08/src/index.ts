import express from 'express'
import { router } from './router'
const server = express()
server.use(express.json())

server.use('/products', router)

const { PORT } = process.env
server.listen(PORT, () => {
  console.log('Products API listening to port', PORT)
})
