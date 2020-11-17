const baseWebpackConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');

const webpackconfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map', // 用于后面调试
    stats: {children: false}
});

module.exports = webpackconfig;