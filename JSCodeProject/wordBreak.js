var input = "leetcode";

var dict = ["leet","code"];

var wordBreak = function(s, wordDict) {
    
    var found = new Array(s.length-1).fill(false);
    found[0] = true;
    
    for(var i=1;i<=s.length;i++){
    	for(var j=0;j<i;j++){
    		if(found[j] && wordDict.includes(s.substring(j,i))){
    			console.log(i,j,found[j],found[i],s.substr(j,i));
    			found[i] = true;
    			break;
    		}
    	}
    }
    
    return found[s.length];

};

var wordBreakBacktrack = function(s, wordDict) {
    
    var found = new Array(s.length-1).fill(false);
//    found[0] = true;
    return backtrack(0,s,wordDict,found);
}

var backtrack = function(start,str,dict,dp){
	if(start==str.length) return true;
	
	for(var i=start;i<=str.length;i++){
		if(!dp[i-1] && dict.includes(str.substring(start,i))){
			dp[i-1] = true;
			if(backtrack(i,str,dict,dp)){
				return true;
			}
		}
	}
	return false;
}

console.log(wordBreak(input, dict));
console.log(wordBreakBacktrack(input, dict));