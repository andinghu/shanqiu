/*
 Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

 Given word1 = “coding”, word2 = “practice”, return 3.
 Given word1 = "makes", word2 = "coding", return 1.

 Note:
 You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var pos1 = -1;
    var pos2 = -1;
    var res = words.length+1;
    for (var i = 1; i < words.length; i++) {
        if (words[i-1] == word1) {
            pos1 = i-1;
        }
        if (words[i-1] == word2) {
            pos2 = i-1;
        }
        if (words[i] == word1 && pos2 > -1) {
            res = Math.min(res, i-pos2);
        }
        if (words[i] == word2 && pos1 > -1) {
            res = Math.min(res, i-pos1);
        }
    }
    return res;
};

var words = ["a", "c", "b", "b", "a", "a", "makes"];
console.log(shortestDistance(words, "a", "a"));
