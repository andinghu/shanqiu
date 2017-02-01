/**
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

For example,
Given words = ["oath","pea","eat","rain"] and board =

[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
Return ["eat","oath"].
*/

/**
solution: Build a trie and using dfs to solve it.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor(word) {
      this.word = word;
      this.next = new Array(26);
  }
}

const findWords = (board, words) => {
  let result = [];
  let root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, root, result);
    }
  }
  return result;
};

const dfs = (board, i, j, parent, result) => {
  console.log(i, j);
  let c = board[i][j];
  if (c === '#' || !parent.next[c.charCodeAt() - 'a'.charCodeAt()]) {
    return;
  }
  parent = parent.next[c.charCodeAt() - 'a'.charCodeAt()];
  if (parent.word) {
    result.push(parent.word);
    parent.word = null;
  }
  board[i][j] = '#';
  if (i > 0) dfs(board, i - 1, j, parent, result);
  if (j > 0) dfs(board, i, j - 1, parent, result);
  if (i < board.length - 1) dfs(board, i + 1, j, parent, result);
  if (j < board[0].length - 1) dfs(board, i, j + 1, parent, result);
  board[i][j] = c;
}

const buildTrie = (words) => {
  let root = new TrieNode();
  for (let w of words) {
    let parent = root;
    for (let c of w) {
      let idx = c.charCodeAt() - 'a'.charCodeAt();
      if (!parent.next[idx]) {
        parent.next[idx] = new TrieNode();
      }
      parent = parent.next[idx];
    }
    parent.word = w;
  }
  return root;
}

// const words = ["a", "oath","pea","eat","rain"];
// const board = [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ];
const words = ['acdb'];
const board = ['ab', 'cd'];
console.log(findWords(board, words));
