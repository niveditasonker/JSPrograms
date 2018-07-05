//var dividend = 10;
//var divisor = 3;

var dividend = 7;
var divisor = -3;

var divide = function(dividend, divisor) {
    var isDiff = false;
    
    if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ){
    	isDiff = true;
    }
    
    var d1 = Math.abs(dividend);
    var d2 = Math.abs(divisor);
    var absDivisor = d2;
    var incr = 1;
    var res = 0;
    
    while(d1 >= d2){
    	d1 -= d2;
    	res += incr;
    	
    	d2 <<= 1;
    	incr <<= 1;
    	
    	while(d1 < d2 && d2 > absDivisor){
    		d2 >>= 1;
    		incr >>= 1;
    	}
    }
    
    if(res > Number.MAX_VALUE){
    	return isDiff ? Number.MIN_VALUE : Number.MAX_VALUE;
    }
    return isDiff ? 0 - parseInt(res) : parseInt(res);
};

console.log(divide(dividend,divisor));