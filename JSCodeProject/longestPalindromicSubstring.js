var str = "babad";

function longestSubPalindromeDP(s){
	if(s.length == 0 || s == null){
		return;
	}
	
	var sLen = s.length;
	var resStr = "";
	var dp = [];
	for(var i=0; i<=sLen;i++){
		var temp = [];
		for(var j=0;j<=sLen;j++){
			temp.push(false);
		}
		dp.push(temp);
	}
	console.log(dp);
	
	for(var i=0;i<sLen;i++){
		for(var j=i;j>=0;j--){
//			console.log("i,j ",i,j,s.charAt(i),s.charAt(j));
			dp[i][j]=s.charAt(i)==s.charAt(j)&&(i-j<3||dp[i-1][j+1]);
			console.log("dp ",dp[i][j]);
			
			if(dp[i][j]&&(resStr==null||i-j+1>resStr.length)){
				
				resStr = s.substring(j,i+1);
			}
		}
	}
	return resStr;
	
}

var ans = "";
function longestSubPalindrome(s){

	
	if(s.length == 0|| s==null){
		return;
	}
	
	for(var i=0;i<s.length;i++){
		chkPalindrome(s,i,i);
		chkPalindrome(s,i,i+1);
	}
	return ans;
}

function chkPalindrome (s, start, end){
	console.log(start,end,s[start],s[end]);
		
	while(start>=0 && end <s.length && s[start] === s[end]){
		start--;
		end++;
	}
		
	console.log("start-end: ",start,end);
		
	var curr = s.substring(start+1,end);
		
	console.log("Curr: "+ curr,ans);
	if(curr.length > ans.length){
		ans = curr.slice();
	}

}


//console.log(longestSubPalindromeDP(str));
console.log(longestSubPalindrome(str));