var inp = [3,4,5,1,2];

var findMin = function(nums) {

    var len = nums.length;
    var start = 0;
    var end = len-1;
    var mid;
    
    while(start < end){
    	mid = parseInt((start+end)/2);    	
    	if(nums[mid]<nums[start]){
    		end = mid;
    	}else if(nums[end] < nums[mid]){
    		start = mid+1;
    	}else{
    		return nums[start];
    	}
    }
    
    return nums[start];
    
};

var findMin2 = function(nums) {
    var s = 0;
    var e = nums.length - 1;
    var min;

    while(s<e-1){
        var mid = s + parseInt((e-s)/2);

        if(nums[mid] < nums[s]){
            e = mid;
        } else if(nums[mid] > nums[e]) {
            s = mid;
        } else {
            return nums[s];
        }

    }

    return Math.min(nums[e], nums[s]);
};
console.log(findMin(inp));
console.log(findMin2(inp));