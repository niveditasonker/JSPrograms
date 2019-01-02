var search = function(nums, target) {
  if (nums == null || nums.length == 0) return false;
        var lo = 0;
        var hi = nums.length - 1;
        while (lo <= hi){
            var mid = (hi - lo)/2 + lo;
            if (nums[mid] == target){
                return true;
            }
            else if (nums[mid] > nums[hi]){
                if (target < nums[mid] && target > nums[hi]) hi = mid - 1;
                else lo = mid + 1;
            }
            else if (nums[mid] < nums[hi]){
                if (target < nums[mid] || target > nums[hi]) hi = mid - 1;
                else lo = mid + 1;
            }else {
                hi--;
            }
        }
        return false;    
};