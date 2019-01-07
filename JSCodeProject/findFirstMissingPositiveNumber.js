/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let tmp;
    
    for(let i=0;i<nums.length;){
        if(nums[i] != i+1 && nums[i] > 0 && nums[i] < nums.length && nums[i] != nums[nums[i]-1]){
            swap(i, nums[i]-1,nums)
        }else{
            i++;
        }
    }
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] != i+1) return i+1;
    }
};

function swap(i,j,nums){
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    return;
}

console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));