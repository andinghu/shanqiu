/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

const median = (A, B) => {
  let [m, n] = [A.length, B.length];
  if (m > n) {
    [A, B, m, n] = [B, A, n, m];
  }
  if (n === 0) {
    console.log('Wrong Input');
  }

  let [imin, imax, halfLen] = [0, m, Math.floor((m + n + 1) / 2)];
  while(imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    j = halfLen - i;
    if (i < m && B[j - 1] > A[i]) {
      imin = i + 1;
    } else if (i > 0 && A[i - 1] > B[j]) {
      imax = i - 1;
    } else {
      if (i === 0) {
        maxLeft = B[j - 1]
      } else if (j === 0) {
        maxLeft = A[i - 1]
      } else {
        maxLeft = Math.max(A[i-1], B[j-1])
      }
      if ((m + n) % 2 === 1) {
        return maxLeft;
      }

      if (i === m) {
        minRight = B[j];
      } else if (j === n) {
        minRight = A[i];
      } else {
        minRight = Math.min(A[i], B[j]);
      }

      return (maxLeft + minRight) / 2;
    }
  }
}

const A = [1, 3];
const B = [2, 4];
console.log(median(A, B));
