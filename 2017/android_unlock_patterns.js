/**
Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.

Rules for a valid pattern:
Each pattern must connect at least m keys and at most n keys.
All the keys must be distinct.
If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
The order of keys used matters.

Invalid move: 4 - 1 - 3 - 6
Line 1 - 3 passes through key 2 which had not been selected in the pattern.

Invalid move: 4 - 1 - 9 - 2
Line 1 - 9 passes through key 5 which had not been selected in the pattern.

Valid move: 2 - 4 - 1 - 3 - 6
Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern

Valid move: 6 - 5 - 4 - 1 - 9 - 2
Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.

Example:
Given m = 1, n = 1, return 9.
*/

/**
Solution:
used is the 9-bit bitmask telling which keys have already been used and (i1,j1) and (i2,j2) are the previous two key coordinates. A step is valid if...

I % 2: It goes to a neighbor row or
J % 2: It goes to a neighbor column or
used2 & (1 << (I/2*3 + J/2))): The key in the middle of the step has already been used.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
    return count(m, n, 0, 1, 1);
};

const count = (m, n, used, i1, j1) => {
  let result = m <= 0 ? 1 : 0;
  if (n === 0) return 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let I = i1 + i;
      let J = j1 + j;
      let used2 = used | (1 << (i*3 + j));
      if (used2 > used && (I%2 || J%2 || used2 & (Math.floor(I / 2) * 3 + Math.floor(J / 2)))) {
        result += count(m - 1, n - 1, used2, i, j);
      }
    }
  }
  return result;
}

console.log(numberOfPatterns(1, 2));
