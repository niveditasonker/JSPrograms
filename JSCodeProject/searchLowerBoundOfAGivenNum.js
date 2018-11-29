var nums = [1, 2, 4, 6, 10, 12, 14];
var x = 7;

function searchLowerBound(arr,lo,hi,x){
	if(lo>hi) return -1;
	
	if(x>=arr[hi]) return hi;
	
	var mid = parseInt((hi+lo)/2);
	
	if(arr[mid]==x) return mid;
	
	if(mid>0 && arr[mid-1]<=x && x<arr[mid]) return mid-1;
	
	if(x<arr[mid]) return searchLowerBound(arr,lo,mid-1,x);
	
	return searchLowerBound(arr,mid+1,hi,x);
	
}

var idx = searchLowerBound(nums,0, nums.length-1,x);
console.log(nums[idx]);