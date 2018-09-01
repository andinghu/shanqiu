/**
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

Given numerator = 1, denominator = 2, return "0.5".
Given numerator = 2, denominator = 1, return "2".
Given numerator = 2, denominator = 3, return "0.(6)".
Hint:

No scary math, just apply elementary math knowledge. Still remember how to perform a long division?
Try a long division on 4/9, the repeating part is obvious. Now try 4/333. Do you see a pattern?
Be wary of edge cases! List out as many test cases as you can think of and test your code thoroughly.
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return '0';
  let result = '';
  result += ((numerator > 0) ^ (denominator > 0)) ? '-' : '';
  let num = Math.abs(numerator);
  let den = Math.abs(denominator);

  result += Math.floor(num/den);
  num %= den;
  if (num === 0) {
    return result;
  }
  result += '.'
  let m = new Map();
  m.set(num, result.length);
  while(num !== 0) {
    console.log(num, den);
    num *= 10;
    result += Math.floor(num/den);
    num %= den;
    if (m.has(num)) {
      let idx = m.get(num);
      result = result.slice(0, idx) + '(' + result.slice(idx);
      result += ')';
      break;
    } else {
      m.set(num, result.length);
    }
  }
  return result;
};

console.log(fractionToDecimal(6, 19));
