const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { app: ['./src/index.tsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl/i,
        use: [
          'style-loader',
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
              sourceMap: true
            },
          },
          { 
            loader: 'postcss-loader',
          },
          {
            loader: 'stylus-loader',
            options: {
              webpackImporter: true,
            },
          },
        ],
      },
      { 
        test: /\.css$/, 
        use: [ 
          'style-loader', 
          { 
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          } 
        ] 
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};