/**
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.
*/
/**
 * @param {string} s
 * @return {number}
 */
 const numDecodings = (message) => {
   if (!message || message.length === 0) {
     return 0;
   }
   let lastTwo = 1;
   let last = message[0] === '0' ? 0 : 1;
   let cur = 0;
   for (let i = 2; i <= message.length; i++) {
     let oneDigit = message.substring(i-1, i) - '0';
     let twoDigit = message.substring(i-2, i) - '0';
     if (0 < oneDigit && oneDigit <= 9) {
       cur += last;
     }
     if (10 <= twoDigit && twoDigit <= 26) {
       cur += lastTwo;
     }
     lastTwo = last;
     last = cur;
     cur = 0;
   }
   return last;
 }


// console.log(numDecodings(''));
// console.log(numDecodings('0'));
// console.log(numDecodings('1200'));
// console.log(numDecodings('001'));
// console.log(numDecodings('1001'));
console.log(numDecodings('1233415123'));
