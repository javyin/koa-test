const combineRoutes = require('koa-combine-routers');

const aRoutes = require('./aRouter');
const bRoutes = require('./bRouter');
import publicRoutes from './publicRouter';
import loginRoutes from './loginRouter';

// 注意，combineRoutes的参数不用{}
module.exports = combineRoutes(
    aRoutes,
    bRoutes,
    publicRoutes,
    loginRoutes
)