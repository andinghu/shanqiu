/**
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

For example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
*/

/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor(val) {
    this.val = val;
    this.hasWord = false;
    this.next = Array(26).fill(0);
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode('');
  }

  /**
   * Adds a word into the data structure.
   * @param {string} word
   * @return {void}
   */
  addWord (word) {
    let pointer = this.root;
    for (let i = 0; i < word.length; i++) {
      let curCharIdx = word[i].charCodeAt() - 'a'.charCodeAt();
      if (!pointer.next[curCharIdx]) {
        pointer.next[curCharIdx] = new TrieNode(word[i]);
      }
      pointer = pointer.next[curCharIdx];
    }
    pointer.hasWord = true;
  };

  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
   * @param {string} word
   * @return {boolean}
   */
  search (word) {
    return this.dfs(word, this.root);
  };

  dfs (word, curHead) {
    if (!curHead) {
      return false;
    }
    if (word === '') {
      return curHead && curHead.hasWord;
    }
    if (word[0] === '.') {
      for (let i = 0; i < curHead.next.length; i++) {
        if (curHead.next[i] !== 0) {
          if (this.dfs(word.slice(1), curHead.next[i])) {
            return true;
          }
        }
      }
    }

    // TODO: * cases
    // if (word[0] === '*') {
    //   if (word.length === 1) return true;
    //   while(!!curHead) {
    //     if (curHead.next.reduce((sum, idx) => sum + idx, 0) === 0) {
    //       return false;
    //     }
    //     for (let i = 0; i < curHead.next.length; i++) {
    //       if (this.dfs(word.slice(1), curHead.next[i]) || this.dfs(word, curHead.next[i])) {
    //         return true;
    //       }
    //     }
    //   }
    // }
    return this.dfs(word.slice(1), curHead.next[word[0].charCodeAt() - 'a'.charCodeAt()]);
  }
};

const dict = new WordDictionary();
dict.addWord('hello');
dict.addWord('world');
console.log(dict.search('he.lo'));
console.log(dict.search('wo*o'));
