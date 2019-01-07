/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//     let c = nums.length;
//     let len = nums.length;
//     let set = new Set();
    
//     for(let i=0;i<nums.length;){
//         if(!set.has(nums[i])){
//             set.add(nums[i]);
//         }else{
//             console.log(i,nums[i], set);
//             nums.splice(i,1);
//             c--;
//             i++;
//         }
//         console.log("i:",i);
//     }
    
//     return c;
//     let count = 0;
//     for(let i=1;i<nums.length;i++){
//         if(nums[i] == nums[i-1]){
//             count++;
           
//         }else{
//               nums[i-count] = nums[i];
//         }
//     }
//     return nums.length-count;
    
    let top = -1
    for(let i = 0;i<nums.length;i++){
        if(top === -1 || nums[i]>nums[top]){
            nums[++top] = nums[i]
        }
    }
    return top+1;    
    
};
var removeDuplicates2 = function(nums) {
	let count = 0;
	for(let i=1;i<nums.length;i++){
		if(nums[i] == nums[i-1]){
			count++;
		}else{
			nums[i-count] = nums[i];
		}
	}
	return nums.length-count;
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates2([1,1,2]));

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));
