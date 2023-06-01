import server from './server'

export const app = server.listen(3000, () => {
  console.log('Listening to port 3000')
})
