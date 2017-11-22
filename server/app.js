import express from 'express'
import path from 'path'
import open from 'open'
import handleRender from './handle-render'
import webpackMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'

const app = express()
const port = 3000

// express内でwebpack-dev-serverを立てる
app.use(webpackMiddleware(webpack(webpackConfig), {
  lazy: false,
  serverSideRender: true
}))

// 静的ファイル置き場の指定
app.use('/', express.static(path.join(__dirname, './public')))

// This is fired every time the server side receives a request
app.use(handleRender)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'))
// });

app.listen(port, (error) => {
  if (error) {
    console.log(error)
  } else {
    open(`http://localhost:${port}`)
  }
})
