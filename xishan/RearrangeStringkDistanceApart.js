/**
Given a non-empty string s and an integer k, rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

Example 1:
s = "aabbcc", k = 3

Result: "abcabc"

The same letters are at least distance 3 from each other.
Example 2:
s = "aaabc", k = 3

Answer: ""

It is not possible to rearrange the string.
Example 3:
s = "aaadbbcc", k = 2

Answer: "abacabcd"

Another possible answer is: "abcabcda"

The same letters are at least distance 2 from each other.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const rearrangeString = (s, k) => {
  const count = s.split('').reduce((result, c) => {
    result[c.charCodeAt() - 'a'.charCodeAt()]++;
    return result;
  }, Array(26).fill(0));
  const valid = Array(26).fill(0);
  let result = Array(s.legnth);
  for (let i = 0; i < s.length; i++) {
    let candidate = findValidMax(valid, count, i);
    if (candidate === -1) return '';
    count[candidate]--;
    valid[candidate] = i + k;
    result.push(String.fromCharCode('a'.charCodeAt() + candidate));
  }
  return result.join('');
};

const findValidMax = (valid, count, curIdx) => {
  let maxCount = Number.MIN_SAFE_INTEGER;
  let candidate = -1;
  for (let i = 0; i < count.length; i++) {
    if (count[i]> 0 && count[i] > maxCount && curIdx >= valid[i]) {
        candidate = i;
        maxCount = count[i];
    }
  }
  return candidate;
}

const s = 'aa';
const k = 2;
console.log(rearrangeString(s, k));
