/**
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

For example:

Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

const validTree = (n, edges) => {
  let graphMap = new Map();
  for (let i = 0; i < n; i++) {
    graphMap.set(i, new Node(i));
  }
  for (let edge of edges) {
    graphMap.get(edge[0]).neighbors.push(edge[1]);
    graphMap.get(edge[1]).neighbors.push(edge[0]);
  }
  console.log(graphMap)
  let visited = Array(n).fill(false);
  if (hasCycle(graphMap, 0, visited, -1)) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      return false;
    }
  }

  return true;
};

const hasCycle = (graphMap, cur, visited, parent) => {
  visited[cur] = true;
  for (let neighbor of graphMap.get(cur).neighbors) {
    let next = graphMap.get(neighbor);
    if (
      (visited[next.val] && parent !== next.val) ||
      !visited[next.val] && hasCycle(graphMap, next.val, visited, cur)
    ) {
      return true;
    }
  }
  return false;
}

const edges = [[0,1],[0,2],[2,3],[2,4]];
console.log(validTree(5, edges));
