var n = 5;

var generate = function(numRows) {
    var res = [];
    var temp = [1];
    var curr = [];
    
    for(var i=0;i<numRows;i++){
    	for(var j=0;j<=i;j++){
    		curr[j] = (temp[j-1]||0) + (temp[j]||0);
    	}
    	res.push(curr);
    	temp = curr.slice();
    	curr = [];
    }

    
    return res;
};

console.log(generate(n));