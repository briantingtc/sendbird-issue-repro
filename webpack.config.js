const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './App.tsx',
  target: 'browserslist',
  output: {
    publicPath: 'http://localhost:8080/',
    path: '/app/assets/',
    filename: '[name].js',
  },
  devtool: 'inline-cheap-module-source-map',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: {
          and: [/node_modules/],
          not: [/@janeapp\/voice-scribe-audio-recorder/],
        },
      },
    ],
  },
}
