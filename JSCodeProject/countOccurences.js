var nums = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
var search = 4;

var binarySearch = function(arr,l,r,x){
	if(r<l) return -1;
	
	var mid = parseInt((l+r)/2);
	
	if(arr[mid]==x) return mid;
	
	if(arr[mid]>x) return binarySearch(arr,l,mid-1,x);
	
	return binarySearch(arr,mid+1,r,x);
}

var countOccurences = function(arr, x){
	var s = 0;
	var end = arr.length-1;
	var count = 1;
	
	var idx = binarySearch(arr,s,end,x);
	console.log("Idx: ",idx);
	
	if(idx==-1) return 0;
	
	var left = idx - 1;
	var right = idx + 1;
	
	while(left>=0 && arr[left]==x){
//		console.log("left....",left,arr[left]);
		count++;
		left--;
	}
	
	while(right < arr.length && arr[right]==x){
		count++;
		right++;
	}
	
	return count;
}

console.log(countOccurences(nums, search));