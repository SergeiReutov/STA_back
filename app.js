const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.post('/stock/:id', (ctx) => {
  const id = ctx.params.id;
  const params = ctx.request.req;
  ctx.body = {
    id
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
