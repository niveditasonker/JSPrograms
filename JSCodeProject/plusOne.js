var inp1 = [1,3,4];
var inp2 = [1,4,9];
var inp3 = [9,9,9];
var inp4 = [5,7,9];

var plusOne2 = function(digits) {
    i = digits.length-1;
    let sum = 0, carry = 0;
    var res = [];
    let addOne = 1;
    
    while(i>-1){
        sum = addOne + digits[i] + carry;
        addOne = 0;
        
        carry = (sum >=10) ? 1:0;
        sum = sum % 10;
        res[i] = sum;
        sum = 0;
        i--;
    }
    
    if(carry){
        res.unshift(carry);
    }
    
    return res;
};

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

console.log(plusOne2(inp1));
console.log(plusOne2(inp2));

console.log(plusOne2(inp3));
console.log(plusOne2(inp4));



var arr1 = [1,3,4];
var arr2 = [1,4,9];
var arr3 = [9,9,9];
var arr4 = [5,7,9];


console.log(plusOne(arr1));
console.log(plusOne(arr2));

console.log(plusOne(arr3));
console.log(plusOne(arr4));