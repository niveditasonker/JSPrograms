var nums = [2,2,1,1,1,2,2];
//var nums = [3,1,4,3,4];

var majorityElement = function(nums) {
    var candidate;
    var count = 1;
    candidate = nums[0];
    
    for(var i=1;i<nums.length;i++){
    	if(count==0 || nums[i] == candidate){
    		count++;
    		candidate = nums[i];
    	}else{
    		count--;
    	}
    }
    return candidate;
    
};

var majorityElement2 = function(num) {
    var i,
        length = num.length,
        max,
        list = {};
    if (length === 1) {
        return num[0];
    }
    for (i = 0; i < length; i++) {
        if (list[num[i]]) {
            max = ++list[num[i]];
            if (i > length/2 - 1 && max >= length/2) {
                return num[i];
            }
        } else {
            list[num[i]] = 1;
        }
    }
    
};

console.log(majorityElement(nums));
console.log(majorityElement2(nums));