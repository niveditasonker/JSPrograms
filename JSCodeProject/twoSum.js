var nArr = [2, 7, 11, 15];

var tgt = 9;

var twoSum = function(nums, target) {
    var data = {};
    
    for(var i=0;i<nums.length;i++){
        var n = nums[i];
        var diff = target - nums[i];

        if(diff in data){
            return([data[diff],i]);
        }else{
        	data[n] = i;
        }
        
        
//        console.log(data);
    }
};

console.log(twoSum(nArr, tgt));


var twoSum2 = function(nums, target) {
    var hash = {};
    for (var i=0; i<nums.length; i++) {
        hash[nums[i]] = i;
    }

    for (i=0; i<nums.length; i++) {
        if (hash[target-nums[i]] > 0) {
            return [ i, hash[target-nums[i]] ];
        }
    }


};

console.log(twoSum2(nArr, tgt));


function findNumber(arr, k) {
    
    if(arr.indexOf(k) != -1){
        return "YES"
    }else{
        return "NO"
    }

}

var arr = [3,2,3,1];
var k = 5;
console.log(findNumber(arr,k));



