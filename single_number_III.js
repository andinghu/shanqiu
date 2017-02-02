/**
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

var singleNumber = function(nums) {
  var t = nums.reduce((t, n) => t ^ n, 0);
  t = -t & t;
  return nums.reduce((r, n) => (n & t) ? [r[0] ^ n, r[1]] : [r[0], r[1] ^ n], [0, 0]);
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
