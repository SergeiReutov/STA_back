import Router from 'koa-router';
import chartRouter from './chart.js';

const router = new Router({
  prefix: '/api'
});

router
  .use('/chart', chartRouter.routes(), chartRouter.allowedMethods());

export default router;
