var intervals1 = [[1,3],[6,9]], newInterval1 = [2,5];
var intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval2 = [4,8];

var insert = function(intervals, newInterval) {
    var res = [];
    isPresent = false;
    
    for(let interval of intervals){
// [1] is end and [0] is start
    	if(isPresent){
    		res.push(interval);
    	}else if(newInterval[1] < interval[0]){ 
    		res.push(newInterval);
    		res.push(interval);
    		isPresent = true;
    	}else if(interval[1] < newInterval[0]){
    		res.push(interval);
    	}else{
    		newInterval[0] = Math.min(newInterval[0], interval[0]);
    		newInterval[1] = Math.max(newInterval[1], interval[1]);
    	}
    }
    
    if(!isPresent){
    	res.push(newInterval);
    }
    
    return res;
};

console.log(insert(intervals1, newInterval1));
console.log(insert(intervals2, newInterval2));