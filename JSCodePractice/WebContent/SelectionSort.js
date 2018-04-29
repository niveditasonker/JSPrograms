var arr = ["11","33","56","78","25","9"];
var nums = ["11","33","56","78","25","9"];

var n = arr.length;
for(var i=0;i<nums.length-1;i++){
	for(var j=i+1;j<nums.length;j++){
		var min = i;
		if(nums[j]<nums[min]){
//		if(nums[j]>nums[min]){
			min = j;
		}
		var temp = nums[min];
		nums[min] = nums[i];
		nums[i] = temp;
	}
}
//console.log(nums);
//console.log(arr);
selectionSort(arr);

//for (var i=0;i<=arr.length-1;i++){
//	console.log(arr[i]+" ");
//}

function selectionSort(arr){
	
	  var minIdx, temp, 
	      len = arr.length;
	  for(var i = 0; i < len; i++){
	    minIdx = i;
	    for(var  j = i+1; j<len; j++){
//	    	console.log("min is: "+minIdx, i, j, arr[minIdx], arr[j]);
	       if(arr[j]<arr[minIdx]){
	          minIdx = j;
	       }
	    }
	    temp = arr[i];
	    arr[i] = arr[minIdx];
	    arr[minIdx] = temp;
//	   
	  }
	  console.log(arr);
	  return arr;
	}
	  