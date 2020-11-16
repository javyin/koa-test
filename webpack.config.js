const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 用于排除一些我们使用不到的node模块
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const webpackconfig = {
    target: 'node',
    mode: 'development',
    entry: {
        server: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    devtool: 'eval-source-map', // 用于后面调试
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
        new CleanWebpackPlugin()
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

module.exports =  webpackconfig;