/**
 abc9 < abc123
 abc > ab9
 char is more important than digit
*/

const isDigit = (c) => {
  return '0' <= c && c <= '9';
}

const naturalStringComparator = (s1, s2) => {
  let i = 0;
  let j = 0;
  while(i < s1.length && j < s2.length) {
      if (s1[i] === s2[j] && !isDigit(s1[i])) {
        i++;
        j++;
      } else {
        if (isDigit(s1[i]) && isDigit(s2[j])) {
          let num1 = 0;
          let num2 = 0;
          while(i < s1.length && isDigit(s1[i])) {
            num1 = num1*10 + (s1[i] - '0');
            i++;
          }
          while(j < s2.length && isDigit(s2[j])) {
            num2 = num2*10 + (s2[j] - '0');
            j++;
          }
          if (num1 < num2) {
            return -1;
          } else if (nu1 > num2) {
            return 1;
          }
        } else {
          if (isDigit(s1[i])) {
            return -1;
          } else if (isDigit(s2[j])) {
            return 1;
          } else {
            if (s1[i].charCodeAt() < s2[j].charCodeAt()) {
              return -1;
            } else {
              return 1;
            }
          }
        }
      }
  }
  if (i === s1.length && j === s2.length) {
    return 0;
  } else if ( i === s1.length) {
    return -1;
  } else {
    return 1;
  }
}



const s1 = 'abc9';
const s2 = 'abc123';
console.log(naturalStringComparator(s1, s2));
