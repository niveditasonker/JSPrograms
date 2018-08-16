var arr = [1,1,2,3];

var permuteUnique = function(nums) {
    var res = [];
    var visited = [];
    generateUniquePerms(nums,0,visited,[],res);
    return res;
};

var generateUniquePerms = function(nums,idx,visited,output,res){
	
	if(nums.length==output.length ){
//		console.log(output.slice());
		res.push(output.slice());
		return;

	}
	
	for(var i=0;i<nums.length;i++){
		if(!visited[i]){
			if(i > 0 && nums[i] === nums[i-1] && !visited[i-1]) {
                continue;
            }
			visited[i] = true;
			output.push(nums[i]);
			generateUniquePerms(nums,idx+1,visited,output,res);
			output.pop();
			visited[i] = false;
		}
	}
}

console.log(permuteUnique(arr));