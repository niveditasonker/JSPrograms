var subarraySum = function(nums, k) {
    var map = {0:1};
    var sum = 0;
    var count = 0;
    
    for(var i=0;i<nums.length;i++){
        sum += nums[i];
        
        count += map[sum-k]||0;
        map[sum] = (map[sum] || 0) + 1;
    }
    
    return count;
};

var arr = [1,1,1];
var k =2;

//var arr = [1,1,1,2,3];
//var k =3;

console.log(subarraySum(arr,k));

//Complexity: O(n)