const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const yahooFinance = require('yahoo-finance');
const R = require('ramda');
const moment = require('moment');

const app = new Koa();
const router = new Router();

router.get('/api/chartData/:symbol', async (ctx) => {
  await yahooFinance.historical({
    symbol: ctx.params.symbol,
    from: moment().subtract(2, 'years').format('YYYY-MM-DD'),
    to: moment().format('YYYY-MM-DD'),
    period: 'd'
  }, function (err, quotes) {
    ctx.body = R.sort(
      (a, b) => moment(b.date).isBefore(moment(a.date)) ? 1 : -1,
      quotes
    );
    return ctx;
  });
});

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
