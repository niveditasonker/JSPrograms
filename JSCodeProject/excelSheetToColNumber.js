var str = "ZY";

var titleToNumber = function(s) {
    var sum = 0;
    
//    console.log('A'.charCodeAt());
    for(var i=0;i<s.length;i++){
    	sum = (sum * 26) + (s.charCodeAt(i)-('A'.charCodeAt(0)-1));
//    	sum = (sum * 26) + (s.charCodeAt(i)-64);
    }
    return sum;
};

var titleToNumber2 = function(s) {
    var total = 0;
    var len = s.length;
    var base = 26;
    
    for(var i = 0; i < len; i++){
        var pow = len - i - 1;
        var num = getNumber(s[i]);
        
        total += Math.pow(base,pow)*num;
    }
    
    return total;
};

var getNumber = function(c){
    var charCodeOfA = 'A'.charCodeAt(0);
    var charCodeOfTarget = c.charCodeAt(0);
    
    return charCodeOfTarget - charCodeOfA + 1;
};

console.log(titleToNumber(str));
console.log(titleToNumber2(str));