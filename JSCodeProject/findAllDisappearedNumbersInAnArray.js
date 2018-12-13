var findDisappearedNumbers = function(nums) {
    var res = [];
    for(var i=0;i<nums.length;i++){
        var val = Math.abs(nums[i]) - 1;
//        console.log(val,nums[val]);
        if(nums[val] > 0) nums[val] = -nums[val];
//        console.log("2....",val,nums[val]);
    }
    console.log(nums);
    for(var i=0;i<nums.length;i++){
        
        if(nums[i] > 0){
            res.push(i+1)
        }
    }
    
    return res;
    
};

var arr = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(arr));
