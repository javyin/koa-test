const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 用于排除一些我们使用不到的node模块
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const utils = require('./utils');
const webpack = require('webpack');
// debugger   
// 用于断点调试 npx node --inspect-brk ./node_modules/.bin/webpack --inline --progress
// 也可以把命令添加到package.json中，方便运行
// 然后可以在chrome中 输入 chrome://inspect， 就可以调试

const webpackconfig = {
    target: 'node',
    entry: {
        server: path.join(utils.APP_PATH, 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: utils.DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader: 'babel-loader'
                },
                exclude: [path.join(__dirname, 'node_modules')]
            }
        ]
    },
    externals: [nodeExternals()],
    plugins:[
        new CleanWebpackPlugin(),
        //  DefinePlugin 可以创建一个常量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: (process.env.NODE_ENV == 'productino' || process.env.NODE_ENV == 'prod' ? "'productoin'" : "'development'")
            }
        })
    ],
    node: {
        // console: true,
        global: true,
        // process: true,
        // buffer: true,
        __filename: true,
        __dirname: true,
        // setImmediate: true,
        // path: true
    }
}

console.log(webpackconfig)

module.exports =  webpackconfig;