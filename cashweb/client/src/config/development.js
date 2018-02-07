const path         = require('path');
const webpackMerge = require('webpack-merge');

const commonConfigs = require('./base.js');

module.exports = () => {
  return webpackMerge(commonConfigs(), {
    output: {
      path: path.join(__dirname, '../../static/'),
      filename: 'js/[name].bundle.js',
      publicPath: '../../static/',
      sourceMapFilename: 'js/[name].map'
    },
    devtool: 'source-map',
    devServer: {
      port: 3000,
      host: 'localhost',
      hot: true,
      inline: true,
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: '../../static/'
    }
  });
}
