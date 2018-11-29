var arr = [1, 2, 3, 4, 5, 6, 7];
var arr2 = [1, 2, 3, 4, 5, 6, 7];
var d = 2;
var n = arr.length;

console.log(arr);
rotateArray(arr,d,n);
console.log(arr);
rotateArray2(arr2,d,n);
console.log("By reversal: ",arr2);

function rotateArray(arr,d,n){
	for (var i=0; i<d;i++){
		rotateByOne(arr,n);
	}
}

function rotateByOne(arr,n){
	var temp = arr[0];
	for (var i=0; i<n-1;i++){
		arr[i] = arr[i+1];
	}
	console.log("i: ",i, arr[i],temp);
	arr[i] = temp;
	console.log("i: ",i, arr[i],temp);
}

function rotateArray2(arr,d,n){
	reversalAlgo(arr,0,d-1);
	reversalAlgo(arr,d,n-1);
	reversalAlgo(arr,0,n-1);
}

function reversalAlgo(arr, start, end){
	var temp;
	
	while(start<end){
		temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}