/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxLen = 0;
    
    for(let n of nums){
        if(n == 1){
            count++;
        }else{
            count = 0;
        }
        
        maxLen = Math.max(maxLen,count);
    }
    return maxLen;
};


console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));