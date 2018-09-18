var input = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
	if(strs.length == 0 ) return "";
	var prefix = strs[0];
	
	for(var i=1;i<strs.length;i++){
		while (strs[i].indexOf(prefix) != 0) {
			 prefix = prefix.substring(0, prefix.length - 1);
	         if (prefix=="") return "";			
		}
	}
	
	return prefix;
}


var longestCommonPrefix2 = function(strs) {
    var len = strs.length,
        len1,
        curChar,
        i,
        j;
    
    if (len === 0) {
        return '';
    }
    
    len1 = strs[0].length;
    for (i = 0; i < len1; i++) {
        curChar = strs[0].charAt(i);
        for (j = 1; j < len; j++) {
            if (strs[j].charAt(i) !== curChar) {
                return i === 0? '' : strs[0].substr(0, i);
            }
            
            if (strs[j].length === i) {
                return strs[j];
            }
        }
    }
    
    return strs[0];
};

var longestCommonPrefixDivideAndConquer = function(strs) {
	if(strs == null ||strs.length == 0 ) return "";
//	console.log(strs.length-1);
	return divideLCP(strs,0,strs.length-1);
	
}

var divideLCP = function(str,left,right){
	console.log(left,right);
	if(left==right) return str[left];
	else{
		console.log(left,mid,right);
		var mid = parseInt(left+right)/2;
		var lcpLeft = divideLCP(str,left,mid);
		var lcpRight = divideLCP(str,mid+1,right);
		return commonStr(leftLCP, rightLCP);
	}
}

var commonStr = function(left,right){
	var min = Math.min(left.length,right.length);
	
	for(var i=0;i<min;i++){
		if(left.charAt(i)!=right.charAt(i)) return left.substring(0,i);
	}
	return left.substring(0,min);
}

console.log(longestCommonPrefix(input));
console.log(longestCommonPrefix2(input));
//console.log(longestCommonPrefixDivideAndConquer(input));