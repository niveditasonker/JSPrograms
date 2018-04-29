//var arr = [13,14, 45, 66, 38, 22];
var arr = [3, 5, 2, -4, 8, 11];
var sum = 7;

var count = checkPairs(arr, sum);
console.log(count);

function sortArr(arr){
	
	if (arr.length < 2){
		return arr;
	}
	var left = [];
	var right = [];
	var result = [];
	var pivot = arr.pop();
	
	for(var i=0;i<arr.length;i++){
		if(arr[i] <= pivot ){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	
	return result.concat(sortArr(left),pivot,sortArr(right));
	
}

function checkPairs(arr, k){
	var nArr = sortArr(arr);
	console.log(nArr);
	var left = 0;
	var right = nArr.length -1;
	var count = 0;
	var rArr = [];
	
	while(left <= right){
		if(nArr[left]+nArr[right] == k){
			rArr.push([nArr[left],nArr[right]]);
			count++;
		}
		if(nArr[left]+nArr[right] < k){
			left ++;
		}else{
			right--;
		}
	}
	return rArr;
}
