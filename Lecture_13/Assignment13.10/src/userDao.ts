import { executeQuery } from './db'

export const addUser = async (username: string, full_name: string, email: string) => {
  const query = `
        INSERT INTO Users (user_username, user_full_name, user_email) VALUES ($1, $2, $3)
        RETURNING *`
  const params = [username, full_name, email]
  const result = await executeQuery(query, params)
  return result.rows[0]
}

export const readUsers = async () => {
  const query = `
            SELECT * FROM users`
  const result = await executeQuery(query)
  return result.rows
}

export const readUser = async (id: number) => {
  const query = `
            SELECT user_username, user_full_name, user_email
            FROM users
            WHERE user_id = $1`
  const params = [id]
  const result = await executeQuery(query, params)
  return result.rows
}

export const updateUser = async (id: number, new_user_name: string, email: number) => {
  const query = `
            UPDATE Users 
            SET user_username = $1, user_email = $2 
            WHERE user_id = $3`
  const params = [new_user_name, email, id]
  await executeQuery(query, params)
}

export const deleteUser = async (username: string) => {
  const query = `
                DELETE FROM Users WHERE user_username = $1`
  const params = [username]
  await executeQuery(query, params)
}

export const listUsers = async () => {
  const query = `
                SELECT * FROM Users`
  const result = await executeQuery(query)
  return result.rows
}
