const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  const digits = (''+n).split('');
  let SumOfDigits = 0;
  for (i=0; i< digits.length; i++) {
      SumOfDigits = SumOfDigits +Number(digits[i]);}
  if (SumOfDigits >= 10) {
      const digits2 = (''+SumOfDigits).split('');
      let SumOfDigits2 = 0;
      for (i=0; i< digits2.length; i++) {
          SumOfDigits2 = SumOfDigits2 + Number(digits2[i]);}
      return SumOfDigits2;
  } else {
    return SumOfDigits;}
  }

module.exports = {
  getSumOfDigits
};
