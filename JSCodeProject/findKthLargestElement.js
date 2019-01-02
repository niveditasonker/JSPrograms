//var numArr = [1,1,1,2,2,3];
//var numArr = [3,2,1,5,6,4];
var numArr = [3,2,3,1,2,4,5,5,6];
//var lelem = 2;
var lelem = 4;

sortArr(numArr);
function sortArr(nums){
	for(var i=0;i<nums.length-1;i++){
		var min = i;
		for(var j=i+1;j<nums.length;j++){
			
//			if(nums[j]<nums[min]){
			if(nums[j]>nums[min]){ //Desc sort
				min = j;
			}
			var temp = nums[min];
			nums[min] = nums[i];
			nums[i] = temp;
		}
	}
	console.log(nums);
}

//console.log(numArr[numArr.length-lelem]); //Is sort is asc
console.log(numArr[lelem-1]);

//console.log(contains(numArr,8));

function contains(arr, x){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == x){
			return true;
		}
	}
	return false;
}

function findKthLargest(nums, k){
	let start = 0, end = nums.length-1; idx = nums.length-k;
	
	while(start<end){
		let pivot = partition(nums,start,end);
		if(pivot < idx){
			start = pivot + 1;
		}else if(pivot > idx){
			end = pivot - 1;
		}else{
			return nums[pivot];
		}
	}
	
	return nums[start];
}

function partition(nums,s,e){
	let pvt = s;
	let temp;
	
	while(s <= e){
		while(s<=e && nums[s] <= nums[pvt]) s++;
		while(s<=e && nums[e] > nums[pvt]) e--;
		if(s>e) break;
		temp = nums[s];
		nums[s] = nums[e];
		nums[e] = temp;
	}
	
	temp = nums[e];
	nums[e] = nums[pvt];
	nums[pvt] = temp;
	
	return e;
}

var num = [3,2,3,1,2,4,5,6];
console.log(".......",findKthLargest(num, 2));