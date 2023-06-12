import express, { Request, Response } from 'express'
import { addProduct, readproducts, updateProduct, deleteProduct } from './dao'
export const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  const { name, price } = req.body
  const result = await addProduct(name, price)
  res.send(result)
})

router.get('/', async (req: Request, res: Response) => {
  res.json(await readproducts())
})

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, price } = req.body
  await updateProduct(Number(id), name, price)
  res.send('Product updated')
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  await deleteProduct(Number(id))
  res.send('Product deleted')
})
