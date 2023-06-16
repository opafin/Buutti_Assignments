import { executeQuery } from './db'

export const addComment = async (username: string, post_id: number, content: string) => {
  const query = `
        INSERT INTO Comments (comment_username, comment_post_id, comment_content) VALUES ($1, $2, $3)
        RETURNING *`
  const params = [username, post_id, content]
  const result = await executeQuery(query, params)
  return result.rows[0]
}

export const listComments = async () => {
  const query = `
                SELECT * FROM Comments`
  const result = await executeQuery(query)
  return result.rows
}
export const listUsersComments = async (username: string) => {
  const query = `
                SELECT *
                FROM Comments
                WHERE comment_username = $1`
  const params = [username]
  const result = await executeQuery(query, params)
  return result.rows
}

export const updateComment = async (id: number, content: string) => {
  const query = `
            UPDATE Comments 
            SET comment_content = $1 
            WHERE comment_id = $2`
  const params = [content, id]
  await executeQuery(query, params)
}

export const deleteComment = async (id: number) => {
  const query = `
                DELETE FROM Comments 
                WHERE comment_id = $1`
  const params = [id]
  await executeQuery(query, params)
}
