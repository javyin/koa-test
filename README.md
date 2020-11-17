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



## 进阶

上面的应用只是单纯的访问应用，并没有做其他实用性的功能，下面给koa添加一下中间件，使web应用更加完善。

首先要安装几个包

``````js
// 路由koa-router
yarn add -s koa-router

// 路由合并
yarn add -s koa-combine-routers

// 跨域
yarn add -s @koa/cors

// koa-body可以实现文件上传，并且可以让应用获取post请求参数
yarn add -s koa-body

// koa-helmet增加一些安全头，使应用更加安全
yarn add -s koa-helmet

// koa-static 静态资源服务器
yarn add -s koa-static
``````



### router路由的使用

在没有使用koa-router中间件的时候，我们只能简单的访问应用，使用router之后，我们就可以加上路由，例如: localhost:4444/api/get



下面代码是简单的使用方法:

``````js
// index.js
const koa = require('koa');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

router.prefix('/api'); // 用于添加路由前缀
router.get('/get', (ctx)=>{
    ctx.body = {
        "message": "hello javyin! handsome boy!"
    }
});

app.use(router.routes());
app.listen(4444);
``````

运行后，访问地址 localhost:4444/api/get, 页面便会显示

``````js
{"message": "hello javyin! handsome boy!"}
``````



### 路由合并

实际开发中，并不可能把所有的代码都放到index.js里，维护太麻烦，而且代码显得太杂乱，路由合并就可以把不同的功能的api路由分开不同文件存放，最后把所有路由合并起来，在index.js里使用就可以。

以下是路由合并的简例：

``````js
//  aRouter.js

const Router = require('koa-router');
const router = new Router();
router.get('/a', (ctx)=>{
    ctx.body = {
        "message": "hello from 'a' file."
    }
});

module.exports = router;
``````

``````js
//  bRouter.js

const Router = require('koa-router');
const router = new Router();
router.get('/b', (ctx)=>{
    ctx.body = {
        "message": "hello from 'b' file."
    }
});

module.exports = router;
``````

把上面两个路由，在routes.js中合并

``````js
// routes.js

const combineRouters = require('koa-combine-routers')
const aroutes = require('./aRouter.js');
const broutes = require('./bRouter.js');

module.exports = combineRouters(
	aroutes,
    broutes
)
``````

然后在index.js中使用

``````js
// index.js

const koa = require('koa');
const app = new koa();
const router = require('./routes.js');

app.use(router());
app.listen(4444);
``````

运行后访问localhost:4444/a 或者localhost:4444/b， 页面就会显示相应的返回参数。

把路由抽出来做成模块化，能更有效的维护管理代码，使应用看起来更简洁可读。

