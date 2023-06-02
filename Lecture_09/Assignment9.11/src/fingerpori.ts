import express, { Request, Response } from 'express'
import puppeteer from 'puppeteer'

const fingerpori = express.Router()

fingerpori.get('/', async (req: Request, res: Response) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.hs.fi/fingerpori/')

  const joke = await page.evaluate(() => {
    const element = document.querySelector('img:first-of-type')
    return element ? element.getAttribute('data-srcset') : null
  })
  await browser.close()
  console.log(joke)
  const parsedJoke = 'https://' + joke?.slice(2).split(' ')[0]
  console.log(parsedJoke)

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
    <img src="${parsedJoke}" alt="Joke Image">
</body>
</html>`)
})

export default fingerpori

//daily updated fingerpori
