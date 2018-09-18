var arr = [7, 3, 5, 4, 5, 3, 4];

function findSingle(nums){
	var res = nums[0];
	
	for(var i=1;i<nums.length;i++){
		res = res ^ nums[i];
	}
	
	return res;
}

function findSingle2(nums){
	var data = {};
	
	for(var i=0;i<nums.length;i++){
	
		if(data[nums[i]]==undefined){
			data[nums[i]] = {};
			data[nums[i]]["count"] = 0;
		}
		data[nums[i]]["count"]++;
	}
	console.log(data);
	for(var n in data){
		if(data[n]["count"]==1) return n;
	}
}

console.log(findSingle(arr));
console.log(findSingle2(arr));