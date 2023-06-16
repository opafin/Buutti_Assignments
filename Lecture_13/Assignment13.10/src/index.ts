import { createServer } from './server'

const PORT = process.env.port || 3000

const server = createServer()

server.listen(PORT, () => {
  console.log('Forum API listening to port', PORT)
})
