const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'es6-promise',
      'whatwg-fetch',
      './front/app.js'
    ]
  },
  //出力されるファイル名
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    // 省略可能な拡張子
    extensions: ['.js'],
    // 探索するモジュール用ディレクトリを指定
    modules: ['node_modules']
  },
  module: {
    // 使用するloaderを記述
    rules: [
      { test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'front/assets/images'),
        to: path.join(__dirname, 'dist/images')
      }
    ]),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
