import { pool } from '../src/db'
import { createServer } from '../src/server'
import request from 'supertest'
import { Post } from '../types/forum'
import { readPost } from '../src/postDao'

jest.mock('../src/postDao.ts', () => ({
  ...jest.requireActual('../src/postDao.ts'),
  readPost: jest.fn()
}))
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
const mockPost: Post = {
  id: 1,
  username: 'untamo',
  title: 'untamon seikkailut',
  content: 'the adventures of UnThamo',
  date: new Date('2023-01-01'),
  comments: []
}

describe('Testing the /posts -routes', () => {
  let app: any
  beforeAll(() => {
    initializeMockPool(mockResponse)
    app = createServer().listen(3001)
  })
  afterAll(() => {
    jest.clearAllMocks()
    app.close()
  })
  it('GET "/posts" returns rows', async () => {
    const response = await request(app).get('/posts')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockResponse.rows)
  })
  it('GET "/posts/:id" returns a post-object', async () => {
    (readPost as jest.Mock).mockResolvedValue(mockPost)
    const response = await request(app).get('/posts/1')
    response.body.date = new Date(response.body.date)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockPost)
  })
  it('DELETE "/posts" returns "Post deleted"', async () => {
    const response = await request(app).delete('/posts/101')
    expect(response.text).toBe('Post deleted')
  })
  it('PUT "/posts/:id" returns "Post updated"', async () => {
    const response = await request(app).put('/posts/101')
    expect(response.text).toBe('Post updated')
  })
})
