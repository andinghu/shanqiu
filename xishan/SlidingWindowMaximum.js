/**
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note:
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?

Hint:

How about using a data structure such as deque (double-ended queue)?
The queue size need not be the same as the window’s size.
Remove redundant elements and the queue should store only elements that need to be considered.
*/

const maxSlidingWindow = (nums, k) => {
  if (nums === null || k <= 0) {
    return [];
  }
  let n = nums.length;
  let result = Array(n - k + 1);
  let rIdx = 0;
  let queue = []; // store index
  for (let i = 0; i < nums.length; i++) {
    console.log('i: ', i);
    console.log('start queue: ', queue);
    while(queue.length !== 0 && queue[0] < i - k + 1) {
      console.log('remove out of range: ', 0, i - k + 1);
      queue.shift();
    }
    while(queue.length !== 0 && nums[queue[queue.length - 1]] < nums[i]) {
      console.log('remove small: ', queue[queue.length - 1], i);
      queue.pop();
    }
    queue.push(i);
    if (i >= k - 1) {
      result[rIdx++] = nums[queue[0]];
    }
    console.log('end queue: ', queue);
    console.log('result: ', result);
    console.log('');
  }
  return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maxSlidingWindow(nums, 3));
