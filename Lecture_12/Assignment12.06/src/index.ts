import express from 'express'
import { createProductsTable } from './db'

const server = express()

createProductsTable()

const { PORT } = process.env
server.listen(PORT, () => {
  console.log('Products API listening to port', PORT)
})
