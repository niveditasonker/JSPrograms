//var num = [0,1,0,2,1,0,1,3,2,1,2,1];
var num = [3, 0, 0, 2, 0, 4];

var trapRainWater = function(arr){
	var water = 0;
	var left = []; right = [];
	left[0] = arr[0];
	right[arr.length-1] = arr[arr.length-1];
	
	for(var i=1;i<arr.length;i++){
		left[i] = Math.max(left[i-1],arr[i]);
	}
	
//	console.log(left);
	
	for(var j=arr.length-2;j>=0;j--){
		right[j] = Math.max(right[j+1],arr[j]);
	}
//	console.log(right);
	for(var k=0; k<arr.length;k++){
		water += Math.min(left[k],right[k]) -arr[k];
	}
	
	return water;
}

var trapWater = function(arr){
	var n = arr.length;
	var low = 0; high = n-1;
	var left_max = 0; right_max = 0;
	var result = 0;
	
	while(low <= high){
		if(arr[low] < arr[high]){
			if(arr[low] > left_max){
				left_max = arr[low];
			}else{
				result += left_max - arr[low];
				low++;
			}
		}else{
			if(arr[high] > right_max){
				right_max = arr[high];
			}else{
				result += right_max - arr[high];
				high--;
			}
		}
	}
	return result;
	
}

var tw = trapRainWater(num);
console.log(tw);

var wat = trapWater(num);
console.log(wat);