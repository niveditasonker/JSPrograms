var minPathSum = function(grid) {
    var rowlen = grid.length;
    var collen = grid[0].length;
    var dp = [];
    for (var i=0; i<rowlen; i++) {
        dp.push([]);
        for (var j=0; j<collen; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
                continue;
            }
            if (i === 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j];
                continue;
            }

            if (j === 0) {
                dp[i][j] =  dp[i-1][j] + grid[i][j];
                continue;
            }
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[i-1][j-1];
};

var mat = [
	  [1,3,1],
	  [1,5,1],
	  [4,2,1]
	];

console.log(minPathSum(mat));