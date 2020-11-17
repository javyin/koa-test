const baseWebpackConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // 用于压缩代码

const webpackconfig = merge(baseWebpackConfig, {
    mode: 'production',
    stats: {children: false, warnings: false}, // 不需要输出日志警告等信息
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        // 是否注释console
                        drop_console: false,
                        dead_code: true,
                        drop_debugger: true
                    },
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: {
                        comments: false,
                        //  一行输出结构
                        beautify: false
                    }
                  },
                  parallel: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce: true
                }
            }
        }
    }
});

module.exports = webpackconfig;