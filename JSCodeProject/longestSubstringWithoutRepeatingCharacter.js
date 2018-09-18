var input = "abcabcbb";
//var input = "bbbbb";
//var input = "pwwkew";
var input = "abcddabcbb";

var lengthOfLongestSubstring = function(s) {
    var res = [];
    var max = 0;
    
    for(var i=0;i<s.length;i++){
    	if(s.charAt(i) != s.charAt(i+1)){
    		if(res.indexOf((s.charAt(i))) == -1){
//    			console.log(s.charAt(i), s.charAt(i+1), i, count);
    			res.push(s.charAt(i));
    			max = Math.max(res.length,max);
    		}
    	}else{
    		res = [];
    	}
//    	console.log(res);
    }
//    console.log(max);
    return max;
};

console.log(lengthOfLongestSubstring(input));