import { events } from './src/events'

const rawDate = '2020-11-11'
const rawTime = '17:00'

const test1 = new Date(2020, 8, 30, 16, 38)
const test2 = new Date(2023, 5, 6, 16, 38)
const test3 = new Date(parseInt(rawDate, 10) + parseInt(rawTime, 10))
const test4 = new Date(rawDate + 'T' + rawTime)
const test5 = new Date()

console.log(test1, '1')
console.log(test2, '2')
console.log(test3, '3')
console.log(test4, '4')
console.log(test5, '5')
console.log(events, 'events')
