import express from 'express'
import actionsRouter from './router'

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use('/', actionsRouter)

app.listen(3000, () => {
  console.log('Calendar is running at 3000')
})
