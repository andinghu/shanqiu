/**
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

// DFS solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
    let result = [];
    return traverse(root, result).join(',');
};

const traverse = (root, result) => {
    if (root === null) {
        result.push(root);
        return result;
    }
    result.push(root.val);
    result.concat(traverse(root.left, result));
    result.concat(traverse(root.right, result));
    return result;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
    return dfs(data.split(','), [0]);
};

const dfs = (data, index) => {
    if (data[index[0]] === '') {
        index[0]++;
        return null;
    }

    let curNode = new TreeNode(data[index[0]] - '0');
    index[0]++;
    curNode.left = dfs(data, index);
    curNode.right = dfs(data, index);
    return curNode;
}


[ 1, 2, 3, null, null, 4, 5, null, null, null, null ]
