var arr = [1,2,1,2,6,7,5,1];
var k = 2;

var maxSumOfThreeSubarrays = function(nums, k) {
    var n = nums.length;
    var maxSum = 0;
    var sum = [];
    var posLeft = [];
    var posRight = [];
    var ans = [];
    
    
    for(var i=0;i<n;i++){
    	if(i==0) sum[i] = 0;
    	console.log(i,nums[i],sum[i]);
    	sum[i+1] = sum[i] + nums[i];
    }
    
    for(var i=k, tot = (sum[k] - sum[0]); i< n; i++){
    	
    }
};

console.log(maxSumOfThreeSubarrays(arr,k));