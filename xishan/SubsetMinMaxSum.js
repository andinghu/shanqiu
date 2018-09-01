// 第二题是给一个set，求有多少个subsets，里面的min和max之和小于k。如果里面就有一个数，自己跟自己相加

const subsetMinMaxSum = (set, k) => {
  let subsets = [];
  let arr = Array.from(set);
  getSubsets(arr, subsets, [], 0);
  return subsets.filter(subset => ((Math.min.apply(null, subset) + Math.max.apply(null, subset)) < k));
}

const getSubsets = (arr, subsets, path, idx) => {
    subsets.push(path.slice());
    for (let i = idx; i< arr.length; i++) {
      path.push(arr[i]);
      getSubsets(arr, subsets, path, ++idx);
      path.pop();
    }
}

const set = new Set([1, 2]);
console.log(subsetMinMaxSum(set, 3));
