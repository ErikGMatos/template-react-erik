const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const isDevelopment = Boolean(process.env.REACT_FAST);

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
          {
            loader: 'stylelint-custom-processor-loader',
          },
        ],
      },
      {
        test: /.*\.icone\.(svg|gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/images',
          },
        },
      },
      {
        test: /.*\.inline\.(svg)$/i,
        use: [
          {
            loader: 'react-svg-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
      favicon: './src/assets/favicon/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
      'process.env.REACT_FAST': JSON.stringify(process.env.REACT_FAST),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contentHash].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
