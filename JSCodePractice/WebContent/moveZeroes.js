var nums = [0, 5, 0, 13, 12];
var c = 0;
var n = nums.length;

for(var i=0; i<nums.length;i++){
	if(nums[i] != 0){
		console.log(c, nums[i], nums[c]);
		nums[c++] = nums[i];
//		console.log(c, nums[i], nums[c]);
	}
}
//console.log(c);
while(c<nums.length){
	nums[c++] = 0;
}

console.log(nums);