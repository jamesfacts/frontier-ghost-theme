'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


let webpackConfig = {
  // go down a step to reach assets
  context: path.resolve(__dirname, '../'),

  entry: {
    'main' : [
      './scripts/app.js',
      './styles/main.scss'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../../assets'),
    filename: 'scripts/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /scripts/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,

        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: { path: path.resolve(__dirname, './postcss.config.js') }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    new CleanPlugin(['assets']),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true
    })
  ],

  devtool: 'inline-source-map'
}

module.exports = webpackConfig;
