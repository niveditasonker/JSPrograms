var countSmaller = function(nums) {
	var res =[],
	tmp = [],
	left,
	right,
	mid;
	
	for(let i=nums.length-1;i>=0;i--){
		left = 0;
		right = tmp.length;
		
		while(left<right){
			mid = parseInt((left+right)/2);
			
			if(tmp[mid] > nums[i]){
				right = mid;
			}else{
				left = mid+1;
			}
		}
		
		res[i] = right;
		tmp.splice(right,0,nums[i]);
	}
	
	return res;
};


console.log(countSmaller([5,2,6,1])); //NlogN