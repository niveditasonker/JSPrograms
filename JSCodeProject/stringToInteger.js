var gvnStr = "-42";

var myAtoi = function(str) {
	var isNegative = null;
	var numStarted = false;
	var res = 0;
	
	for(let i=0;i<str.length;i++){
		if(str.charAt(i) == ''){
			if(!numStarted)continue;
			else getResult(isNegative,res);
		}
		
		if(isNegative==null){
			if(str.charAt(i)== '-'){
				isNegative = true;
				numStarted = true;
				continue;
			}else if(str.charAt(i)== '+'){
				isNegative = false;
				numStarted = true;
				continue;	
			}
		}
		
		var curr = parseInt(str.charAt(i));
		
		if(!isNaN(curr)){
			console.log("...",curr, res);
			res = res*10 + curr;
			if(!numStarted){
				numStarted = true;
			}
		}else{
			return getResult(isNegative,res);
		}
	}
	return getResult(isNegative,res);
}

function getResult(isNeg, result){
	result = isNeg?result*(-1):result;
	
	console.log(result, Number.MAX_VALUE,Number.MIN_VALUE );
	if(result > 2147483647) result =  2147483647;
	else if(result < -2147483647) result =  -2147483647;
	
//	if(result > Number.MAX_VALUE) result =  Number.MAX_VALUE;
//	else if(result < Number.MIN_VALUE) result =  Number.MIN_VALUE;
	
	console.log(result);
	return result;
}
console.log(myAtoi(gvnStr));