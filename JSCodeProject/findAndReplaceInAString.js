/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
    let deltas = [];

  // this can be replaced with _.zip if lodash is allowed
    for (let i = 0; i < indexes.length; i++) {
      deltas.push([indexes[i], sources[i], targets[i]]);
    }
    // console.log(deltas);
    deltas.sort((a, b) => b[0] - a[0]); // this allows right to left replacement
    // console.log(deltas);
    for (let [index, source, target] of deltas) {
        console.log(S.substring(index, index + source.length), source)
        if (S.substring(index, index + source.length) === source) {
          S = S.substring(0, index) + target + S.substring(index + source.length);
        }
    }

  return S;    
};

console.log(findReplaceString("abcd",[0,2],["a","cd"],["eee","ffff"]));

//https://leetcode.com/problems/find-and-replace-in-string/discuss/202673/My-JavaScript-Solution