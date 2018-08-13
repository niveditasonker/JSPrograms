var minWindow = function(S, T) { 
/*
	var m = T.length, n = S.length;
    var dp = [[]];
    for (var j = 0; j <= n; j++) {
        dp[0][j] = j + 1;
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (T.charAt(i - 1) == S.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
            	console.log(i,j,dp[i][j-1]);
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    var start = 0, len = n + 1;
    for (var j = 1; j <= n; j++) {
        if (dp[m][j] != 0) {
            if (j - dp[m][j] + 1 < len) {
                start = dp[m][j] - 1;
                len = j - dp[m][j] + 1;
            }
        }
    }
    return len == n + 1 ? "" : S.substring(start, start + len);
    
*/    
    
    var m = S.length, n = T.length, start = -1, minLen = Number.MAX_SAFE_INTEGER, i = 0, j = 0;
    while (i < m) {
        if (S[i] == T[j]) {
            if (++j == n) {
                var end = i + 1;
                while (--j >= 0) {
                    while (S[i--] != T[j]);
                }
                ++i; ++j;
                if (end - i < minLen) {
                    minLen = end - i;
                    start = i;
                }
            }
        }
        ++i;
    }
    return (start != -1) ? S.substr(start, minLen) : "";
    
}

var str = "abcdebdde";
var tstr = "bde";
console.log(minWindow(str,tstr));

//http://massivealgorithms.blogspot.com/2018/05/leetcode-727-minimum-window-subsequence.html
