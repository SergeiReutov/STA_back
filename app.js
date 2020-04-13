const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const yahooFinance = require('yahoo-finance');

const app = new Koa();
const router = new Router();

router.get('/api/chartData/:symbol', async (ctx) => {
  await yahooFinance.historical({
    symbol: ctx.params.symbol,
    from: '2020-01-07',
    to: '2020-01-09',
    period: 'd'
  }, function (err, quotes) {
    console.log(err);
    console.log(quotes);
    ctx.body = quotes;
    return ctx;
  });
});

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
