var webpackConfig = require('../../config/webpack/base-webpack-config');

module.exports = webpackConfig(
  process.env.NODE_ENV || 'production', __dirname + '/src/event.js', './dist/js', 'event.js'
);
