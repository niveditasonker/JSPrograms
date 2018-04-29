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

