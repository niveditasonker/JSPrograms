var arr = [-2,1,-3,4,-1,2,1,-5,4];
//Solved using Kadane's Algorithm: Basically storing the prev element's value i.e. [i-1]

function maxSubArr(a){
	var dp = [];
	dp[0] = a[0];
	var max = -Infinity;
	
	for(var i=1;i<a.length;i++){
		console.log("1... "+dp[i],dp[i-1],a[i]);
		dp[i] = a[i] +(dp[i-1] > 0 ? dp[i-1] : 0);
		console.log("2... "+dp[i]);
		max = Math.max(max,dp[i]);
	}
	return max;
}

var maxSubArray = function(nums) {
    var sum = 0;
    var maxSum = -Infinity;
    
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        
        if(sum < 0){
            sum = 0;
        }
    }
    
    return maxSum;
};


var maxSubArrayWithIdx = function(nums) {
    var sum = 0;
    var maxSum = -Infinity;
    var res = [];
    
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
//        maxSum = Math.max(maxSum, sum);
        if(sum > maxSum){
        	res.push(nums[i]);
        	maxSum = sum;
        }
        
        if(sum < 0){
            sum = 0;
        }
    }
    
    console.log(res);
    return maxSum;
};
console.log(maxSubArr(arr));
console.log(maxSubArray(arr));
//console.log(maxSubArrayWithIdx(arr));