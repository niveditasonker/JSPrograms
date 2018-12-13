/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix == null || !matrix.length || !matrix[0].length) return 0;

    const row = matrix.length;
    const col = matrix[0].length;

    const cache = new Array(row);
    for (let i = 0; i < row; ++i) {
    	cache[i] = new Array(col);
    }

    let ans = 0;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            ans = Math.max(ans, helper(matrix, cache, -1, i, j));
        }
    }

    return ans;    
};

function helper(matrix, cache, prev, row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
        return 0;
    }

    let curr = matrix[row][col];

    if (curr <= prev) return 0;

    if (cache[row][col]) {
        return cache[row][col];
    }

    let a = 1 + helper(matrix, cache, curr, row + 1, col);
    let b = 1 + helper(matrix, cache, curr, row - 1, col);
    let c = 1 + helper(matrix, cache, curr, row, col + 1);
    let d = 1 + helper(matrix, cache, curr, row, col - 1);

    let max = Math.max(a, Math.max(b, Math.max(c, d)));

    cache[row][col] = max;

    return max;
}

var inp = [
	  [9,9,4],
	  [6,6,8],
	  [2,1,1]
	] ;
console.log(longestIncreasingPath(inp));