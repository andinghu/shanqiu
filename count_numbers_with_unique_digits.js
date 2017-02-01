/**
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
*/

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  let result = 10;
  let uniqueDigit = 9;
  let availableNumber = 9;
  while(n-- > 1 && availableNumber > 0) {
    uniqueDigit = uniqueDigit * availableNumber;
    result += uniqueDigit;
    availableNumber--;
  }
  return result;
};

console.log(countNumbersWithUniqueDigits(9));
