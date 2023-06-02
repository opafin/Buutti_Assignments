import server from './server'
const app = server.listen(3000, () => {
  console.log('http://localhost:3000/')
})
export default app
