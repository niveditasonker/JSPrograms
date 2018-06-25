//var arr = ["2", "1", "+", "3", "*"];
//var arr = ["4", "13", "5", "/", "+"];
var arr = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
var str = "";

console.log(evaluate(arr));
function evaluate(tokens){
	var ans;
	var stack = [];
	
	for(var i=0;i<tokens.length;i++){
		
		var token = tokens[i];
//		console.log(parseInt(token));
		if(!isNaN(parseInt(token))){
			stack.push(parseInt(token));
		}else{
			
			var val1 = stack.pop();
			var val2 = stack.pop();
			console.log(val1, val2);
			if(token == '+'){
				stack.push(val2+val1);
			}else if(token == '-'){
				stack.push(val2-val1);
			}else if(token == '*'){
				stack.push(parseInt(val2*val1));
			}else if(token == '/'){
				stack.push(parseInt(val2/val1));
			}
			

		}
	}
	return stack.pop(); 
}