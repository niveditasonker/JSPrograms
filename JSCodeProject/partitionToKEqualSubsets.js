
function issearch(groups, row,nums, target){
//    public boolean search(int[] groups, int row, int[] nums, int target) {
        if (row < 0) return true;
       
        var v = nums[row--];
        console.log("1....",row,v);
        
        for (var i = 0; i < groups.length; i++) {
        	 console.log(i,v,groups[i], target);
        
            if (groups[i] + v <= target) {                                  
                groups[i] += v;                  
                if (issearch(groups, row, nums, target));                  
                groups[i] -= v;              
             }              
         if (groups[i] == 0) break;          
          }          

       return false;      
//    }
}


var canPartitionKSubsets = function(nums, k) {
	
	var sum = nums.reduce((tsum,n,idx,nums) =>{
		return tsum += n;
	});
	

	if(sum % k > 0) return false;
	var target = sum/k;
	
	nums.sort(function(a,b){
		return a - b;
	});
	
	var row = nums.length-1;
	
	
	
	while((row >= 0) && (nums[row] == target)){
		console.log(row, nums[row],k);
		row--;
		k--;
	}
	console.log(row, nums[row],k,target);
	var tempArr = new Array(k);
	console.log(tempArr, row);
	return issearch(tempArr, row, nums, target);
	
}


var canPartitionKSubsets2 = function(nums, k) {

	var sum = nums.reduce((tsum,n,idx,nums) =>{
		return tsum += n;
	});
	if(sum%k!==0) return false;
	
	var used = Array.from({length:nums.length}, x=>false);
	console.log(used);
	var n = sum/k;
	var left = nums.length;
//	console.log(left);

	return (function search(start, target){
		console.log("st-tg",start,target);
		if(left===0) return true;
		if(target===0){
			console.log("in if",start,target);
			return search(0, n);
		}
		for(let i=start; i<nums.length; i++){
			console.log("in for",nums[i],n);
			if(nums[i]>n){
				console.log("in for if ",nums[i],n);
				return false;
			}
			console.log("Here  ",i,used[i],nums[i]<=target);
			if(!used[i] && nums[i]<=target){
				used[i]=true;
				left--;
				console.log("in inner if ",i,used[i],left);
				if(search(i+1, target-nums[i])) return true;
				used[i]=false;
				left++;
			}
		}
		return false;
	})(0, n);
}


var partition = function(nums,k){
	var sum = nums.reduce((tsum,n,idx,nums) =>{
		return tsum += n;
	});
	console.log(sum);
	if(sum % k !== 0) return false;
	var tgt = sum/k;
	var left = nums.length;
	var used = Array.from({length:nums.length}, x=>false);
	console.log(used);
	return (function check(start,end){
		if(left === 0) return true;
		
		if(end === 0){
			return check(0,tgt);
		}
		
		for(var i=start;i<nums.length;i++){
			if(nums[i] > tgt){
				return false;
			}
			
			if(!used[i] && nums[i]<=end){
				used[i] = true;
				left--;
				if(check(i+1,end-nums[i])) return true;
				used[i] = false;
				left++;
			}
		}
		return false;
	})(0,tgt);
}
var arr = [4, 3, 2, 3, 5, 2, 1];
var k = 4;
//console.log(canPartitionKSubsets(arr,k));
//console.log(canPartitionKSubsets2(arr,k));
console.log(partition(arr,k));
