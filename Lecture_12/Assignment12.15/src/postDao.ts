import { executeQuery } from './db'
import { Post } from '../types/forum'

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

export const readPost = async (id: number): Promise<Post | null> => {
  const query = `
  SELECT 
  json_build_object(
    'id', posts.id,
    'username', posts.username,
    'title', posts.title,
    'content', posts.content,
    'post_date', posts.post_date,
    'comments', json_agg(
      json_build_object(
        'id', comments.id,
        'username', comments.username,
        'post_id', comments.post_id,
        'content', comments.content,
        'comment_date', comments.comment_date
      )
    )
  ) AS post
FROM posts 
LEFT JOIN comments ON posts.id = comments.post_id
WHERE posts.id = $1
GROUP BY posts.id`

  const params = [id]
  const result = await executeQuery(query, params)

  console.log(result)

  if (result.rows.length === 0) {
    return null
  }

  const post: Post = result.rows[0]

  return post
}

export const updatePost = async (id: number, title: string, content: string) => {
  const query = `
            UPDATE Posts SET (title = $1, content = $2) WHERE id = $3`
  const params = [title, content, id]
  await executeQuery(query, params)
}

export const deletePost = async (id: number) => {
  const query = `DELETE FROM Posts WHERE id = $1`
  const params = [id]
  await executeQuery(query, params)
}

export const listPosts = async () => {
  const query = `
                SELECT * FROM Posts`
  const result = await executeQuery(query)
  return result.rows
}
