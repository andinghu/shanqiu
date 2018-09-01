/***
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples:
"123", 6 -> ["1+2+3", "1*2*3"]
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/

var addOperators = function(num, target) {
  let result = []
  let curPath = '';
  if (num === null || num.length === 0) return result;
  helper(num, target,result, curPath, 0, 0, 0);
  return result;
};

const helper = (num, target, result, curPath, pos, eval, multed) => {
  if (pos === num.length) {
    if (eval === target) {
      result.push(curPath);
    }
    return;
  }

  for (let i = pos; i < num.length; i++) {
    if(i != pos && num[pos] === '0') break;
    let cur = num.substring(pos, i+1) - '0';
    if (pos == 0){
      helper(num, target, result, curPath + cur, i + 1, cur, cur);
    } else {
      helper(num, target, result, curPath + '+' + cur, i + 1, eval + cur, cur);
      helper(num, target, result, curPath + '-' + cur, i + 1, eval - cur, -cur);
      helper(num, target, result, curPath + '*' + cur, i + 1, eval - multed + multed * cur, multed*cur );
    }
  }
}

const num = '123';
console.log(addOperators('000', 0));
