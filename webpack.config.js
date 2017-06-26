const { resolve } = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV != 'production'

const PORT = 5000
const buildFolder = 'build'

const entry = isDev ? [
  'react-hot-loader/patch', // activate HMR for React
  'webpack-dev-server/client?http://localhost:'+PORT, // bundle the client for webpack-dev-server and connect to the provided endpoint
  'webpack/hot/only-dev-server', // bundle the client for hot reloading. only- means to only hot reload for successful updates
  './index.js' // the entry point of our app
] : './index.js'

const devPlugins = isDev ? [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
] : undefined

module.exports = {
  context: resolve(__dirname, 'src'),
  devtool: 'cheap-module-source-map',
  entry: entry,
  output: {
    filename: 'bundle.js', // the output bundle
    path: resolve(__dirname, buildFolder),
    publicPath: '/' // necessary for HMR to know where to load the hot update chunks
  },
  devServer: {
    port: PORT,
    hot: true, // enable HMR on the server
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', {loader: 'css-loader', options: {modules: true}}, 'stylus-loader']
      },
      {
        test: /\.jpg/,
        use: 'file-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, 'src/index.html')
    }),
    new webpack.DefinePlugin({
      "environment": '"production"',
      NODE_ENV: JSON.stringify("production")
    })
  ].concat(devPlugins),
};