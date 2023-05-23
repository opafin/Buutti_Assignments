import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  const input = req.body.input.toUpperCase()

  context.res = {
    status: 200,
    body: input
  }
}

export default httpTrigger
