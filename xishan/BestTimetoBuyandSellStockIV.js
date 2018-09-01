/**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/
const maxProfit = (k, prices) => {
  let len = prices.length;
  let dp = Array(k+1).fill().map(() => Array(len).fill(0));
  for (let i = 1; i <= k; i++) {
    // tmpMax means the maximum profit of just doing at most i-1 transactions, using at most first j-1 prices, and buying the stock at price[j] - this is used for the next loop.
    let tmpMax = -prices[0];

    for (let j = 1; j < len; j++) {
      console.log(tmpMax);
      dp[i][j] = Math.max(dp[i][j - 1], tmpMax + prices[j]);
      tmpMax = Math.max(dp[i-1][j-1] - prices[j], tmpMax);
    }
  }
  return dp[k][len - 1];
}

// follow up: no limit k, but each transaction have fee
const maxProfixWithFee = (prices, fee) => {
  let len = prices.length;
  let dp = Array(len).fill().map(() => Array(len).fill(0));
  for (let i = 1; i < len; i++) {
    // tmpMax means the maximum profit of just doing at most i-1 transactions, using at most first j-1 prices, and buying the stock at price[j] - this is used for the next loop.
    let tmpMax = -prices[0];

    for (let j = 1; j < len; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], tmpMax + prices[j] - fee);
      tmpMax = Math.max(dp[i-1][j-1] - prices[j], tmpMax);
    }
  }
  console.log(dp);
  return dp[len - 1][len - 1];
}

const prices = [3, 1, 2, 6, 4, 6, 3];
const k = 2;
// console.log(maxProfit(k, prices));
console.log(maxProfixWithFee(prices, -2));
