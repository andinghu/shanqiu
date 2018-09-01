/**
Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.

Examples :

Input : X = "GeeksforGeeks", y = "GeeksQuiz"
Output : 5
The longest common substring is "Geeks" and is of
length 5.

Input : X = "abcdxyz", y = "xyzabcd"
Output : 4
The longest common substring is "abcd" and is of
length 4.

Input : X = "zxabcdezy", y = "yzabcdezx"
Output : 6
The longest common substring is "abcdez" and is of
length 6.
*/

const longestCommonStr = (a, b) => {
  let dp = Array(a.length).fill().map(() => Array(b.length).fill(0));
  let result = 0;
  for (let j = 0; j < b.length; j++) {
    dp[0][j] = (a[0] === b[j] ? 1 : 0);
  }
  for (let i = 0; i < a.length; i++) {
    dp[i][0] = (a[i] === b[0] ? 1 : 0);
  }
  for (let i = 1; i < a.length; i++) {
    for (let j = 1; j < b.length; j++) {
      if (a[i] === b[j]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
}

console.log(longestCommonStr('GeeksforGeeks', 'GeeksQuiz'));
