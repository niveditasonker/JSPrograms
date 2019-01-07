/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var addResult = function(result, low, upper) {
  if (low == upper) {
    result.push(low.toString());
  } else if (low < upper) result.push(low + '->' + upper);
  return result;
};

var findMissingRanges = function(nums, lower, upper) {
    
  var result = new Array();
  //nums is empty
  if (nums.length == 0) {
    result = addResult(result, lower, upper);
  } else {
    //handle lower to num[0]
    result = addResult(result, lower, nums[0] - 1);
    //find each gap from 0 to length-2
    for (var i = 0; i < nums.length - 1; i++) {
      result = addResult(result, nums[i] + 1, nums[i + 1] - 1);
    }
    //handle last element to upper
    result = addResult(result, nums[nums.length - 1] + 1, upper);
  }
  return result;
};

var nums = [0, 1, 3, 50, 75], lower = 0, upper = 99;

console.log(findMissingRanges(nums,lower,upper));