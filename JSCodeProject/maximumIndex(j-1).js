var nums = [34, 8, 10, 3, 2, 80, 30, 33, 1];

function maxDifferenceBetweenJAndI(nums){
	let n = nums.length;
	var max = -1;
	
	let lMin = [], rMax = [];
	lMin[0] = nums[0];
	rMax[n-1] = nums[n-1];
	
	for(let i=1;i<nums.length;++i){
		lMin[i] = Math.min(nums[i], lMin[i-1]);
	}
	
	for(let j=nums.length-2;j>=0;--j){
		rMax[j] = Math.max(nums[j], rMax[j+1]);
	}
	console.log(lMin);
	console.log(rMax);
	
	let i=0, j=0;
	while(i< nums.length && j < nums.length){
		if(lMin[i] < rMax[j]){
			max = Math.max(max, j-i);
			j++;
		}else{
			i++;
		}
	}
	
	return max;
}


console.log(maxDifferenceBetweenJAndI(nums));
