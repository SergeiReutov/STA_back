import Router from 'koa-router';
import { fetchPriceData, handlePriceData } from '../models/priceData.js';
import { isSymbolValid } from '../utils/validation.js';

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
    const priceData = await fetchPriceData(ctx.symbol);
    ctx.body = handlePriceData(priceData);
  });

export default chartRouter;
