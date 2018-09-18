var arr = [1,3,5,6];
var n = 6;


function findMissingNumbers(arr,n){
	var arrLen = arr.length-1;
	var sum = (n*(n+1)/2) - findSumOfCurrArr(arr);
	var avg = sum/2;
	
	var sumSmallerHalf = 0;
	var sumGreaterHalf = 0;
	
	for(var i=0;i<=arrLen;i++){
		if(arr[i] <= avg) sumSmallerHalf += arr[i];
		else sumGreaterHalf += arr[i];
	}

	var totalSmallerHalf = (avg *(avg+1))/2;
	
//	console.log(totalSmallerHalf, sumSmallerHalf, sumGreaterHalf);
	
	var smallerNumMissing = totalSmallerHalf - sumSmallerHalf;
	var greaterNumMissing = ((n*(n+1)/2) - totalSmallerHalf) - sumGreaterHalf;
	
	console.log(smallerNumMissing,greaterNumMissing);
	return;
}

function findSumOfCurrArr(arr){
	var currSum = 0;
	for(var i=0;i<arr.length;i++){
		currSum += arr[i];
	}
	
	return currSum;
}

findMissingNumbers(arr,n);