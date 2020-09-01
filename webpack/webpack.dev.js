const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    compress: true,
    // host: 'local.webmotors.com.br',
    // host: `local.hml.cockpit.com.${process.env.translate.slice(3)}`,
    port: 8080,
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    // proxy: {
    //   '*': {
    //     bypass: req => {
    //       jsonRequest.Records[0].cf.request.uri = req.originalUrl;
    //       lambdaViewer.handler(jsonRequest, null, (err, res) => {
    //         req.originalUrl = res.uri;
    //       });
    //       return req.originalUrl;
    //     },
    //   },
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new ReactRefreshWebpackPlugin({ overlay: false }),
  ],
  devtool: 'cheap-module-source-map',
});
