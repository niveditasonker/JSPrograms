var numArr = [1,1,1,2,2,3];
var freq = 2;

var topKFrequent = function(nums, k) {
    var data= {};
    
    for(var i=0; i<nums.length;i++){
    	if(data[nums[i]]==undefined){
    		data[nums[i]]={};
    		data[nums[i]]["count"] = 0;
    	}
    	data[nums[i]]["count"]++;
    }
//    console.log(data);
    
    for (var c in data){
    	if(data[c]["count"] >= k){
    		console.log(c, data[c]["count"]);
    	}
    }
}

topKFrequent(numArr, freq);



