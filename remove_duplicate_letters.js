/**
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example:
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let countMap = new Array(256).fill(0);
    let visited = new Array(256).fill(false);
    let result = [];
    for (let c of s) {
      countMap[c.charCodeAt()]++;
    }
    for (let c of s) {
      countMap[c.charCodeAt()]--;
      if (visited[c.charCodeAt()]) {
        continue;
      }
      while(result.length !== 0 &&
        result[result.length - 1].charCodeAt() > c.charCodeAt() &&
        countMap[result[result.length - 1].charCodeAt()] !== 0) {
        visited[result[result.length - 1].charCodeAt()] = false;
        result.pop();
      }
      result.push(c);
      visited[c.charCodeAt()] = true;
    }

    return result.join('');
};


console.log(removeDuplicateLetters('cbacdcbc'));
