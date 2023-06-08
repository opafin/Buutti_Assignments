import { Request, Response, NextFunction } from 'express'
import { events } from '../events'
import { oneLineHtml } from '../interface'
export const validateEventPost = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.body.id)
  if (events.find((event) => event.id === id))
    return res.status(400).send(oneLineHtml('An Event with this id already exists'))

  const { title, description, date, time, isAllDay } = req.body
  if (!id || !title || !description || !date) return res.status(400).send(oneLineHtml('Missing event details'))

  res.locals.id = id
  res.locals.title = title
  res.locals.description = description
  res.locals.date = date
  res.locals.time = time
  res.locals.isAllDay = isAllDay

  next()
}

export const parseDate = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.eventDate) return next()

  const { date, time } = res.locals
  let eventDate: Date
  if (time === undefined) {
    eventDate = new Date(`${date}T12:00`)
  } else {
    eventDate = new Date(`${date}T${time}`)
  }
  res.locals.eventDate = eventDate

  next()
}

export const addEvent = (req: Request, res: Response, next: NextFunction) => {
  const { id, title, description, eventDate, isAllDay } = res.locals
  events.push({ id: id, title: title, description: description, date: eventDate, isAllDay: isAllDay })
  next()
}

export const eventsAtTheSameTime = (req: Request, res: Response, next: NextFunction) => {
  const eventDate = res.locals.eventDate

  const isSameDay = events.filter((event) => {
    return event.date.toDateString().split('T')[0] === eventDate.toDateString().split('T')[0]
  })

  const isAllDayEvent = isSameDay.filter((event) => {
    return event.isAllDay === true || res.locals.isAllDay === true
  })

  const hasTimeClash = isSameDay.filter((event) => {
    const checkThreshold = 30 * 60 * 1000 // 30 minutes in milliseconds
    const timeDifference = Math.abs(event.date.getTime() - eventDate.getTime())
    return timeDifference <= checkThreshold
  })

  const eventsAtTheSameTime = isSameDay.filter((event) => {
    if (isAllDayEvent.includes(event) || hasTimeClash.includes(event)) {
      return event
    }
  }, [])

  if (eventsAtTheSameTime.length > 1) res.locals.eventsAtTheSameTime = eventsAtTheSameTime
  next()
}

export const validateEventPut = (req: Request, res: Response, next: NextFunction) => {
  {
    const id = Number(req.params.id)
    const match = events.find((event) => event.id === id)
    if (match === undefined) return res.status(400).send('An event with this id does not exist')

    const { title, description, date, time, isAllDay } = req.body
    if (!title && !description && !date && !time && isAllDay === undefined)
      return res.status(400).send('Give at least one detail to update')

    if (!time && !date) {
      res.locals.eventDate = match.date
    } else {
      time ? (res.locals.time = time) : (res.locals.time = match.date.toTimeString().slice(0, 5))
      date ? (res.locals.date = date) : (res.locals.date = match.date.toISOString().slice(0, 10))
    }
    if (title) res.locals.title = title
    if (description) res.locals.description = description
    if (isAllDay !== undefined) res.locals.isAllDay = isAllDay
    res.locals.id = id
    next()
  }
}

export const updateEvent = (req: Request, res: Response, next: NextFunction) => {
  const { id, title, description, eventDate, isAllDay } = res.locals
  events.find((event, index) => {
    if (event.id === id) {
      if (title) events[index].title = title
      if (description) events[index].description = description
      if (eventDate) events[index].date = eventDate
      if (isAllDay) events[index].isAllDay = isAllDay
      return event
    }
  })
  next()
}
