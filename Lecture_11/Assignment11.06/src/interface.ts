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
        <h1>Kesähommat</h1>
        <table class="event-table">
          <tr>
            <th><span class="start">Start</span></th>
            <th><span class="end">End</span></th>
            <th><span class="title">Title</span></th>
            <th><span class="description">Description</span></th>
          </tr>
          ${allEvents}
        </table>
    </body>
    </html>
  `
  return html
}

export function eventHtml(event: BuuEvent) {
  const formattedStartDate = event.start.toLocaleDateString('fi-FI').split('T')[0]
  let formattedEndDate = ''
  if (event.end.toDateString() !== event.start.toDateString()) {
    formattedEndDate = event.end.toLocaleDateString('fi-FI').split('T')[0]
  }
  let startTimeMarkup = ''
  let endTimeMarkup = ''
  let isAllDayMarkup = ''

  if (event.isAllDay === true) {
    isAllDayMarkup = `<br>All Day`
  }

  if (!event.isAllDay) {
    const formattedStartTime = event.start.toLocaleTimeString('fi-FI', {
      hour: 'numeric',
      minute: 'numeric'
    })
    startTimeMarkup = `<br>${formattedStartTime}`

    if (event.start.toTimeString() !== event.end.toTimeString()) {
      const formattedEndTime = event.end.toLocaleTimeString('fi-FI', {
        hour: 'numeric',
        minute: 'numeric'
      })
      endTimeMarkup = `<br>${formattedEndTime}`
    }
  }
  return `
        <tr>
          <td class="event-date">${formattedStartDate}\n ${startTimeMarkup} ${isAllDayMarkup}</td>
          <td class="event-time">${formattedEndDate} ${endTimeMarkup}</td>
          <td class="event-title">${event.title}</td>
          <td class="event-description">${event.description}</td>
        </tr>
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
      <h2>${line}</h2>
    </div>
  </body>
  </html>
`
  return html
}
