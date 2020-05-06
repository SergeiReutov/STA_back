const Router = require('koa-router');
const yahooFinance = require('yahoo-finance');
const isSymbolValid = require('../utils/validation').isSymbolValid;

const chartRouter = new Router();

chartRouter
  .param('symbol', (symbol, ctx, next) => {
    if (!isSymbolValid(symbol)) {
      ctx.throw(400, 'Requested symbol is invalid!');
    }
    ctx.symbol = symbol;
    return next();
  })
  .get('/:symbol', async ctx => {
    const quotes = await yahooFinance.quote(ctx.symbol);
    ctx.body = quotes;
  });

module.exports = chartRouter;
