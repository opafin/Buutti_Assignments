import request from 'supertest'
import { app } from '../src/index'
import jwt, { JsonWebTokenError, Jwt, JwtPayload } from 'jsonwebtoken'
import { error } from 'console'
const SECRET = process.env.SECRET ?? ''

describe('App', () => {
  it('returns 404 on invalid address', async () => {
    const response = await request(app).get('/invalidaddress')
    expect(response.statusCode).toBe(404)
  })
})

describe('Registration', () => {
  it('returns 400 on missing registration details', async () => {
    const response = await request(app).post('/register')
    expect(response.statusCode).toBe(400)
  })
  it('returns 201 and a token when receiving a username and a password', async () => {
    const response = await request(app).post('/register').send({
      username: 'username',
      password: 'password'
    })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe('username')
    expect(token.isAdmin).toBe(undefined)
    expect(response.statusCode).toBe(201)
  })
  it('returns 201 but does not include an adminAuth in the token on succesful registration', async () => {
    const response = await request(app).post('/register').send({
      username: 'username',
      password: 'password'
    })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe('username')
    expect(token.isAdmin).toBe(undefined)
    expect(response.statusCode).toBe(201)
  })
  it('returns 400 and denies registering as admin', async () => {
    const response = await request(app).post('/register').send({
      username: 'admin',
      password: 'password'
    })
    expect(response.text).toBe('{"error":"Cannot register as admin"}')
    expect(response.statusCode).toBe(400)
  })
})

describe('Login', () => {
  beforeAll(async () => {
    await request(app).post('/register/').send({ username: 'testUser', password: 'testPassword' })
  })

  it('returns 400 and sends no user found when the username is not in users', async () => {
    const response = await request(app).post('/user/login').send({
      username: 'noSuchUser',
      password: 'password'
    })
    expect(response.text).toBe('No user found')
    expect(response.statusCode).toBe(400)
  })
  it('returns 201 and sends a token when the username and pass are correct', async () => {
    const response = await request(app).post('/user/login').send({
      username: 'testUser',
      password: 'testPassword'
    })
    expect(typeof response.text).toBe('string')
    expect(response.statusCode).toBe(201)
  })
})

describe('AdminLogin', () => {
  it('returns 201 and a token with adminAuth when the details are correct', async () => {
    const response = await request(app).post('/user/admin').send({
      username: 'admin',
      password: 'password'
    })
    const token = tokenTest(response.text) as JwtPayload
    expect(token.username).toBe('admin')
    expect(token.isAdmin).toBe(true)
    expect(response.status).toBe(201)
  })

  it('returns 401 wont allow login, and doesnt send a token with incorrect details', async () => {
    const response = await request(app).post('/user/admin').send({
      username: 'admin',
      password: 'aGoodPasswordSalted^^+,.31az63fQQ1337'
    })
    expect(tokenTest(response.text)).toBe('Invalid Token')
    expect(response.status).toBe(401)
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
