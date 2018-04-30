var arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

swapNumbers(arr);
console.log(arr);

function swapNumbers(arr){
	
	var temp = 0;
	var i = -1;
	
	for(var j=0; j<arr.length; j++){
		if(arr[j] < 0){
			i++;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
//		console.log(arr);
		
	var pos = i+1;
	var neg = 0;
		
	while((pos < arr.length) && (neg<pos) && (arr[neg] < 0)){
		temp = arr[neg];
		arr[neg] = arr[pos];
		arr[pos] = temp;
		neg += 2; 
		pos++;
	}
	
	
}