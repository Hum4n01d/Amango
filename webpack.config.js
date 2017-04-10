var path = require('path');

module.exports = {
  entry: './src/renderer/renderer.js',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      loader: "babel-loader",
      options: {
        presets: ["es2015", "stage-0", "react"]
      }
    }, ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true
    })
  ]
}