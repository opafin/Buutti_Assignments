import { pool } from '../src/db'
import { createServer } from '../src/server'
import request from 'supertest'

const initializeMockPool = (mockResponse: any) => {
  (pool as any).connect = jest.fn(() => {
    return {
      query: () => mockResponse,
      release: () => null
    }
  })
}
const mockResponse = {
  rows: [
    { id: 101, name: 'Kissa', price: 100 },
    { id: 102, name: 'Koira', price: 200 }
  ]
}

describe('Testing the /users -routes', () => {
  let app: any
  beforeAll(() => {
    initializeMockPool(mockResponse)
    app = createServer().listen(3002)
  })
  afterAll(() => {
    jest.clearAllMocks()
    app.close()
  })
  it('GET "/users/ returns a valid response', async () => {
    const response = await request(app).get('/users/101')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockResponse.rows)
  })
  it('GET "/users/:id returns a valid response', async () => {
    const response = await request(app).get('/users/101')
    expect(response.status).toBe(200)
    expect(response.body[0]).toEqual(mockResponse.rows[0])
  })
  it('PUT "/users/:id" returns "User updated" ', async () => {
    const response = await request(app).put('/users/101')
    expect(response.status).toBe(200)
    expect(response.text).toBe('User updated')
  })
  it('DELETE "/users/:id" returns "User deleted" ', async () => {
    const response = await request(app).delete('/users/101')
    expect(response.status).toBe(200)
    expect(response.text).toBe('User deleted')
  })
})
