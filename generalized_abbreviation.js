/**
Write a function to generate the generalized abbreviations of a word.

Example:
Given word = "word", return the following list (order does not matter):
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
*/

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  let result = new Array();
  backtrack(result, word, 0, '', 0);
  return result;
};

const backtrack = (result, word, pos, cur, count) => {
  if (pos === word.length) {
    if (count > 0) {
      cur += count;
    }
    result.push(cur);
  } else {
    backtrack(result, word, pos + 1, cur, count + 1);
    backtrack(result, word, pos + 1, cur + (count > 0 ? count : '') + word.charAt(pos), 0);
  }
}

console.log(generateAbbreviations('word'));
