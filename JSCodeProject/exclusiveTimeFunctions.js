var n = 2, logs = 
	["0:start:0",
	 "1:start:2",
	 "1:end:5",
	 "0:end:6"];

var exclusiveTime = function(n, logs) {
    var res = [];
    var stack = [];
    
    for(log of logs){
    	var s = log.split(":");
    	var idx = parseInt(s[0]);
    	var t = parseInt(s[2]);
    	if(s[1] == "start"){
    		stack.push([idx,t]);
    	}else{
    		//var tmp = stack.pop();
    		var v = t - stack.pop()[1] + 1;

    		if(res[idx]){
    			res[idx] += v;
    		}else{
    			res[idx] = v;
    		}
    		
    		console.log(".........",v,idx,t, res[idx], stack.length, res.length, res[0], res[1], stack[stack.length-1]);
//    		console.log(stack);
		
    		if(stack.length > 0){
    			var temp = stack[stack.length-1][0];
    			
    			console.log("Here: ", res[temp]);
    			res[temp] -= v;
    		}
    	}
    }
    
    return res;
};

console.log(exclusiveTime(n,logs));