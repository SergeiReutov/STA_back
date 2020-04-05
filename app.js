const Koa = require('koa');
const Router = require('koa-router');
const yahooFinance = require('yahoo-finance');

const app = new Koa();
const router = new Router();

router.get('/stock/:symbol', async (ctx) => {
  await yahooFinance.historical({
    symbol: ctx.params.symbol,
    from: '2020-01-07',
    to: '2020-01-09',
    period: 'd'
  }, function (err, quotes) {
    ctx.body = {
      err,
      quotes
    };
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
