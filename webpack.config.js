const { resolve } = require('path')
const {HotModuleReplacementPlugin, NamedModulesPlugin, DefinePlugin} = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV != 'production'

const PORT = 5000
const buildFolder = 'build'

const entry = isDev ? [
  'react-hot-loader/patch', // activate HMR for React
  'webpack-dev-server/client?http://localhost:' + PORT, // bundle the client for webpack-dev-server and connect to the provided endpoint
  'webpack/hot/only-dev-server', // bundle the client for hot reloading. only- means to only hot reload for successful updates
  './index.js' // the entry point of our app
] : './index.js'

const devPlugins = isDev ? [
  new HotModuleReplacementPlugin(), // enable HMR globally
  new NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
] : undefined

module.exports = {
  context: resolve(__dirname, 'src/renderer'),
  devtool: 'inline-source-map',
  entry: entry,
  target: 'electron',
  externals: {
    electron: 'electron'
  },
  output: {
    filename: 'bundle.js', // the output bundle
    path: resolve(__dirname, buildFolder),
    publicPath: '/', // necessary for HMR to know where to load the hot update chunks
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'    
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, 'src/renderer/index.html')
    }),
    new DefinePlugin({
      'environment': '"production"',
      NODE_ENV: JSON.stringify('production')
    })
  ].concat(devPlugins)
}