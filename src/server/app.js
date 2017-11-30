import express from 'express'
import proxy from 'http-proxy-middleware'
import path from 'path'
import open from 'open'
import handleRender from './handle-render'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config'

const app = express()
const port = 3000

// express内でwebpack
app.use(webpackDevMiddleware(webpack(webpackConfig), {
  lazy: false,
  serverSideRender: true
}))

// 静的ファイル置き場の指定
app.use('/', express.static(path.join(__dirname, './public')))

// apiサーバーへのproxy
app.use('/api', proxy({target: 'http://localhost:1323', changeOrigin: true}))

// This is fired every time the server side receives a request
app.use(handleRender)

app.listen(port, (error) => {
  if (error) {
    console.log(error)
  } else {
    open(`http://localhost:${port}`)
  }
})
