const path = require('path')

const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  },
  node: {
    __dirname: false
  },
  plugins: [
    new CheckerPlugin()
  ]
}

module.exports = [
  merge(
    {
      target: 'electron-main',
      entry: { main: './src/main.ts' }
    },
    commonConfig),
  merge(
    {
      target: 'electron-renderer',
      entry: { gui: './src/gui.ts' },
      plugins: [
        new HtmlWebpackPlugin()
      ]
    },
    commonConfig)
]
