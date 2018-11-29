var maximumProduct = function(nums) {
var max1 = Number.MIN_VALUE, max2 = Number.MIN_VALUE, max3 = Number.MIN_VALUE, min1 = Number.MAX_VALUE, min2 = Number.MAX_VALUE;
        for (var n in nums) {
//        	console.log(nums[n]);
            if (nums[n] > max1) {
                max3 = max2;
                max2 = max1;
                max1 = nums[n];
            } else if (nums[n] > max2) {
                max3 = max2;
                max2 = nums[n];
            } else if (nums[n] > max3) {
                max3 = nums[n];
            }

            if (nums[n] < min1) {
                min2 = min1;
                min1 = nums[n];
            } else if (nums[n] < min2) {
                min2 = nums[n];
            }
        }
        return Math.max(max1*max2*max3, max1*min1*min2);
};

console.log(maximumProduct([1,2,3]));