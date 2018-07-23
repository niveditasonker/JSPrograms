var str = "235*+8-";
//var str = "23*+";

console.log(evaluatePostFix(str));

function evaluatePostFix(exp){
	var stack = [];
	
	for(var i=0;i<exp.length;i++){
		
		var c = exp.charAt(i);
		if(!isNaN(c)){
			console.log(c - '0',c);
			stack.push(c-'0');
//			console.log(stack);
		}else{
			var val1 = stack.pop();
			var val2 = stack.pop();
			if(val1 == null || val2 == null){
				return "Can't peform the operation";
			
			}
			switch(c){
				case '+':
					stack.push(val2+val1);
					break;
				case '-':
					stack.push(val2-val1);
					break;
				case '*':
					stack.push(val2*val1);
					break;
				case '/':
					stack.push(val2/val1);
					break;

			}
				
			
		}
		
	}
	return stack.pop(); 
}

//var prefixStr = "+9*26";
//var prefixStr = "+9/26";
//var prefixStr = "+9/26";
var prefixStr = "-+8/632";
//var arr = evaluatePrefix(prefixStr)
//console.log(evaluatePrefix(prefixStr));

function evaluatePrefix(exp){
	
	var stack = [];
	for(var i=exp.length-1; i>=0;i--){
		var c = exp.charAt(i);
		if(!isNaN(c)){
			stack.push(c-'0');
		}else{
			
			var val1 = stack.pop();
			var val2 = stack.pop();
			if(val1 == null || val2 == null){
				return "Can't peform the operation";
			
			}
			switch(c){
				case '+':
					stack.push(val2+val1);
					break;
				case '-':
					stack.push(val2-val1);
					break;
				case '*':
					stack.push(val2*val1);
					break;
				case '/':
					stack.push(val2/val1);
					break;

			}
			
			
		}
	}
	return stack.pop();
}