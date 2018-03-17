const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use('/api', router)

server.post('/api/authenticate', (req, res) => {
  res.jsonp("testToken")
})

server.listen(1323, () => {
  console.log('JSON Server is running')
})