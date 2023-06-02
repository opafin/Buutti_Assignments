import express, { Request, Response } from 'express'
import puppeteer from 'puppeteer'

const dadJoke = express.Router()

dadJoke.get('/', async (req: Request, res: Response) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://icanhazdadjoke.com/')

  const joke = await page.evaluate(() => {
    const element = document.querySelector('p.subtitle')
    return element ? (element as HTMLElement).innerText : null
  })
  await browser.close()
  console.log(joke)

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<style> body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: aliceblue;
    font-family: "Roboto", Gadget, sans-serif;
    font-weight: 900;
    background-color: #302e33;
    
}</style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>${joke}</p>
</body>
</html>`)
})

export default dadJoke
