import 'dotenv/config'
import jwt from 'jsonwebtoken'

const payload = { username: 'gollum' }
const secret = 'i think gollum graphics are great'
const options = { expiresIn: '1h' }

const token = jwt.sign(payload, secret, options)
console.log(secret)
console.log(token)
