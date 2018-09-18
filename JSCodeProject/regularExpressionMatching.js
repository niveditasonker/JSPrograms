var str = "aa";
var pstr = "a*";

var isMatch = function(s, p) {
	var sLen = s.length;
	var pLen = p.length;
	
	var dp = [];
	
	for(var i=0; i<=sLen;i++){
		var temp = [];
		for(var j=0;j<=pLen;j++){
			temp.push(false);
		}
		dp.push(temp);
	}

	dp[0][0]=true;
	
	for(var i=0; i<=sLen;i++){
		for(var j=0;j<=pLen;j++){
			console.log("p1: "+p[j-1], s[i-1], i, j);
			if(p[j-1] != '.' && p[j-1] != '*'){
				if(i>0 && p[j-1] == s[i-1] && dp[i-1][j-1]){
					dp[i][j] = true;
				}
			}else if(p[j-1] == '.'){
				if(i>0 && dp[i-1][j-1]){
					dp[i][j] = true;
				}
			}else if(j>1){
				if(dp[i][j-2]){
					dp[i][j] = true;
				}else if(i > 0 && (p[j - 2] === s[i - 1] || p[j - 2] === '.') && dp[i - 1][j]) {
					dp[i][j] = true;
				}
			}
		}
	}
	
	return dp[sLen][pLen];

};


var reExpMatch = function(s,p){
	var sLen = s.length;
	var pLen = p.length;
	
	var dp = [];
	
	for(var i=0; i<=sLen;i++){
		var temp = [];
		for(var j=0;j<=pLen;j++){
			temp.push(false);
		}
		dp.push(temp);
	}

	dp[0][0]=true;
	
	for(var i=1;i<dp[0].length;i++){
		if(p[i-1] == '*'){
			dp[0][i] = dp[0][i-2];
		}
	}
	
	for(var i=1;i<dp.length;i++){
		for(var j=1;j<dp[0].length;j++){
			if(p[j-1] == s[i-1] || p[j-1] == '.'){
				dp[i][j] = dp[i-1][j-1];
			}else if(p[j-1] == '*'){
				dp[i][j] = dp[i][j-2];
				if(p[j-2] == '.' || p[j-2] == s[i-1]){
					dp[i][j] = dp[i][j]||dp[i-1][j];
				}
			}else{
				dp[i][j] = false;
			}
		}
	}
	return dp[sLen][pLen];
	
}
console.log(isMatch(str,pstr));
console.log(reExpMatch(str,pstr));