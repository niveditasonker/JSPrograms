var inp = "3+2*2";

var calculate = function(s) {
    if(s.length==0 || s==null) return;
    s=s.replace(' ','');
    var stack=[];
    var num = 0;
    var sign = '+';
    
    for(i=0;i<s.length;i++){
    	var c = s.charAt(i);
    	if(!isNaN(c)){
    		num = num*10 + c - '0';
    	}
    	if(isNaN(c) || i==s.length-1){
    		 if(sign=='-'){
                 stack.push(-num);
             }
             if(sign=='+'){
                 stack.push(num);
             }
             if(sign=='*'){
                 stack.push(stack.pop()*num);
             }
             if(sign=='/'){
                 stack.push(stack.pop()/num);
             }
             sign = s.charAt(i);
             num = 0;
    	}
    }
    
    var re = 0;
    for(let i of stack){
        re += i;
    }
    return re;
};

console.log(calculate(inp));