var arr = [1, 5, 11, 5], k =2;

var canPartition = function(nums) {
    var sum = 0;
    
    for(let i=0;i<nums.length;i++){
    	sum += nums[i];
    }
    if(sum % 2 !== 0) return false;
    sum /= 2;
    var dp = new Array(sum+1).fill(false);
    dp[0] = true;
    
    
    for(var n of nums){
    	console.log(n);
    	for(let i=sum;i>=n;i--){
    		dp[i] = dp[i] || dp[i - n];
    	}
    }
    return dp[sum];
};

console.log(canPartition(arr));