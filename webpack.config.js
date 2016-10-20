/**
 * @file    Webpack configuration file.
 * @author  Titouan CREACH
 * @version 1
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    SAUCER: __dirname + '/app/client/index.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [{
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
    }],

    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }] 
  },

  devtool: 'source-map',

  devServer:{
    contentBase: __dirname + '/dist',
    hot: true,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({
       template: __dirname + '/app/client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

