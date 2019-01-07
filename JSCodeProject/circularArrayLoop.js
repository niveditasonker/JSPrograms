var circularArrayLoop = function(nums) {
  for (let start = 0; start < nums.length; start++) {
            let cur = start;
            let ctn = 0;
            let dir = nums[cur];
            while (nums[cur] != 0) {
                if (nums[cur] * dir < 0) break;
                let next = ((nums[cur] + cur) + nums.length) % nums.length;
                nums[cur] = 0;
                cur = next;
                ctn++;
            }
            if (ctn > 1 && cur == start) {
                return true;
            }
        }
        return false;    
};

var circularArrayLoop2 = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            continue;
        }
        // slow/fast pointer
        let j = i, k = getIndex(i, nums);
        while (nums[k] * nums[i] > 0 && nums[getIndex(k, nums)] * nums[i] > 0) {
            if (j == k) {
                // check for loop with only one element
                if (j == getIndex(j, nums)) {
                    break;
                }
                return true;
            }
            j = getIndex(j, nums);
            k = getIndex(getIndex(k, nums), nums);
        }
        // loop not found, set all element along the way to 0
        j = i;
        let val = nums[i];
        while (nums[j] * val > 0) {
            let next = getIndex(j, nums);
            nums[j] = 0;
            j = next;
        }
    }
    return false;	
}

function getIndex(i, nums){
	let n = nums.length;
    return i + nums[i] >= 0? (i + nums[i]) % n: n + ((i + nums[i]) % n);
}
console.log(circularArrayLoop([2, -1, 1, 2, 2]));
console.log(circularArrayLoop([-1, 2]));

console.log(circularArrayLoop2([2, -1, 1, 2, 2]));
console.log(circularArrayLoop2([-1, 2]));