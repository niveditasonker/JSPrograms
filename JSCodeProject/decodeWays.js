//var input = "12";
var input = "226";

var numDecodings = function(s) {
    var n = s.length;
    var ways2 = 1;
    var ways1 = s.charAt(n-1) == '0' ? 0 : 1;
    
    var curr = ways1;
    
    for(var i=n-2; i >= 0; i--){
        if (s.charAt(i) == '0') {
            curr = 0;
        }else{
        	curr = parseInt(s.substring(i, i+2))<27 ? ways1+ways2 : ways1;
        }
        
        console.log(curr);
        ways2 = ways1;
        ways1 = curr;
        console.log(ways2, ways1);
    }
    
    return curr;
};

console.log(numDecodings(input));