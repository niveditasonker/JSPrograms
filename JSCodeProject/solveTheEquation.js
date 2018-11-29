//var inp = "x+5-3+x=6+x-2";
//var inp ="x=x";
//var inp = "2x=x";
var inp =  "2x+3x-6x=x+2";
//var inp =  "x=x+2";

var solveEquation = function(equation) {
    var parts = equation.split("=");
    var leftPart = parts[0], rightPart = parts[1];
    leftVals = evaluate(leftPart), 
    rightVals = evaluate(rightPart);
    var cntX = leftVals[0] - rightVals[0]; 
//    console.log(".....",leftVals[1]||0 - rightVals[1]||0, leftVals[0]||0 , rightVals[0]||0);
    var cntNum = leftVals[1]||0 - rightVals[1]||0; 
    if (cntX == 0) {
        if (cntNum != 0)
            return "No solution";
        return "Infinite solutions";
    }
//    console.log(leftVals,rightVals,cntX,cntNum);
    var valX = (-cntNum) / cntX;
    var result = "";
    result += "x="+valX;

    return result.toString();
};

function evaluate(exp){
	var res = [];
	var expElements = exp.split(/(?=[-+])/);
	
	for(let i=0;i<expElements.length;i++){
//		console.log(expElements[i]);
		
		if(expElements[i]=='x' || expElements[i]=='+x'){
			 if (res[0]) {
				 res[0]++;
			    } else {
			    	res[0] = 1;
			    }
			
		}
		else if(expElements[i]=='-x'){
			 if (res[0]) {
				 res[0]--;
			 }else {
			   res[0] = -1;
			 }
		}
		else if(expElements[i].includes('x')){
			 if (res[0]) {
				 res[0]+= parseInt(expElements[i].substring(0, expElements[i].indexOf("x")));
			 }else{
				 res[0] = parseInt(expElements[i].substring(0, expElements[i].indexOf("x")));
			 }
			 
        } else {
        	if (res[1]) {
        		res[1] += parseInt(expElements[i]);
        	}else{
        		res[1] = parseInt(expElements[i]);
        	}
        
		}
//		console.log("Res: ",res,expElements[i]);
	}
	
	return res;
}

console.log(solveEquation(inp));