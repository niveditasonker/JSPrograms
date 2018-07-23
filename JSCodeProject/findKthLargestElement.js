//var numArr = [1,1,1,2,2,3];
//var numArr = [3,2,1,5,6,4];
var numArr = [3,2,3,1,2,4,5,5,6];
//var lelem = 2;
var lelem = 4;

sortArr(numArr);
function sortArr(nums){
	for(var i=0;i<nums.length-1;i++){
		for(var j=i+1;j<nums.length;j++){
			var min = i;
//			if(nums[j]<nums[min]){
			if(nums[j]>nums[min]){
				min = j;
			}
			var temp = nums[min];
			nums[min] = nums[i];
			nums[i] = temp;
		}
	}
	console.log(nums);
}

console.log(numArr[numArr.length-lelem]);
console.log(numArr[lelem-1]);

console.log(contains(numArr,8));

function contains(arr, x){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == x){
			return true;
		}
	}
	return false;
}