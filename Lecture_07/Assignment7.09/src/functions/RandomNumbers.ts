import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions'
import { generateARandom } from '../../assignment7.09'

interface Body {
  minNumber?: string
  maxNumber?: string
  integer?: boolean
}

export async function RandomNumbers(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`)

  const body: Body = await request.json()
  const integer = Boolean(body.integer) || false
  const minNumber = Number(body.minNumber)
  const maxNumber = Number(body.maxNumber)

  if (!minNumber || !maxNumber) {
    return { status: 400, body: 'Please provide a minimum and maximum number.' }
  } else {
    const randomNumber = generateARandom(minNumber, maxNumber, integer)
    return { body: `Your random number is, ${randomNumber}!` }
  }
}

app.http('RandomNumbers', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: RandomNumbers
})
