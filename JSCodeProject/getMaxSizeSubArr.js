var num = [1, -1, 5, -2, 3];
var k = 3;
//var num = [-2, -1, 2, 1];
//var k = 1;


console.log(getMaxSubArr(num, k));

function getMaxSubArr(num, k){
	var data={};
	var max = 0;
	var sum = 0;
	
	for(var i=0;i<num.length;i++){
		sum += num[i];
		
		if(sum==k){
			max = Math.max(max, i+1);
		}
		
		var diff = sum - k;
		
		if(diff in data){		
			max = Math.max(max, i-data[diff]);
		}
		
		if(data[sum] == undefined){
			data[sum] = i;
		}
	}
	
	return max;
}