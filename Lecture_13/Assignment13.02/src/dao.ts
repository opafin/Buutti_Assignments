import { executeQuery } from './db'

export const addProduct = async (name: string, price: number) => {
  const query = `
        INSERT INTO products (name, price) VALUES ($1, $2)
        RETURNING *`
  const params = [name, price]
  const result = await executeQuery(query, params)
  return result.rows[0]
}

export const readproducts = async () => {
  const query = `
            SELECT * FROM products`
  const result = await executeQuery(query)
  return result.rows
}
export const readproduct = async (id: number) => {
  const query = `
            SELECT *
            FROM products
            WHERE id = $1`
  const result = await executeQuery(query)
  return result.rows[0]
}

export const updateProduct = async (id: number, name: string, price: number) => {
  const query = `
            UPDATE products SET name = $1, price = $2 WHERE id = $3`
  const params = [name, price, id]
  await executeQuery(query, params)
}

export const deleteProduct = async (id: number) => {
  const query = `
                DELETE FROM products WHERE id = $1`
  const params = [id]
  await executeQuery(query, params)
}

export const listProducts = async () => {
  const query = `
                SELECT * FROM products`
  const result = await executeQuery(query)
  return result.rows
}
