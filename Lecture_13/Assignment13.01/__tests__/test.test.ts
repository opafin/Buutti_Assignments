import { pool } from '../src/db'

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
})
