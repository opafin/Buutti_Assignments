import { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const tokenize = (username: string): string => {
  const payload = { username: username }
  const secret = 'i think gollum graphics are great'
  const options = { expiresIn: '1h' }
  const token = jwt.sign(payload, secret, options)
  return token
}

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.get('Authorization')
  if (!auth?.startsWith('Bearer')) {
    return res.status(403).send('Not logged in')
  }

  const token = auth.substring(7)

  try {
    const decodedToken = jwt.verify(token, 'i think gollum graphics are great')
    const user = decodedToken
    console.log(req.method)
    const adminMethods = ['POST', 'PUT', 'DELETE']
    if (adminMethods.includes(req.method) && user !== 'admin') {
      return res.status(403).send('No admin rights')
    }
    next()
  } catch (error) {
    return res.status(401).send('Invalid token')
  }
}
