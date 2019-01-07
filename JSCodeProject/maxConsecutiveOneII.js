/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnesII = function(nums) {
    let count = 0;
    let maxLen = 0;
    let flipZero = false;
    
    for(let n of nums){
        if(n == 1){
            count++;
        }else if(n == 0 && !flipZero){
            count++;
            flipZero = true;
        }else if(n == 0 && flipZero){
            count = 0;
        }
        
        maxLen = Math.max(maxLen,count);
    }
    return maxLen;    
};

console.log(findMaxConsecutiveOnesII([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnesII([1,0,1,1,0,1]));
console.log(findMaxConsecutiveOnesII([1,0,1,1,0]));