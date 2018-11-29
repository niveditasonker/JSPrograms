var str1 = "gksrek", str2 = "geeksforgeeks";
var s = "abc", t = "ahbgdc";
var s1 = "axc", t2 = "ahbgdc";

var isSubsequence = function(s, t) {
    var m = s.length;
    var n = t.length;

    var j=0;
    
    for(let i=0;i<n && j<m;i++){
    	if(s.charAt(j) == t.charAt(i))j++;
    }
    return(j==m);
   
};

console.log(isSubsequence(str1,str2));
console.log(isSubsequence(s,t));
console.log(isSubsequence(s1,t2));