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
	
	if(result > 2147483647) result =  2147483647;
	else if(result < -2147483647) result =  -2147483647;
	
	return result;
}
console.log(myAtoi(gvnStr));