var input = "12";
//var input = "226";

var numDecodings = function(s) {
    var n = s.length;
    var ways2 = 1;
    var ways1 = s.charAt(n-1) == '0' ? 0 : 1;
//    console.log(s.charAt(n-1),ways1,s,n);
    
    var curr = ways1;
    
    for(var i=n-2; i >= 0; i--){
        if (s.charAt(i) == '0') {
            curr = 0;
        }else{
//        	console.log(s.substring(i, i+2), i);
        	curr = parseInt(s.substring(i, i+2))<27 ? ways1+ways2 : ways1;
        }
        
//        console.log(curr);
        ways2 = ways1;
        ways1 = curr;
//        console.log(ways2, ways1);
    }
    
    return curr;
};


var numDecodings2 = function(s) {
	if(s == null || s.length == 0) return 0;
	var n = s.length;
	var dp = new Array(n+1);
	dp[n] = 1;
	
	for(var i=n-1;i>=0;i--){
		if(s.charAt(i) == '0'){
			dp[i] = 0;
		}else{
			dp[i] = dp[i+1];
			if((i+1 < s.length) && (s.charAt(i) == '1' || (s.charAt(i) == '2' && s.charAt(i) < '7'))){
				dp[i] += dp[i+2];
			}
		}
	}
	return dp[0];
}


var decodeWays3 = function(s) {
    var n = s.length;
     var dp = new Array(n+1);
      dp[0] = 1;
      if (s[0] == '0')
          dp[1] = 0;
      else
          dp[1] = 1;
      for (var i = 2; i < s.length + 1; i++){
          if (s[i - 1] > '0')
              dp[i] = dp[i - 1];
          if (s[i - 2] == '1' || s[i - 2] == '2' && s[i - 1] < '7')
             dp[i] += dp[i - 2]; 
      }
      return dp[s.length];
};





var decodeWays2 = function(s){
var n = s.length;
if(n==0) return 0;
var memo = new Array(n+1);

memo[n] = 1;
memo[n-1] = s.charAt(n-1) != '0' ? 1:0;

for(var i=n-2; i>= 0; i--){
  if(s.charAt(i)=='0') continue;
  else{
    memo[i] = s.charAt(i,i+1) <= 26 ? memo[i+1] + memo[i+2] : memo[i+1];
  }
}
return memo[0];

}
console.log(numDecodings(input));
console.log(numDecodings2(input));
console.log(decodeWays2(input));
console.log(decodeWays3(input));