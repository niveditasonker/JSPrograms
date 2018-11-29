//var nums = [5, 1, 2, 4, 6, 10, 12, 14];
var nums = [5, 1, 4, 3, 6, 8, 10, 7, 9];

function findElement(arr,n){
	var left = [];
	left[0] = Number.MIN_VALUE;
	
	for(let i=1;i<arr.length;i++){
		left[i] = Math.max(arr[i-1],left[i-1]);
	}
	
	var right = Number.MAX_VALUE;
	
	for(let i=arr.length-1;i>=0;i--){
		if((left[i] < arr[i]) && (arr[i] < right)) return [i,arr[i]];
		
		right = Math.min(right, arr[i]);
	}
	
	return -1;
	 
}

console.log(findElement(nums,nums.length));