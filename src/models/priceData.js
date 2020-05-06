import yahooFinance from 'yahoo-finance';
import moment from 'moment';
import R from 'ramda';

export const fetchPriceData = async symbol => await yahooFinance.historical({
  symbol,
  from: moment().subtract(12, 'months').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD')
});

export const handlePriceData = R.compose(
  R.sortBy(R.prop('date'))
);
