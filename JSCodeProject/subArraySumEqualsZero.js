var nums = [4, 2, -3, 1, 6];

var isSubArrZero = function(arr){
	if(arr.length==0 || arr == null){
		return;
	}
	
	var map = {};
	var sum = 0;
	var res = [];
	
	for(let i=0;i<arr.length;i++){
		sum += arr[i];
		if(arr[i] == 0 || sum == 0 || map[sum] != null){
			console.log(map);
			res.push(map[sum]+1,i);
			console.log(res);
			return true;
		}
		map[sum] = i;
	}
	console.log("False:",map);
	console.log(res);
	return false;
}

console.log(isSubArrZero(nums));
console.log(isSubArrZero([-3, 2, 3, 1, 6]));