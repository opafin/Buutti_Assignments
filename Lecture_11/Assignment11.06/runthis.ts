import { events } from './events'

const rawDate = '2020-11-11'
const rawTime = '17:00'

const klak = new Date(2020, 8, 30, 16, 38)
const kak = new Date(2023, 5, 6, 16, 38)
// const kek = new Date(parseInt(rawDate  10) + parseInt(rawTime, 10))
const klukk = new Date(rawDate + 'T' + rawTime)

console.log(klukk, 'klukk')
console.log(kak, 'kak')
// console.log(kek, 'KEKKK')

const klok = new Date()
console.log(klok, 'klokk')
console.log(klak, 'klakk')

console.log(events, 'events')
