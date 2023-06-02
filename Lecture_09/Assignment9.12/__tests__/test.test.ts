import request from 'supertest'
import 'dotenv/config'
import app from '../src/index'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { before } from 'node:test'

const SECRET = process.env.SECRET ?? ''

describe('App', () => {
  it('returns 404 on invalid address', async () => {
    const response = await request(app)
    .get('/invalidaddress')
    expect(response.statusCode).toBe(404)
  })
})

describe('Registration', () => {
  it('returns 400 on missing registration details', async () => {
    const response = await request(app)
    .post('/user/register')
    expect(response.statusCode).toBe(400)
  })
  it('returns 201 and a token when receiving a username and a password', async () => {
    const response = await request(app)
    .post('/user/register')
    .send({ username: 'username', password: 'password' })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe('username')
    expect(token.isAdmin).toBe(undefined)
    expect(response.statusCode).toBe(201)
  })
  it('returns 400 and does not allow registering the same username twice', async () => {
    const response = await request(app)
    .post('/user/register')
    .send({ username: 'username', password: 'password' })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe(undefined)
    expect(token.isAdmin).toBe(undefined)
    expect(response.statusCode).toBe(400)
  })
  it('returns 201 but does not include an adminAuth in the token on succesful registration', async () => {
    const response = await request(app)
    .post('/user/register')
    .send({ username: 'noadmin', password: 'password' })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe('noadmin')
    expect(token.isAdmin).toBe(undefined)
    expect(response.statusCode).toBe(201)
  })
  it('returns 400 and denies registering as admin', async () => {
    const response = await request(app)
    .post('/user/register')
    .send({username: 'admin', password: 'password'})
    expect(response.text).toBe('{"error":"Cannot register as admin"}')
    expect(response.statusCode).toBe(400)
  })
})

describe('Login', () => {
  beforeAll(async () => {
    await request(app)
    .post('/user/register')
    .send({ username: 'testUser', password: 'testPassword' })
  })

  it('returns 400 and sends no user found when the username is not in users', async () => {
    const response = await request(app)
    .post('/user/login')
    .send({ username: 'noSuchUser', password: 'password' })
    expect(response.text).toBe('No user found')
    expect(response.statusCode).toBe(400)
  })
  it('returns 201 and sends a token when the username and pass are correct', async () => {
    const response = await request(app).post('/user/login')
    .send({ username: 'testUser', password: 'testPassword' })
    expect(typeof response.text).toBe('string')
    expect(response.statusCode).toBe(201)
  })
})

describe('AdminLogin', () => {
  it('returns 201 and a token with adminAuth when the details are correct', async () => {
    const response = await request(app)
    .post('/user/admin')
    .send({ username: 'admin', password: 'password' })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe('admin')
    expect(token.isAdmin).toBe(true)
    expect(response.status).toBe(201)
  })

  it('returns 401 wont allow login, and doesnt send a token with incorrect details', async () => {
    const response = await request(app).post('/user/admin')
    .send({ username: 'admin', password: 'aGoodPasswordSalted^^+,.31az63fQQ1337' })
    expect(tokenTest(response.text)).toBe('Invalid Token')
    expect(response.status).toBe(401)
  })
})

let token: string | JwtPayload = ''
describe('Book requests', () => {
  beforeAll(async () => {
    const response = await request(app)
    .post('/user/register')
    .send({ username: 'newTestUser', password: 'testPassword' })
    token = response.text
  })
  it('returns 200 if a registered user gets books', async () => {
    const response = await request(app)
    .get('/books')
    .set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
  })

  before(async () => {
    const response = await request(app)
    .post('/user/admin')
    .send({ username: 'admin', password: 'password' })
    token = response.text
  })
  it('returns 200 admin can get books', async () => {
    const response = await request(app)
    .get('/books').set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
  })
})

function tokenTest(token: string): JwtPayload | string {
  try {
    const decodedToken = jwt.verify(token, SECRET) as JwtPayload
    console.log(decodedToken)
    return decodedToken
  } catch (error) {
    return 'Invalid Token'
  }
}
app.close()
