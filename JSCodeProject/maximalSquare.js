var mat = [
	[1,0,1,0,0],
	[1,0,1,1,1],
	[1,1,1,1,1],
	[1,0,0,1,0]
	];

var maximalSquare = function(matrix) {
	var dp = [];
	var ans = 0;
	
	for(var i=0;i<matrix.length;i++){
		var temp = Array(matrix[i].length).fill(0);
		dp.push(temp);
	}
	
    for(var x = 0; x < matrix.length; x++) {
        for(var y = 0; y < matrix[x].length; y++) {
            dp[x][y] = parseInt(matrix[x][y]);
            if(x && y && dp[x][y]) {
                dp[x][y] = Math.min(dp[x - 1][y - 1], dp[x - 1][y], dp[x][y - 1]) + 1;
            }
            
            ans = Math.max(ans, dp[x][y]);
        }
    }
    
//    return Math.pow(ans, 2); 
    return (ans*ans); 
}

console.log(maximalSquare(mat));