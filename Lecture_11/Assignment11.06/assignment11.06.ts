import express, { Response, Request } from 'express'
import { events } from './events'

const server = express()
server.use(express.json())

server.get('/', (req: Request, res: Response) => {
  res.send(events)
})

server.get('/:monthNumber', (req: Request, res: Response) => {
  const monthNumber = Number(req.params.monthNumber)
  const nextMonthsEvents = Object.values(events).filter((event) => {
    return event.date.getMonth() === monthNumber
  })
  res.json(nextMonthsEvents)
})

server.post('/', (req: Request, res: Response) => {
  const eventId = Number(req.body.eventId)
  const { title, description, date, time } = req.body

  if (events[eventId]) return res.status(400).send('Event already exists')
  if (!eventId || !title || !description || !date) return res.status(400).send('Missing event details')
  if (
    Object.values(events).filter((event) => {
      return event.date.getTime() === rawTime
    })
  ) {
    console.log()
  }

  const date = new Date(time, date)
  events[eventId] = { title, description, date }
  res.status(201).json(events[eventId])
})

server.put('/:eventId', (req: Request, res: Response) => {
  const eventId = Number(req.params.eventId)
  const { title, description, date, time } = req.body
  events[eventId] = { title, description, date }
  res.sendStatus(204)
})

server.delete('/:eventId', (req: Request, res: Response) => {
  const eventId = Number(req.params.eventId)
  delete events[eventId]
  res.sendStatus(204)
})

server.listen(3000, () => {
  console.log('Calendar is running at 3000')
})

// Assignment 11.6: Calendar API
// Create a calendar API. It should have following endpoints:
// 	• GET / returns a list of all events

// 	• GET /:monthNumber returns a list of all the events in the next month given as parameter

// 	• POST / adds an event to the calendar

// 	• PUT /:eventId modifies the event corresponding to the eventId

// 	• DELETE /:eventId deletes the event corresponding to the eventId

// Events should have an id, title, description, date, and optionally a time. Store the events in a transient in-memory storage (i.e. a variable).
