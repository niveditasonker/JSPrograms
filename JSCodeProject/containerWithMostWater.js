var arr = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
    var l = 0;
    var r = height.length-1;
    var max = 0;
    
    while(l<r){
    	var curr  = (r-l) * Math.min(height[l],height[r]);
    	max  = Math.max(max,curr);
    	if(height[l] <= height[r]) l++;
    	else r--;
    }
    
    return max;
};

var maxContainerArea = function(height) {
    var l = 0;
    var r = height.length-1;
    var max = 0;
    
    while(l<r){
    	if(height[l] <= height[r]){
    		max = Math.max(max,height[l]*(r-l));
    		l++;
    	}else{
    		max = Math.max(max,height[r]*(r-l));
    		r--;
    	}
    }
    
    return max;
};

console.log(maxContainerArea(arr));
console.log(maxArea(arr));