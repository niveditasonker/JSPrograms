var dailyTemperatures = function(T) {
//    let res = Array.from({length:T.length},x=>0);
    let res = new Array(T.length).fill(0);
    console.log(res);
    let stack = [];
    for(let i=0; i<T.length; i++){
    	console.log(i,stack.length,T[i],stack[stack.length-1],T[stack[stack.length-1]]);
    	while(stack.length>0 && T[stack[stack.length-1]]<T[i]){
    		console.log("1....",i,stack.length,T[i],stack[stack.length-1],T[stack[stack.length-1]]);
    		let j = stack.pop();
    		res[j] = i-j;
    	}
    	stack.push(i);
    }
    return res;
};

var dailyTemperatures2 = function(T) {

	var low = 0;
	var high = 1;
	var index = 0;
	var result = new Array(T.length);
	while(low < T.length) {
	    if(high > T.length-1) {
	        result[index] = 0;
	        low++;
	        index++;
	        high = low+1;
	    } else if (T[high] > T[low]) {
	        result[index] = high-low;
	        low++;
	        index++;
	        high = low+1;
	    } else {
	        high++;
	    }
	}
	return result;
};

var T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T));
console.log(dailyTemperatures2(T));