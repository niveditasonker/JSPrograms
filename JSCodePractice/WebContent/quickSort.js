//var arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var arr = [12, 11, 13, 5, 6, 7];

console.log(arr);
var sortArr = quickSort(arr);
console.log(sortArr);

function quickSort(arr){
	if(arr.length < 2){
		return arr;
	}
	
	var left = [];
	var right = [];
	var result = [];
	var pivot = arr.pop();
	
	for(var i=0;i<arr.length;i++){
		if(arr[i]<= pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	
	return result.concat(quickSort(left),pivot,quickSort(right));
}