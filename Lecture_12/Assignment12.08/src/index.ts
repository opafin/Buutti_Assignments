import express from 'express'
import { router } from './router'
import dotenv from 'dotenv'
import { createProductsTable } from './db'

const server = express()
server.use(express.json())

server.use('/products', router)

createProductsTable()

const PORT = process.env.port || 3000
server.listen(PORT, () => {
  console.log('Products API listening to port', PORT)
})
