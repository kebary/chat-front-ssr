export default (html, preloadedState) => `
  <!DOCTYPE html>
  <html>

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
      <meta name="description" content="">
      <meta name="author" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="">
    </head>

    <body>
      <div id="app">${html}</div>
      <script src="/app.js"></script>
    </body>

  </html>
`
