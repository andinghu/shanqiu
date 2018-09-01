/**
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

/**
def countAndSay(self, n):
    s = '1'
    for _ in range(n - 1):
        s = ''.join(str(len(list(group))) + digit
                    for digit, group in itertools.groupby(s))
    return s
*/

const countAndSay = (n) => {
  const s = '111221';
  return s.split('').reduce((result, c) => {
    let ret = result[0];
    let prev = result[1];
    console.log(ret, prev);
    if (prev.length !== 0){
      if (prev[0] === c) {
        prev += c ;
      } else {
        ret.push(prev);
        prev = c;
      }
    } else {
      prev += c;
    }
    return [ret, prev];
  }, [[], ''])[0];
}

console.log(countAndSay(0))
