var str = "xaylmz";
var pattern = "x?y*z";

var str = "aa";
var pattern = "a";

var str = "aa";
var pattern = "*";

var str = "cb";
var pattern = "?a";

var str = "adceb";
var pattern = "*a*b";

//var str = "acdcb";
//var pattern = "a*c?b";

//var pattern = "a**b***c";

function isMatch(s,p){
	var sLen = s.length;
	var pLen = p.length;
	var writeIdx = 0;
	
	var isFirst = true;
	
	for(var j=0;j<pLen;j++){
		if(p[j] == '*'){
			if(isFirst){
				p[writeIdx++] = p[j];
				isFirst = false;
			}
		}else{
			p[writeIdx++] = p[j];
			isFirst = true;
		}
	}
	
	console.log(writeIdx,p);

	var dp = [];

	for(var i=0;i<=sLen;i++){
		var temp = [];
		for(var j=0;j<=pLen;j++){
			temp.push(false);
		}
		dp.push(temp);
	}
	
	if(writeIdx > 0 && p[0] == '*'){
		dp[0][1]=true;
	}
	
	dp[0][0]=true;
	
	for(var i=1;i<dp.length;i++){
		for(var j=1;j<dp[0].length;j++){
			if(p[j-1] == '?' || s[i-1] == p[j-1]){
				dp[i][j] = dp[i-1][j-1];
			}else if(pattern[j-1] == '*'){
				dp[i][j] = dp[i-1][j] || dp[i][j-1];
			}
		}
	}
	console.log(dp);
	return dp[sLen][writeIdx];
}

console.log(isMatch(str,pattern));