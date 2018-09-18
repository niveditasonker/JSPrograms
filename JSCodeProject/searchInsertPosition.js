var inp = [1,3,5,6]; 
var tgt= 7;

var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length-1;
    
    while(left < right){
    	var mid = parseInt((left+right)/2);
    	
    	if(nums[mid]==target){
    		return mid;
    	}else if(nums[mid]>target){
    		right = mid-1;
    	}else{
    		left = mid +1;
    	}
    }
    
    if(nums[left]<target){
    	return left+1;
    }else{
    	return left;
    }
};

console.log(searchInsert(inp, tgt));