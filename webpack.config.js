const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
//
module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/src'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: "css-loader"
       }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    })
  ],
};
