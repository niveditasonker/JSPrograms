var canPartitionKSubsets = function(nums, k) {
	
	if(nums == null || nums.length == 0){
		return false;
	}
	var sum = 0;
	for(var i=0;i<nums.length;i++){
		sum += nums[i];
	}
	console.log(sum);
	
	if(sum % k != 0){
		return false;
	}
	
	nums.sort(function(a,b){
		return a - b;
	});
	
	console.log(k);
	var bucket = new Array(k);
	console.log(bucket.length);
	return dfs(nums, bucket, nums.length-1, sum/k);
};

var dfs = function(n, bkt, idx, target){
	console.log(bkt);
	if(idx == -1){
		return false;
	}
	
	for(var i = 0; i < bkt.length; i++) {
		if(bkt[i] + n[idx] <= target) {
			bkt[i] += n[idx];
			if(dfs(n, bkt, idx - 1, target))  return true;
            
			bkt[i] -= nums[idx];
		}
	}
	console.log("..........");
	console.log(bkt);
	return false;
}

var arr = [4, 3, 2, 3, 5, 2, 1];
var k = 4;
console.log(canPartitionKSubsets(arr,k));
