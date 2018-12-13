var expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1];

function Token(c,op,str){
	this.coefficient = c;
    this.operator = op;
    this.terms = [];
    if (str.length>0) terms.push(str);	
}

var basicCalculatorIV = function(expression, evalvars, evalints) {
    var map = new Map();
    var stack = [];
    var q = [];
    var calc = [];
    let i=0;
    
    for (i=0; i<evalvars.length; i++) map.put(evalvars[i], evalints[i]);
    
    i=0;
    while (i<expression.length()) {
        let c = expression.charAt(i);
        if (c == '(') {
        	var token = new Token(0, "(", "");
        	stack.push(token);
            i++;
        }else if (c == ')') {
            while (stack.length>0 &&  stack[stack.length-1] != '(') q.push(stack.pop());
            stack.pop();
            i++;
        } else if ((c=='+' || c=='-' || c=='*')) {
        	var token = new Token(0, ""+c, "");
        	 while (stack.length>0  && stack[stack.length-1] != '(' &&
                     !(stack[stack.length-1] == '+' || stack[stack.length-1] == '-') && c == '*') {
                  q.push(stack.pop());
              }
              stack.push(token);
              i++;
        }else if (c == ' ') {
            i++;
        } else {
            var coefficient = 1, j=i+1;
            var token = null;
            
            if (!isNaN(c)) {
            	while (j<expression.length() && !isNaN(expression.charAt(j))) j++;
            	coefficient = parseInt(expression.substring(i,j));
                token = new Token(coefficient, "", "");
            }else {
                // Else this is a variable
                while (j<expression.length && expression.charAt(j) >= 'a' && expression.charAt(j) <= 'z')
                    j++;
                
                // Check if we can swap with a number
                if (!map.has(expression.substring(i,j))) 
                    token = new Token(coefficient, "", expression.substring(i,j));
                else
                    token = new Token(map.get(expression.substring(i,j)), "", "");
            }
                            
            i=j;
            q.push(token);
        }
    }
    
    while (stack.length>0) q.push(stack.pop());
    
    while (q.length>0) {
    	var t = q.shift();
    	if (isOperator(t)) {
    		var op2 = calc.pop();
            var op1 = calc.pop();
    	}
    	if (t=="+") {
            op1.push(op2);
            calc.push(op1);
        } 
    }
};

function isOperator(t) {
    return t=="+" || t=="-" ||t=="*";
}