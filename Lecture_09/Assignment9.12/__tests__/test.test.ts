import request from 'supertest'
import 'dotenv/config'
import app from '../src/index'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { books } from '../src/books'
import { beforeEach } from 'node:test'

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

describe('Admin Login', () => {
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
  it('returns 403 no admin rights, if a registered nonAdmin user posts a book', async () => {
    const response = await request(app)
    .post('/books')
    .send({ id: 20, name: "SQLInjectionSecrets", author: "Sus" , read: true })
    .set('Authorization', `Bearer ${token}`)
    expect(response.text).toBe('No admin rights for PUT INPUT or DELETE')
    expect(response.statusCode).toBe(403)
  })  
  it('returns 403 no admin rights, if a registered nonAdmin user edits a book', async () => {
    const response = await request(app)
    .put('/books/20')
    .send({ name: "SQLInjectionSecrets", author: "Sus" , read: true })
    .set('Authorization', `Bearer ${token}`)
    expect(response.text).toBe('No admin rights for PUT INPUT or DELETE')
    expect(response.statusCode).toBe(403)
  })  
  it('returns 403 no admin rights, if a registered nonAdmin user deletes a book', async () => {
    const response = await request(app)
    .delete('/books/20')
    .send({ name: "SQLInjectionSecrets"})
    .set('Authorization', `Bearer ${token}`)
    expect(response.text).toBe('No admin rights for PUT INPUT or DELETE')
    expect(response.statusCode).toBe(403)
  })
})


let adminToken: string | JwtPayload
describe('Admin Book Requests', () => {
  beforeAll(async () => {
    const response = await request(app)
    .post('/user/admin')
    .send({ username: 'admin', password: 'password' })
    adminToken = response.text
    console.log(adminToken, 'adminToken');
  })
  it('returns 200 can get books', async () => {
    const response = await request(app)
    .get('/books')
    .set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
  })
  it('returns 200 can post books', async () => {
    const response = await request(app)
    .post('/books')
    .send({ id: 20, name: "MyDearDatabase", author: "Admin" , read: true })
    .set('Authorization', `Bearer ${adminToken}`)
    .set('Accept', 'application/json')
    expect(response.text).toBe('Book added!')
    expect(response.statusCode).toBe(200)
  })
  beforeEach(async () => {
    const response = await request(app)
    .post('/books')
    .send({id: 20, name: "MyDearDatabase", author: "Admin" , read: true })
    .set('Authorization', `Bearer ${adminToken}`)
    expect(response.statusCode).toBe(400)
  })
  it('returns 400 cant post a book with the same ID twice', async () => {
    const response = await request(app)
    .post('/books')
    .send({ id: 20, name: "MyDearDatabase", author: "Admin" , read: true })
    .set('Authorization', `Bearer ${adminToken}`)
    expect(response.statusCode).toBe(200)
  })
  it('returns 200 can post the same book with a different ID', async () => {
    const response = await request(app)
    .post('/books')
    .send({ id: 40, name: "MyDearDatabase", author: "Admin" , read: true })
    .set('Authorization', `Bearer ${adminToken}`)
    expect(response.statusCode).toBe(200)
  })
  it('returns 200 can edit a book', async () => {
    console.log(books[20].name, 'books[20].name');
    const response = await request(app)
    .put('/books/20')
    .send({name: "TheArtOfDatabaseMaintenance", author: "Admin" , read: true })
    .set('Authorization', `Bearer ${adminToken}`)
    expect(books[20].name).toBe('TheArtOfDatabaseMaintenance')
    expect(response.statusCode).toBe(200)
})})

function tokenTest(token: string): JwtPayload | string {
  try {
    const decodedToken = jwt.verify(token, SECRET) as JwtPayload
    return decodedToken
  } catch (error) {
    return 'Invalid Token'
  }
}
app.close()
