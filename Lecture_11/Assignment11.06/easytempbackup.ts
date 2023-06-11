/* export function eventsHtml(events: BuuEvent[]) {
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
  const formattedStartDate = event.start.toLocaleDateString('fi-FI').split('T')[0]
  let formattedEndDate = ''
  console.log(event.end.toDateString(), event.start.toDateString())
  if (event.end.toDateString() !== event.start.toDateString()) {
    formattedEndDate = `<div class="event-time">${event.end.toLocaleDateString('fi-FI').split('T')[0]}</div>`
  }
  let startTimeMarkup = ''
  let endTimeMarkup = ''
  if (!event.isAllDay) {
    const formattedStartTime = event.start.toLocaleTimeString('fi-FI', {
      hour: 'numeric',
      minute: 'numeric'
    })
    startTimeMarkup = `<div class="event-time">${formattedStartTime}</div>`

    if (event.start.toTimeString() !== event.end.toTimeString()) {
      const formattedEndTime = event.end.toLocaleTimeString('fi-FI', {
        hour: 'numeric',
        minute: 'numeric'
      })
      endTimeMarkup = `<div class="event-time">${formattedEndTime}</div>`
    }
  }
  let isAllDayMarkup = ''
  if (event.isAllDay === true) {
    isAllDayMarkup = `<div class="All-day">An All Day Event</div>`
  }

  const evenOddClass = index % 2 === 0 ? 'event-even' : 'event-odd'
  return `
          <div class="event ${evenOddClass}">
            <div class="event-title">${event.title}</div>
            <div class="event-date">${formattedStartDate}${startTimeMarkup}</div>
            <div class"event-date">${formattedEndDate}${endTimeMarkup}</div>
            ${isAllDayMarkup}
            <div class="event-description">${event.description}</div>
          </div>
        `
}
 */
