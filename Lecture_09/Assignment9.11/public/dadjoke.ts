import puppeteer from 'puppeteer'

async function getJoke() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://icanhazdadjoke.com/')

  const joke = await page.evaluate(() => {
    const element = document.querySelector('p.subtitle')
    return element ? (element as HTMLElement).innerText : null
  })

  console.log(joke)

  await browser.close()
}

getJoke().catch(console.error)

// Did you hear about the new restaurant on the moon? The food is great, but there’s just no atmosphere.
