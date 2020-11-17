# koa



## 简介

基于node.js平台的下一代web开发框架，express原班人马开发。



## 安装

新建一个文件夹test，在test中使用以下命令

``````js
// yarn 或者 npm 都可以安装，看自己喜好，本文使用的是yarn
yarn init -y
yarn add -s koa
``````





## 使用

下面代码是一个用koa搭建的简单web应用(新建一个index.js)

``````js
//  index.js
const koa = require('koa');
const app = new koa();

app.use((ctx)=>{
    ctx.body = {
        "message": "hello javyin!"
    }
})

app.listen(4444);
``````

保存之后，在终端使用node index.js运行起来，然后访问localhost:4444,  页面就会显示

``````js
{"message":"hello javyin!"}
``````



以上就是一个最简单的koa应用。

