var nums = [5,7,7,8,8,10];
var tgt = 8;

var searchRange = function(nums, target) {
    var res = [];
    
    if(nums.length==0 || nums == null) return res[-1,-1];
    
    var start = 0;
    var end = nums.length;
    var mid = -1;
    
    while(start<end){
    	mid = parseInt(start+end)/2;
    	
    	if(nums[mid]== target) break
    	if(nums[mid] > target) end--;
    	if(nums[mid] < target) start++;
    }
    
    if(start>=end){
    	return res[-1,-1];
    }
    
    var left = mid;
    var right = mid;
    
    while(left>=0 && nums[left] == target) left--;
    while(right<=nums.length-1 && nums[right] == target) right++;
    
    res.push(left+1,right-1);
    return res;
};

var bs1 = function(nums, target){
	var idx = -1;
	var start = 0;
	var end = nums.length-1;
//	console.log(idx,start,end);
	while(start<=end){
		var mid = parseInt(start+end)/2;
		if(nums[mid]>=target) end = mid-1;
		else start = mid+1;
		
		if(nums[mid] == target) idx = mid;
	}
	return idx;
}

var bs2 = function(nums, target){
//	var idx = -1;
//	var start = 0;
//	var end = nums.length-1;
//	console.log(idx,start,end);
//	while(start<=end){
//		var mid = parseInt(start+end)/2;
//		if(nums[mid]<=target) start = mid+1;
//		else end = mid-1;
//		
//		if(nums[mid] == target) idx = mid;
//	}
//	return idx;	
	
	  var idx = -1;
	    var start = 0;
	    var end = nums.length - 1;
	    while(start <= end){
	        var mid = parseInt(start + end) / 2;
	        if(nums[mid] <= target){
	            start = mid + 1;
	        }else{
	            end = mid - 1;
	        }
	        if(nums[mid] == target) idx = mid;
	    }
	    return idx;
}

var searchRangeUsingTwoBS = function(nums, target) {
    var res = [];
    
//    if(nums.length==0 || nums == null) return res[-1,-1];
    res[0] = bs1(nums,target);
    res[1] = bs2(nums,target);
    return res;
}


console.log(searchRange(nums,tgt));
//console.log(searchRangeUsingTwoBS(nums,tgt));