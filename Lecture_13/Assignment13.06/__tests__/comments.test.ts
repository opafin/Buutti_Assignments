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

describe('Testing the /comments -routes', () => {
  let app: any
  beforeAll(() => {
    initializeMockPool(mockResponse)
    app = createServer().listen(3003)
  })
  afterAll(() => {
    jest.clearAllMocks()
    app.close()
  })
  it('GET "/comments/ returns a valid response', async () => {
    const response = await request(app).get('/comments/101')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockResponse.rows)
  })
  it('GET "/comments/:username returns a valid response', async () => {
    const response = await request(app).get('/comments/101')
    expect(response.status).toBe(200)
    expect(response.body[0]).toEqual(mockResponse.rows[0])
  })
  it('PUT "/comments/:id" returns "Comment updated" ', async () => {
    const response = await request(app).put('/comments/101')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Comment updated')
  })
  it('DELETE "/comments/:id" returns "Comment deleted" ', async () => {
    const response = await request(app).delete('/comments/101')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Comment deleted')
  })
})
