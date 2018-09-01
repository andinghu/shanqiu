/**
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  let numMap = new Map();
  let result = 0;
  for (let num of nums) {
      if (numMap.has(num)) {
        continue;
      }

      let left = numMap.get(num - 1) || 0;
      let right = numMap.get(num + 1) || 0;
      let cur = left + right + 1;
      numMap.set(num, cur);
      numMap.set(num - left, cur);
      numMap.set(num + right, cur);
      result = Math.max(result, cur);
  }
  return result;
};
