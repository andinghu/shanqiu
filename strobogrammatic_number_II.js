/**
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

For example,
Given n = 2, return ["11","69","88","96"].
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  return helper(n, n);
};

const helper = (m, n) => {
  if (m === 0) {
    return [''];
  }
  if (m === 1) {
    return ['0', '1', '8'];
  }
  let result = [];
  let last = helper(m - 2, n);
  for (let num of last) {
    if (m !== n) {
      result.push('0' + num + '0');
    }
    result.push('1' + num + '1');
    result.push('6' + num + '9');
    result.push('8' + num + '8');
    result.push('9' + num + '6');
  }
  return result;
}

console.log(findStrobogrammatic(4));
