import { executeQuery } from './db'

export const addPost = async (username: string, title: string, content: string) => {
  const query = `
        INSERT INTO Posts (username, title, content) VALUES ($1, $2, $3)
        RETURNING *`
  const params = [username, title, content]
  const result = await executeQuery(query, params)
  return result.rows[0]
}

export const readPosts = async () => {
  const query = `
            SELECT * FROM Posts`
  const result = await executeQuery(query)
  return result.rows
}

export const readPost = async (id: number) => {
  const query = `
            SELECT id, username, title, content, post_date
            FROM Posts WHERE id = $1`
  const params = [id]
  const result = await executeQuery(query, params)
  return result.rows
}

export const updatePost = async (id: number, title: string, content: string) => {
  const query = `
            UPDATE Posts SET (title = $1, content = $2) WHERE id = $3`
  const params = [title, content, id]
  await executeQuery(query, params)
}

export const deletePost = async (id: number) => {
  const query = `
                DELETE FROM Posts WHERE id = $1`
  const params = [id]
  await executeQuery(query, params)
}

export const listPosts = async () => {
  const query = `
                SELECT * FROM Posts`
  const result = await executeQuery(query)
  return result.rows
}
