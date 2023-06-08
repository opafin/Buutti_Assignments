import { BuuEvent } from './events'

export function eventsHtml(events: BuuEvent[]) {
  const allEvents = events.map(eventHtml).join('')
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <body>
      <div class="container">
        <h1>Kesähommat</h1>
        ${allEvents}
      </div>
    </body>
    </html>
  `
  return html
}

export function eventHtml(event: BuuEvent, index: number) {
  const formattedDate = event.date.toLocaleDateString('fi-FI').split('T')[0]
  let timeMarkup = ''
  if (!event.isAllDay) {
    const formattedTime = event.date.toLocaleTimeString('fi-FI', {
      hour: 'numeric',
      minute: 'numeric'
    })
    timeMarkup = `<div class="event-time">${formattedTime}</div>`
  }
  let isAllDayMarkup = ''
  if (event.isAllDay === true) {
    isAllDayMarkup = `<div class="All-day">An All Day Event</div>`
  }

  const evenOddClass = index % 2 === 0 ? 'event-even' : 'event-odd'
  return `
        <div class="event ${evenOddClass}">
          <div class="event-title">${event.title}</div>
          <div class="event-date">${formattedDate}</div>
          ${timeMarkup}
          ${isAllDayMarkup}
          <div class="event-description">${event.description}</div>
        </div>
      `
}

export function oneLineHtml(line: string) {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="/styles.css">
  </head>
  <body>
    <div class="container">
      <h1>${line}</h1>
    </div>
  </body>
  </html>
`
  return html
}
