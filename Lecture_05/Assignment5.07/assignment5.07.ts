import fs from 'fs'
import { Transform, TransformCallback } from 'stream'

// #SOLUTION 1
// stream
const readStream = fs.createReadStream('./example.txt')
const writeStream = fs.createWriteStream('./conversion.txt')
const wordSwap = new Transform({
  transform(chunk: Buffer | string, encoding: BufferEncoding, callback: TransformCallback) {
    let sanavaihto = chunk.toString().toLowerCase()
    sanavaihto = sanavaihto.replace(/joulu/g, 'kinkku')
    sanavaihto = sanavaihto.replace(/lapsilla/g, 'poroilla')
    this.push(sanavaihto)
    callback()
  }
})
readStream.pipe(wordSwap).pipe(writeStream)

// #SOLUTION 2
// sync
let read = fs.readFileSync('example.txt').toString().toLowerCase()
read = read.replace(/joulu/g, 'kinkku')
read = read.replace(/lapsilla/g, 'poroilla')
fs.writeFileSync('conversion2.txt', read)
