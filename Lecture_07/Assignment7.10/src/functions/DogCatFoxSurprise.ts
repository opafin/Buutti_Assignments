import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions'
let counter = 0
export async function DogCatFoxSurprise(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`)

  interface DogsCats {
    greeting: string
    link: string
  }

  const roll = Math.random()
  let message: DogsCats
  counter++

  if (roll > 0.5 && counter !== 13) {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    const link = data.message
    message = { greeting: "Here's a dog for you!", link: link }
  } else {
    const data = await fetch('https://cataas.com/cat')
    const link = data.url
    message = { greeting: "Here's a cat for you!", link: link }
  }

  if (counter === 13) {
    const data = await (await fetch('https://randomfox.ca/floof')).json()
    const link = data.image
    counter = 0
    message = { greeting: "Here's a suprise fox for you!", link: link }
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Animal Surprise</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #FFFFFF;
                font-family: Arial Black, Gadget, sans-serif;
            }
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                background-color: #FFF257;
                transition: 0.3s;
                width: 50%;
                border-radius: 5px;
            }
            .card img {
                border-radius: 5px 5px 0 0;
                width: 100%;
            }
            .container {
                padding: 2px 16px;
            }
        </style>
      </head>
      <body>
        <div class="card">
            <img src="${message.link}" alt="Animal Picture" />
            <div class="container">
                <h1><b>${message.greeting}</b></h1>
            </div>
        </div>
      </body>
    </html>
  `

  return {
    status: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: html
  }
}

app.http('DogCatFoxSurprise', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: DogCatFoxSurprise
})
