'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


// warning in output "Entrypoint undefined = extract-text-webpack-plugin-output-filename"
// see here: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/731


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
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanPlugin(['assets']),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:2368',
        files: [
          {
            match: [
              '**/*.hbs',
              './src/*.*'
            ]
          }
        ]
      },
      {
        reload: true
      }
    )
  ],

  devtool: 'source-map'
}

module.exports = webpackConfig;
