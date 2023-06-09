import { Request, Response, NextFunction } from 'express'
import { events } from '../events'
import { oneLineHtml } from '../interface'
export const validateEventPost = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.body.id)
  if (events.find((event) => event.id === id))
    return res.status(400).send(oneLineHtml('An Event with this id already exists'))

  const { title, description, startDate, startTime, endDate, endTime, isAllDay } = req.body
  if (!id || !title || !description || !startDate) return res.status(400).send(oneLineHtml('Missing event details'))

  res.locals.id = id
  res.locals.title = title
  res.locals.description = description
  res.locals.startDate = startDate
  res.locals.startTime = startTime
  res.locals.endDate = endDate
  res.locals.endTime = endTime
  res.locals.isAllDay = isAllDay

  next()
}

export const parseDate = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.eventStart && res.locals.eventEnd) return next()

  const { startDate, startTime } = res.locals
  const { endDate, endTime } = res.locals

  //start date is compulsory, start time is optional
  let eventStart: Date
  if (res.locals.eventStart == undefined) {
    if (startTime === undefined) {
      eventStart = new Date(`${startDate}T12:00`)
    } else {
      eventStart = new Date(`${startDate}T${startTime}`)
    }
    res.locals.eventStart = eventStart
  }

  //end date and end time are both optional so there is a lot to check.
  let eventEnd: Date
  if (res.locals.eventEnd == undefined) {
    if (endTime === undefined && endDate === undefined) {
      eventEnd = res.locals.eventStart
    } else if (endDate && endTime) {
      eventEnd = new Date(`${endDate}T${endTime}`)
    } else if (endDate === undefined) {
      console.log('HALLOOOOO')
      console.log(startDate, 'wat start date')
      console.log(endTime)
      console.log(endDate)
      eventEnd = new Date(`${startDate}T${endTime}`)
    } else {
      eventEnd = new Date(`${endDate}T${startTime}`)
    }
    console.log(eventEnd)
    res.locals.eventEnd = eventEnd
  }

  next()
}
export const addEvent = (req: Request, res: Response, next: NextFunction) => {
  const { id, title, description, eventStart, eventEnd, isAllDay } = res.locals
  events.push({
    id: id,
    title: title,
    description: description,
    start: eventStart,
    end: eventEnd,
    isAllDay: isAllDay
  })
  next()
}

export const eventsAtTheSameTime = (req: Request, res: Response, next: NextFunction) => {
  const eventStart = res.locals.eventStart
  const eventEnd = res.locals.eventEnd

  const isSameDay = events.filter((event) => {
    return event.start.toDateString().split('T')[0] === eventStart.toDateString().split('T')[0]
  })

  const isAllDayEvent = isSameDay.filter((event) => {
    return event.isAllDay === true || res.locals.isAllDay === true
  })

  const hasTimeClash = isSameDay.filter((event) => {
    return event.start.getTime() <= eventEnd.getTime() && eventStart.getTime() <= event.end.getTime()
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
    if (match === undefined) return res.status(400).send(oneLineHtml('An event with this id does not exist'))

    const { title, description, startDate, startTime, endDate, endTime, isAllDay } = req.body
    if (!title && !description && !startDate && !startTime && endDate && endTime && isAllDay === undefined)
      return res.status(400).send(oneLineHtml('Give at least one detail to update'))

    if (!startTime && !startDate) {
      res.locals.eventStart = match.start
    } else {
      startDate ? (res.locals.startDate = startDate) : (res.locals.startDate = match.start.toISOString().slice(0, 10))
      startTime ? (res.locals.startTime = startTime) : (res.locals.startTime = match.start.toTimeString().slice(0, 5))
    }
    if (!endTime && !endDate) {
      res.locals.eventEnd = match.end
    } else {
      endDate ? (res.locals.endDate = endDate) : (res.locals.endDate = match.end.toISOString().slice(0, 10))
      endTime ? (res.locals.endTime = endTime) : (res.locals.endTime = match.end.toTimeString().slice(0, 5))

      if (title) res.locals.title = title
      if (description) res.locals.description = description
      if (isAllDay !== undefined) res.locals.isAllDay = isAllDay
    }
    res.locals.id = id
    next()
  }
}

export const updateEvent = (req: Request, res: Response, next: NextFunction) => {
  const { id, title, description, eventStart, eventEnd, isAllDay } = res.locals
  events.find((event, index) => {
    if (event.id === id) {
      if (title) events[index].title = title
      if (description) events[index].description = description
      if (eventStart) events[index].start = eventStart
      if (eventEnd) events[index].end = eventEnd
      if (isAllDay) events[index].isAllDay = isAllDay
      return event
    }
  })
  next()
}
