const Router = require('koa-router');
const yahooFinance = require('yahoo-finance');

const chartRouter = new Router();

chartRouter
  .param('symbol', (symbol, ctx, next) => {
    ctx.symbol = symbol;
    return next();
  })
  .get('/:symbol', async (ctx) => {
    const quotes = await yahooFinance.quote(ctx.params.symbol);
    ctx.body = quotes;
  });

module.exports = chartRouter;
