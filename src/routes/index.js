const combineRoutes = require('koa-combine-routers');

const aRoutes = require('./aRouter');
const bRoutes = require('./bRouter');

// 注意，combineRoutes的参数不用{}
module.exports = combineRoutes(
    aRoutes,
    bRoutes
)