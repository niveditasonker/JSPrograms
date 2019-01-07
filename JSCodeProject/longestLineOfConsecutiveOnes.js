var mat = [[0,1,1,0],
	 [0,1,1,0],
	 [0,0,0,1]];

var longestLine = function(M) {
    let n = M.length, max = 0;
    if (n == 0) return max;
    let m = M[0].length;
    let dp = [];
    for (let i=0;i<n;i++) {
    	if(!dp[i]) dp[i] = [];
        for (let j=0;j<m;j++) {
        	if(!dp[i][j]) dp[i][j] = [];
            if (M[i][j] == 0) continue;
            for (let k=0;k<4;k++) dp[i][j][k] = 1;
            if (j > 0 && M[i][j-1] == 1) dp[i][j][0] += dp[i][j-1][0]; // horizontal line
            if (j > 0 && i > 0 &&  M[i-1][j-1] == 1) dp[i][j][1] += dp[i-1][j-1][1]; // diagonal line
            if (i > 0 && M[i-1][j] == 1) dp[i][j][2] += dp[i-1][j][2]; // vertical line
            if (j < m-1 && i > 0 &&  M[i-1][j+1] == 1) dp[i][j][3] += dp[i-1][j+1][3]; // anti-diagonal line
            max = Math.max(max, Math.max(dp[i][j][0], dp[i][j][1]));
            max = Math.max(max, Math.max(dp[i][j][2], dp[i][j][3]));
        }
    }
    return max;
}

var longestLine2 = function(M) {
    if (!M) return 0;
    
    let max = 0;

    let colMap = {};
    let diagMap = {};
    let antiMap = {};
    
    // scan each row now
    for (let i = 0; i < M.length; i++) {
        let rowCount = 0;
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1) {
                rowCount += 1;
                colMap[`${i},${j}`] = ( colMap[`${i-1},${j}`] || 0 ) + 1;
                diagMap[`${i},${j}`] = ( diagMap[`${i-1},${j+1}`] || 0 ) + 1;
                antiMap[`${i},${j}`] = ( antiMap[`${i-1},${j-1}`] || 0 ) + 1;
                
                max = Math.max(max, rowCount, colMap[`${i},${j}`], diagMap[`${i},${j}`], antiMap[`${i},${j}`]);            
            } else {
                rowCount = 0;
            }
        }
    }
    
    return max;
    
    
};
console.log(longestLine(mat));
console.log(longestLine2(mat));