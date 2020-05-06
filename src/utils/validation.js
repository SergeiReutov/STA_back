const R = require('ramda');

const symbolRegex = /^[A-Z]+$/;

const lengthIsLessOrEqualTo = R.curry((minLength, str) => R.lte(
  str.length,
  minLength
));

const containsOnlyAllowedChars = R.curry((regex, str) => R.test(regex, str));

module.exports = {
  isSymbolValid: R.allPass([
    lengthIsLessOrEqualTo(5),
    containsOnlyAllowedChars(symbolRegex)
  ])
};
