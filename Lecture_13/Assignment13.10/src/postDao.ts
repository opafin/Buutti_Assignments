import { executeQuery } from './db'
import { Post } from '../types/forum'

export const addPost = async (username: string, title: string, content: string) => {
  const query = `
        INSERT INTO Posts (post_username, post_title, post_content) VALUES ($1, $2, $3)
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
  'post', 
  json_build_object(
      'id', post_id,
      'username', post_username,
      'title', post_title,
      'content', post_content,
      'date', post_date,
      'comments', COALESCE(json_agg(json_build_object(
            'id', comment_id,
            'post_id', comment_post_id,
            'username', comment_username,
            'content', comment_content, 
            'date', comment_date) 
      ) FILTER (WHERE comments.comment_id IS NOT NULL), '[]')))
  FROM posts 
  LEFT JOIN comments ON posts.post_id = comments.comment_post_id
  WHERE posts.post_id = $1
  GROUP BY posts.post_id;`

  const params = [id]
  const result = await executeQuery(query, params)
  if (result.rows.length === 0) {
    return null
  }
  const post: Post = result.rows[0].json_build_object
  return post
}

export const updatePost = async (id: number, title: string, content: string) => {
  const query = `
            UPDATE Posts 
            SET post_title = $1, post_content = $2
            WHERE post_id = $3`
  const params = [title, content, id]
  await executeQuery(query, params)
}

export const deletePost = async (id: number) => {
  const query = `DELETE FROM Posts WHERE post_id = $1`
  const params = [id]
  await executeQuery(query, params)
}

export const listPosts = async () => {
  const query = `
                SELECT * FROM Posts`
  const result = await executeQuery(query)
  return result.rows
}
