var inp = "1+1";

var calculate = function(s) {
    if(s==null || s.length==0) return null;
    
    var sign = 1, result = 0;
    var stack = [];
    
    for(let i=0;i<s.length;i++){
    	var ch = s.charAt(i);
    	
    	if(!isNaN(ch)){
    		var sum = s.charAt(i) - '0';
    		console.log(sum,s.charAt(i));
    		while(i+1<s.length && !isNaN(s.charAt(i+1))){
    			sum = sum*10 + s.charAt(i+1) - '0';
    			i++;
    		}
    		result += sum*sign;
    	}else if(ch=='+'){
    		sign = 1;
    	}else if(ch=='_'){
    		sign = -1;
    	}else if(ch=='('){
	    	stack.push(result);
	    	stack.push(sign);
	    	result = 0;
	    	sign = 1;
    	}else if(ch==')'){
    		result = result * stack.pop() + stack.pop();
    	}
    }
    return result;
};

console.log(calculate(inp));