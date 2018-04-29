//var arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var arr = [12, 11, 13, 5, 6, 7];

console.log(arr);


function sortArr(arr){
	if(arr.length < 2){
		return arr;
	}
	var mid  = parseInt(arr.length/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid,arr.length);
//	console.log(left,right);
	return mergeArr(sortArr(left), sortArr(right));	

}

function mergeArr(left,right){
	var result = [];
	while(left.length && right.length){
		if(left[0] <= right[0]){
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	
	while(left.length){
		result.push(left.shift());
	}
	while(right.length){
		result.push(right.shift());
	}
	return result;
}
console.log(sortArr(arr));
