import { executeQuery } from './db'

export const addUser = async (username: string, full_name: string, email: string) => {
  const query = `
        INSERT INTO Users (username, full_name, email) VALUES ($1, $2, $3)
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

export const readUser = async (username: string) => {
  const query = `
            SELECT username, full_name, email
            FROM users
            WHERE username = $1`
  const params = [username]
  const result = await executeQuery(query, params)
  return result.rows
}

export const updateUser = async (username: string, new_user_name: string, email: number) => {
  const query = `
            UPDATE Users 
            SET username = $1, email = $2 
            WHERE username = $3`
  const params = [new_user_name, email, username]
  await executeQuery(query, params)
}

export const deleteUser = async (username: string) => {
  const query = `
                DELETE FROM Users WHERE username = $1`
  const params = [username]
  await executeQuery(query, params)
}

export const listUsers = async () => {
  const query = `
                SELECT * FROM Users`
  const result = await executeQuery(query)
  return result.rows
}
