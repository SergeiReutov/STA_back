const Router = require('koa-router');

const chartRouter = require('./chart');

const router = new Router({
  prefix: '/api'
});

router
  .use('/chart', chartRouter.routes(), chartRouter.allowedMethods());

module.exports = router;
