import express, { Request, Response, Router } from 'express'
import { events } from '../events'
import { validateEventPost, parseDate, addEvent } from './middleware'
import { validateEventPut, updateEvent, eventsAtTheSameTime } from './middleware'
import { eventsHtml, oneLineHtml } from '../interface'

const actions: Router = express.Router()

actions.get('/', (req: Request, res: Response) => {
  res.send(events)
})

actions.get('/:monthNumber', (req: Request, res: Response) => {
  const monthNumber = Number(req.params.monthNumber)
  const monthsEvents = events.filter((event) => {
    return event.start.getMonth() === monthNumber - 1
  })
  const html = eventsHtml(monthsEvents)
  res.send(html)
})

actions.post('/', validateEventPost, parseDate, addEvent, eventsAtTheSameTime, (req: Request, res: Response) => {
  let html = oneLineHtml('Event added!')
  if (res.locals.eventsAtTheSameTime) {
    html = `<h1 style="text-align: center;">Overlapping events!</h1>` + eventsHtml(res.locals.eventsAtTheSameTime)
  }
  res.status(201).send(html)
})

actions.put('/:id', validateEventPut, parseDate, updateEvent, eventsAtTheSameTime, (req: Request, res: Response) => {
  let html = oneLineHtml('Event updated!')
  if (res.locals.eventsAtTheSameTime) {
    html = `<h1 style="text-align: center;">Overlapping events!</h1>` + eventsHtml(res.locals.eventsAtTheSameTime)
  }
  res.status(201).send(html)
})

actions.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  events.find((event, index) => {
    if (event.id === id) {
      delete events[index]
      return
    }
  })
  res.sendStatus(204).send(oneLineHtml('Event deleted!'))
})

export default actions
