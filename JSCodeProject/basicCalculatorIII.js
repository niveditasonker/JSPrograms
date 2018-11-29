var exp = "2 *(5+5*2)/3+(6/2+8)";

var calculate = function(s) {
    var i=0;
    var stack = [];
    var res = 0;
    var sign = '+';
    
    s = s.replace(' ','');
    while(i<s.length){
    	let c = s.charAt(i);
    	
    	if(c === '('){
    		let block = 1;
    		let idx = i+1;
    		while(idx<s.length && block > 0){
    			if(s[idx] === '(') block++;
    			else if(s[idx] === ')') block--;
    			idx++;
    		}
    		
    		let innerBlock = calculate(s.substring(i+1,idx-1));
    		i=idx;
    		operations(innerBlock,sign,stack);
    		
    	}else if(c.match(/\d/)){
    		let idx = i;
    		let num = 0;
    		while(idx<s.length && s[idx].match(/\d/)){
    			num = num*10+parseInt(s[idx++]);
    		}
    		i = idx;
    		operations(num,sign,stack);
    	}else{
    		sign = c;
    		i++;
    	}
    }
    function operations(ib,sg,stack){
    	if(sg == '+'){
    		stack.push(ib);
    	}else if(sg=='-'){
    		stack.push(-ib);
    	}else if(sg=='*'){
    		stack.push(stack.pop()*ib);
    	}else if(sg=='/'){
    		stack.push(stack.pop()/ib);
    	}
    }
    
    while(stack.length>0){
    	res += stack.pop();
    }
    
    return Math.floor(res);
};



console.log(calculate(exp));
