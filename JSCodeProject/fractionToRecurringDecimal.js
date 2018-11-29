//var numerator = 1, denominator = 2;
var numerator = 2, denominator = 3;

var fractionToDecimal = function(numerator, denominator) {
    var map, collections = '',result = '', rem;
    var map = [];
    
    if(numerator==0) return '0';
    if(denominator==0) return '';
    
    if((numerator > 0 && denominator < 0) && (numerator > 0 && denominator < 0)){
    	result += '-';
    }
    
     numerator = Math.abs(Number(numerator));
     denominator = Math.abs(Number(denominator));
     
     var quotient = Math.floor(numerator/denominator);
     result += quotient;
     
     var rem = (numerator % denominator) * 10;
     
     if (rem == 0) return result;
     
     result += '.';
     
     while(rem !=0){
    	 quotient = Math.floor(rem/denominator); 
    	 var idx = map.indexOf(rem); 
    	 if(idx==-1){
    		 map.push(rem);
    		 collections += quotient;
    	 }else{
    		 collections = collections.substr(0,idx) + '(' + collections.substr(idx) + ')';
    		 break;
    	 }
    	 
    	 rem = (rem%denominator)*10;
    	 result += collections;
     }
     
     return result;

};

console.log(fractionToDecimal(numerator,denominator));