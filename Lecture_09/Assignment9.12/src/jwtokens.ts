import { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

const SECRET = process.env.SECRET ?? ''

export interface CustomRequest extends Request {
  user?: JwtPayload
}

export const tokenize = (username: string): string => {
  const payload = { username: username }
  const secret = SECRET
  const options = { expiresIn: '1h' }
  if (username === 'admin') {
    const payload = { username: username, isAdmin: true }
    const adminToken = jwt.sign(payload, secret, options)
    return adminToken
  } else {
    const token = jwt.sign(payload, secret, options)
    return token
  }
}

export const checkToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const auth = req.get('Authorization')
  if (!auth?.startsWith('Bearer')) {
    return res.status(403).send('Not logged in')
  }
  const token = auth.substring(7)
  try {
    const decodedToken = jwt.verify(token, SECRET) as JwtPayload
    req.user = decodedToken
    const adminMethods = ['POST', 'PUT', 'DELETE']
    if (adminMethods.includes(req.method) && req.user.isAdmin !== true) {
      return res.status(403).send('No admin rights for PUT INPUT or DELETE')
    }
    next()
  } catch (error) {
    return res.status(401).send('Invalid token')
  }
}
