var inp = [1,3,4];
var inp = [1,4,9];

var plusOne = function(digits) {
    var len = digits.length; var overflow = 1;
    
    for(var i=len-1;i>=0;i--){
    	digits[i] = digits[i] + overflow;
    	
    	if(digits[i]==10){
    		overflow = 1;
    		digits[i] = 0;
    	}else{
    		return digits;
    	}
    }
    
    if(overflow == 1){
    	digits.unshift(1);
    	return digits;
    }
};

console.log(plusOne(inp));