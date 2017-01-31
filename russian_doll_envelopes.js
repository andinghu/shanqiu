/**
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Example:
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/

/**
  solution: sort first and it become longest increasing subsequence size quesition
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {
  envelopes.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      };
  });
  let tails = []
  for (let i = 0; i < envelopes.length; i++) {
    let e = envelopes[i];
    let p = binarySearch(tails, e);
    console.log(e, p, tails);
    if (p === tails.length) {
      tails.push(e);
    } else {
      tails[p] = e;
    }
  }
  return tails.length;
};

const binarySearch = (arr, key) => {
  let left = 0;
  let right = arr.length;
  while(left < right) {
    let mid = Math.floor((right + left)/2);
    if (arr[mid][1] < key[1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}


const envelopes = [[4,5],[4,6],[6,7],[2,3],[1,1]];
console.log(maxEnvelopes(envelopes));
