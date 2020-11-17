// const koa = require('koa');
// const path =  require('path');  // nodejs自带模块
// const helmet = require('koa-helmet');   // 给服务器增加一些安全头，让服务器更加安全
// const statics = require('koa-static');  // 静态资源服务器，实现在服务器上存放一些静态资源

// 配置webpack,可以方便的使用ES6语法，那引入就可以不用nodejs的require,而是方便的使用import
// 需要安装 webpack, webpack-cli, clean-webpack-plugin, webpack-node-externals, 
// @babel/core, @babel/node(全局安装), @babel/preset-env, babel-loader, cross-env
// 注意，ES6语法生效后，就不能使用node来启动服务器， 需要使用npx babel-node来启动，或者直接在package.json中配置命令行
import koa from 'koa';
import path from 'path';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import koaBody from 'koa-body';
import jsonutil from 'koa-json';
import cors from '@koa/cors';
import koaCompose from 'koa-compose'; // 整合koa的中间件
import compress from 'koa-compress';  // 压缩中间件
// const router = require('./routes');
import router from './routes';

const app = new koa();

const isDevMode = process.env.NODE_ENV == "production" ?  false : true;

const middleware = koaCompose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonutil({pretty: false, param: "pretty"}),
    helmet()
])

if(!isDevMode) {
    app.use(compress())
};

// app.use(helmet());
// app.use(statics(path.join(__dirname, '../public')));

app.use(middleware);
app.use(router());

app.listen(4444);