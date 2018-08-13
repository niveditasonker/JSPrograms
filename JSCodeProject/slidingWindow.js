var nums = [1,3,-1,-3,5,3,6,7];
//var nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var nums = [2, 5, 8, 1, 6, 0, 7, 4, 9, 3];
//var nums = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
var k = 3;

var slidingWindow = function(arr,k){
	var c=0;
	var max=0;
	var result = [];
	var n = arr.length -(k-1);
	
	while(c < n){
		for(var i=c;i<(c+k);i++){
			if(arr[i] > max){
				max = arr[i];
			}
//			console.log(max,i,c,k,arr.length);
		}
		result.push(max);
//		console.log(result);
		c++;
	}
	return result;

}

var rArr = slidingWindow(nums,k);
console.log(rArr);