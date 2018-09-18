var num = [4,5,6,7,0,1,2];
var target = 2;

var findIndex = function(arr,target){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == target){
//			console.log(arr.indexOf(arr[i]));
			return arr.indexOf(arr[i]);
		}
	}
	return -1;
}
var t = findIndex(num,target);
console.log(t);

var nums = [2,5,6,0,0,1,2];
var fetch = 3;

var bool = function(arr,val){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == val){
			return true;
		}
	}
	return false;
	
}

var searchInRotatedArrayII = function(num, tgt){
	var start = 0;
	var end = num.length;
	var mid;
	
	while(start <= end){
		mid = parseInt(start+end)/2;
		
		if(num[mid] == tgt) return true;
		
		if(num[mid] < num[end]){
			if(num[mid] < tgt && num[end] >= tgt){
				start = mid+1;
			}else{
				end = mid-1;
			}
		}else if(num[mid] > num[end]){
			if(num[mid] > tgt && num[start] <= tgt){
				end = mid -1;
			}else{
				start = mid + 1;
			}
		}else{
			end--;
		}
	}
	
	return false;
}

console.log(bool(nums, fetch));

console.log(searchInRotatedArrayII(num,target));