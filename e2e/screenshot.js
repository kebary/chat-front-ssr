const { Chromeless } = require('chromeless')
const path = require('path')

async function run() {
  const chromeless = new Chromeless()

  const screenshot = await chromeless
    .goto('https://www.google.com')
    .type('hoge', 'input[name="q"]')
    .press(13)
    .wait('#resultStats')
    .screenshot({ filePath: path.join(__dirname, `screenshots/${+new Date()}.png`) })

  console.log(screenshot) // prints local file path or S3 url

  await chromeless.end()
}

run().catch(console.error.bind(console))