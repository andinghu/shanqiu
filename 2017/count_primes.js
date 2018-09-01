/**
Count the number of prime numbers less than a non-negative number, n.
*/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let isPrime = new Array(n).fill(true);
  for (let i = 2; i*i < n; i++) {
    if (!isPrime[i]) {
      continue;
    }
    for (let j = i*i; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
};

console.log(countPrimes(10));
