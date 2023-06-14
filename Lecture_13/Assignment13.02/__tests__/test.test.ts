import { pool } from '../src/db'
import { app } from '../src/index'
import request from 'supertest'

//prettier-ignore
const initializeMockPool = (mockResponse: any) => {
  (pool as any).connect = jest.fn(() => {
      return {
          query: () => mockResponse,
          release: () => null
      }
  })
}

describe('Testing GET /products', () => {
  const mockResponse = {
    rows: [
      { id: 101, name: 'Test Item 1', price: 100 },
      { id: 102, name: 'Test Item 2', price: 200 }
    ]
  }

  beforeAll(() => {
    initializeMockPool(mockResponse)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Description', async () => {
    expect(true).toBe(true)
  })

  it('Returns rows with Kissa and Koira', async () => {
    const response = await request(app).get('/products')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockResponse.rows)
  })

  it('Returns a single object', async () => {
    const response = await request(app).get('/products/101')
    expect(response.status).toBe(200)
    console.log(response.body)
    console.log(mockResponse)
    console.log(mockResponse.rows[0])
    expect(response.body).toEqual(mockResponse.rows[0])
  })

  it('returns product deleted when deleting', async () => {
    const response = await request(app).delete('/products/101')
    expect(response.text).toBe('Product deleted')
  })
})

app.close()
