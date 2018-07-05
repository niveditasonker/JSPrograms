var nums = [1,2,3];

var subsets = function(nums){
	var res = [[]];
    
    function generate(nums,i,curr,res){
    	for(var i;i<nums.length;i++){
        	curr.push(nums[i]);
            res.push(curr.slice());
            generate(nums,i+1,curr,res);
            curr.pop();
        }
        //alert(res);
    }
    
    generate(nums,0,[],res);
    return res;
}


var subsets2 = function(nums) {
	var res= [];
    generate2(nums,0,[],res);
	return res;
}

var generate2 = function(nums,i,curr,result){
	if(i==nums.length){
    	result.push(curr.slice());
        return;
    }
    
    generate2(nums,i+1,curr,result);
    curr.push(nums[i]);
    generate2(nums,i+1,curr,result);
    curr.pop();
}

console.log(subsets2(nums));
console.log(subsets(nums));